import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [
      {
        title: 'Write a blog',
        completed: false
      }
    ]
  }),
  getters: {
    allTasks: (state) => state.tasks
  },
  actions: {
    addTask(task) {
      if (task.title.trim() !== '') {
        this.tasks.push({
          title: task.title,
          completed: false
        })
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    editTask(index) {
      this.tasks[index].completed = true
    }
  }
})
