<template>
  <b-container fluid>
    <b-row class="p-2">
      <b-col col md="6" sm="10" xs="12" class="d-flex m-auto">
        <h2 style="text-align: initial">ToDo List</h2>
        <b-col class="ml-auto" style="text-align: end">
          <b-button
            class="rounded-pill"
            variant="outline-primary"
            v-on:click="goToAddTodo"
          >
            Add Task
          </b-button>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="mt-5 p-2">
      <b-col class="m-auto" col md="6" sm="10" xs="12">
        <b-table-simple small responsive striped hover>
          <b-thead>
            <b-tr>
              <b-th class="bthCss">TITLE</b-th>
              <b-th class="bthCss">STATUS</b-th>
              <b-th class="bthCss">MARK COMPLETED</b-th>
              <b-th class="bthCss">ACTION</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <template v-if="!!(tasks || []).length">
              <b-tr v-for="(task, i) of tasks" v-bind:key="i">
                <b-td>{{ task.title }}</b-td>
                <b-td>{{ task.completed ? "Completed" : "Pending" }}</b-td>
                <b-td>
                  <b-button
                    variant="outline-success"
                    class="btn-icon btn-sm rounded-pill"
                    :class="{ disabled: task.completed }"
                    @click.prevent="editTask(i)"
                  >
                    Complete
                  </b-button>
                </b-td>
                <b-td>
                  <b-button
                    variant="outline-danger"
                    class="btn-icon btn-sm rounded-pill"
                    @click.prevent="removeTask(i)"
                  >
                    Remove
                  </b-button>
                </b-td>
              </b-tr>
            </template>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BRow,
  BCol,
  BContainer,
  BButton,
  BTableSimple,
  BTr,
  BTh,
  BTd,
  BThead,
  BTbody,
} from "bootstrap-vue";
export default {
  name: "ToDoList",
  components: {
    BTr,
    BContainer,
    BRow,
    BCol,
    BButton,
    BTableSimple,
    BTh,
    BTd,
    BThead,
    BTbody,
  },
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    tasks() {
      return this.$store.getters["allTasks"];
    },
  },
  methods: {
    goToAddTodo() {
      this.$router.push({ name: "add-todo" });
    },
    removeTask(index) {
      this.$store.dispatch("removeTask", index);
    },
    editTask(index) {
      this.$store.dispatch("editTask", index);
    },
  },
};
</script>
<style scoped>
.bthCss {
  color: rgb(156 163 175 / 1);
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 1rem;
}
</style>
