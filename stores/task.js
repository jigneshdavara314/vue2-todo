import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [],
    error: null,
  }),
  getters: {
    allTasks: (state) => state.tasks,
    isError: (state) => state.error !== null,
  },
  actions: {
    async addTask(task) {
      try {
        await axios.post("/api/task", task);
        this.error = null;
      } catch (error) {
        this.error = error?.response?.data?.message || "An error occurred";
      }
    },
    async removeTask(id) {
      try {
        await axios.delete(`/api/task/${id}`);
        await this.readTasksFromDb();
        this.error = null;
      } catch (error) {
        this.error = error?.response?.data?.message || "An error occurred";
      }
    },
    async editTask(id) {
      try {
        await axios.put(`/api/task/${id}`);
        await this.readTasksFromDb();
        this.error = null;
      } catch (error) {
        this.error = error?.response?.data?.message || "An error occurred";
      }
    },
    async readTasksFromDb() {
      try {
        const response = await axios.get("/api/task");
        this.tasks = response?.data || [];
        this.error = null;
      } catch (error) {
        this.error = error?.response?.data?.message || "An error occurred";
      }
    },
  },
});
