<template>
  <b-container fluid>
    <b-row class="p-2">
      <h2>Add Tasks</h2>
    </b-row>
    <b-row class="p-2">
      <b-col class="m-auto" md="3" sm="12" xs="12">
        <b-form-input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Enter Task"
          type="text"
          required
        />
      </b-col>
    </b-row>
    <b-row class="p-2">
      <b-col class="m-auto" md="3" sm="12" xs="12">
        <b-button
          variant="outline-primary"
          class="w-100 rounded-pill"
          v-on:click="addTask"
        >
          Add Task
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BRow, BCol, BContainer, BButton } from "bootstrap-vue";
export default {
  name: "AddToDo",
  components: {
    BContainer,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.$store.dispatch("addTask", { title: this.newTask });
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
