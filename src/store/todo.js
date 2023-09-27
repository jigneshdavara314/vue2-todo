const state = {
  tasks: [
    {
      title: "Write a blog",
      completed: false,
    },
  ],
};

const getters = {
  allTasks: (state) => state.tasks,
};

const mutations = {
  addTask: (state, task) => {
    state.tasks.push(task);
  },
  removeTask: (state, index) => {
    state.tasks.splice(index, 1);
  },
  editTask: (state, index) => {
    state.tasks[index].completed = true;
  },
};

const actions = {
  addTask: ({ commit }, task) => {
    if (task.title.trim() !== "") {
      commit("addTask", {
        title: task.title,
        completed: false,
      });
    }
  },
  removeTask: ({ commit }, index) => {
    commit("removeTask", index);
  },
  editTask: ({ commit }, index) => {
    commit("editTask", index);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
