import { account } from "./appwrite";
import { ID } from "react-native-appwrite";

const authService = {
  //Register
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), password, email);
      return response;
    } catch (error) {
      console.error("Error registering user:", error.message);
      return {
        error: error.message || "Registration failed. Please try again",
      };
    }
  },
  //Login
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      console.error("Error logging in user:", error.message);
      return {
        error: error.message || "Login failed. Please Check your credentials",
      };
    }
  },
  //Logout
  async logout() {
    try {
      const response = await account.deleteSession("current");
      return response;
    } catch (error) {
      console.error("Error logging out user:", error.message);
      return { error: error.message || "Logout failed. Please try again" };
    }
  },

  //Get user
  async getUser() {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      console.error("Error fetching user:", error.message);
      return { error: error.message || "Error fetching user" };
    }
  },
};
