<template>
  <div class="w-full lg:w-3/4 xl:w-3/6 container mx-auto px-4">
    <div class="p-2 flex justify-center">
      <h2 class="text-2xl">Add Tasks</h2>
    </div>
    <div class="p-2">
      <div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <input
          v-model="newTask"
          class="w-full p-2 border rounded placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-300"
          type="text"
          placeholder="Enter Task"
          required
        />
      </div>
    </div>
    <div class="p-2">
      <div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <button
          class="w-full py-2 px-4 border border-indigo-500 rounded-full text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
          @click="addTask"
        >
          Add Task
        </button>
      </div>
    </div>
    <div v-if="isError" class="p-2">
      <div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <span class="text-red-500">{{ isError }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import pinia from "../stores";
import { useTaskStore } from "../stores/task";

export default {
  name: "AddTask",
  setup() {
    const taskStore = useTaskStore(pinia());
    const newTask = ref("");
    const router = useRouter();

    const isError = computed(() => taskStore.error);

    const addTask = async () => {
      if (newTask.value.trim() !== "") {
        try {
          await taskStore.addTask({ title: newTask.value });
          if (!isError.value) {
            router.push({ name: "index" });
          }
        } catch (e) {}
      }
    };

    return {
      newTask,
      addTask,
      isError,
    };
  },
};
</script>
