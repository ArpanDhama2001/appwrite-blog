import config from "../config.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.database = new Databases(this.client);
    this.consbucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const response = await this.database.createDocument(
        config.appwriteDatabseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: services :: createPost :: ", error);
    }
  }
}

const services = new Services();

export default services;
