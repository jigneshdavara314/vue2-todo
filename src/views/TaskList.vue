<template>
  <div class="w-full lg:w-3/4 xl:w-3/6 container mx-auto mt-8 px-4">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl leading-7 text-gray-900 sm:text-3xl sm:tracking-tight">ToDo List</h2>
      <button
        type="button"
        class="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
        @click="goToAddTodo"
      >
        Add Task
      </button>
    </div>
    <div class="py-12">
      <div class="max-w-7xl mx-auto">
        <table class="table-auto w-full">
          <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
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
            <template v-if="!!(tasks || []).length">
              <tr v-for="(task, index) in tasks" :key="index">
                <td class="p-2 whitespace-nowrap">
                  <div class="text-md text-center font-medium text-gray-800">{{ task.title }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-md text-center font-medium text-gray-800">
                    {{ task.completed ? 'Completed' : 'Pending' }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-md text-center font-medium text-gray-800">
                    <button
                      type="button"
                      class="inline-flex items-center px-4 py-1 border border-green-500 text-green-500 rounded-full hover:bg-green-100 hover:text-green-600 focus:outline-none focus:ring focus:ring-green-300"
                      @click="editTask(index)"
                      :disabled="task.completed"
                      :class="{ 'disabled:opacity-50': task.completed }"
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
                      @click="removeTask(index)"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router'
import { useTaskStore } from '../stores/tasks'
export default {
  name: 'ToDoList',
  setup() {
    const taskStore = useTaskStore()
    const tasks = taskStore.tasks
    const goToAddTodo = () => {
      router.push({ name: 'add-task' })
    }
    const removeTask = (index) => {
      taskStore.removeTask(index)
    }
    const editTask = (index) => {
      taskStore.editTask(index)
    }
    return {
      tasks,
      goToAddTodo,
      removeTask,
      editTask
    }
  }
}
</script>