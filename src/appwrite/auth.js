import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthSrvice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your API Endpoint
      .setProject(config.appwriteProjectID); // Your project ID

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
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
        console.log({err: error})
    }
    return null;
  }


  async logout (){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
  }
}

const authService = new AuthSrvice();

export default authService;