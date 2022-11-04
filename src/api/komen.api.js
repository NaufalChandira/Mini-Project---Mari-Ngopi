import { axiosInstance } from "../config/axiosInstance";

const commentAPI = {
    async getAllComment() {
        try {
          const response = await axiosInstance.get("/desc");
          console.log(response);
          return response;
        } catch (err) {
          console.log(err);
        }
      },
      async createComment(data) {
        try {
          const response = await axiosInstance.post("/desc", data);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
      async updateComment(data) {
        try {
          const id = data.id;
          const response = await axiosInstance.patch(`/desc/${id}`, data);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteCommentById(id) {
        try {
          const response = await axiosInstance.delete(`/desc/${id}`);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
};

export default commentAPI