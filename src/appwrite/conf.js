import config from "../config/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class service {
  client = new Client();
  databases;
  Bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your API Endpoint
      .setProject(config.appwriteProjectID); // Your project ID

    this.databases = new Databases(this.client);
    this.Bucket = new Storage(this.client)
  }

  async createPost({ title, slug, userId, content, status, featuredImages }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImages,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log({ err: error });
    }
  }

  async updatePOST(slug, { title, content, status, featuredImages }) {
    try {
      return this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImages,
          status,
        }
      );
    } catch (error) {
      console.log({ err: error });
    }
  }

  async deletPost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log({ err: error });

      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log({ err: error });
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log({ err: error });

      return false;
    }
  }

  // file upload
  async uploadFile(file) {
    try {
      return await this.Bucket.createFile(
        config.appwriteBucketID,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log({ err: error });

      return false;
    }
  }


  async deletFile(fileID) {
    try {
      await this.Bucket.deleteFile(
        config.appwriteBucketID,
        fileID
      )

      return true
    } catch (error) {
      console.log({ err: error });

      return false;
    }
  }

  getfilePreview(fileID){
    return this.Bucket.getFilePreview(
        config.appwriteBucketID,
        fileID
    )
  }


}

const service = service();
export default service;
