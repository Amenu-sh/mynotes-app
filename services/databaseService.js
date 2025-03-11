import { database } from "./appwrite"; // Ensure this path is correct and the 'database' object is exported from 'appwrite'

const databaseService = {
  //List documents
  async listDocuments(dbId, colId) {
    try {
      const response = await database.listDocuments(dbId, colId);
      return response.documents || [];
    } catch (error) {
      console.error("Error fetching documents:", error.message);
      return { error: error.message };
    }
  },
  //Create documents
  async createDocument(dbId, colId, data, id = null) {
    try {
      const response = await database.createDocument(
        dbId,
        colId,
        id || undefined,
        data
      );
    } catch (error) {
      console.error("Error creating document:", error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
