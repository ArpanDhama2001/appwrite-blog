import config from "../config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // If user account exists, login the user
        this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("auth.service.js :: createAccount :: error:", error);
    }
  }

  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("auth.service.js :: login :: error:", error);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log("auth.service.js :: getCurrentUser :: error:", error);
    }
    return null; // return null if no current user found
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("auth.service.js :: logout :: error:", error);
    }
  }
}

const authService = new AuthService();

export default authService;
