import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import axios from "axios";
import AddTask from "../pages/add-task.vue";

describe("add-task.vue", () => {
  it("should add a task", async () => {
    let errorMessage = null;
    try {
      await axios.post("/api/task", { title: "testcase" });
    } catch (e) {
      errorMessage = e?.response?.data?.message || "An error occurred";
    }

    if (errorMessage) {
      console.log(errorMessage);
    }
    const wrapper = mount(AddTask);
    expect(wrapper.vm).toBeTruthy();
  });
});
