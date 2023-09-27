<template>
  <div class="w-full lg:w-3/4 xl:w-3/6 container mx-auto mt-8 px-4">
    <div class="flex items-center justify-between">
      <h2
        class="text-2xl leading-7 text-gray-900 sm:text-3xl sm:tracking-tight"
      >
        ToDo List
      </h2>
      <button
        type="button"
        class="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
        @click="goToAddTodo"
      >
        Add Task
      </button>
    </div>
    <div v-if="isError" class="flex items-center justify-between">
      <span class="text-red-500">{{ isError }}</span>
    </div>
    <div class="py-12">
      <div class="max-w-7xl mx-auto">
        <table class="table-auto w-full">
          <thead
            class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
          >
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-center">Title</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-center">Status</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-center">Mark Completed</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-center">Remove</div>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            <tr v-for="task in tasks" :key="task.id">
              <td class="p-2 whitespace-nowrap">
                <div class="text-md text-center font-medium text-gray-800">
                  {{ task.title }}
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-md text-center font-medium text-gray-800">
                  {{ task.is_complete ? "Completed" : "Pending" }}
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-md text-center font-medium text-gray-800">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-1 border border-green-500 text-green-500 rounded-full hover:bg-green-100 hover:text-green-600 focus:outline-none focus:ring focus:ring-green-300"
                    :disabled="task.is_complete"
                    :class="{ 'disabled:opacity-50': task.is_complete }"
                    @click="editTask(task.id)"
                  >
                    Complete
                  </button>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-md text-center font-medium text-gray-800">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-1 border border-red-500 text-red-500 rounded-full hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring focus:ring-red-300"
                    @click="removeTask(task.id)"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { useTaskStore } from "../stores/task";
export default {
  name: "Home",
  setup() {
    const taskStore = useTaskStore();
    const tasks = computed(() => taskStore.allTasks);
    const isError = computed(() => taskStore.isError);

    const removeTask = async (id) => {
      await taskStore.removeTask(id);
      if (!isError.value) {
        tasks.value = taskStore.tasks;
      }
    };

    const editTask = async (id) => {
      await taskStore.editTask(id);
      if (!isError.value) {
        tasks.value = taskStore.tasks;
      }
    };

    const goToAddTodo = () => {
      const router = useRouter();
      router.push({ name: "add-task" });
    };

    onMounted(async () => {
      try {
        await taskStore.readTasksFromDb();
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    });

    return {
      tasks,
      goToAddTodo,
      removeTask,
      editTask,
      isError,
    };
  },
};
</script>
