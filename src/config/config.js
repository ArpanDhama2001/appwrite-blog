const config = {
  appwriteUrl: String(import.meta.env.VITE_APP_WRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APP_WRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APP_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APP_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APP_BUCKET_ID),
};

export default config;
