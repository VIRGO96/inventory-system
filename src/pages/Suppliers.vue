<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Suppliers</h4>
            <p class="category">Manage your Business Suppliers</p>
          </md-card-header>
          <md-card-content>
            <data-table table-header-color="green" title="Sparco Users" :tableData="users"></data-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { DataTable } from "@/components";

export default {
  components: {
    DataTable
  },
  data() {
    return{
      users: [
        {
          name: "Dakota Rice",
          job_occupation: "$36,738",
          institute: "Niger",
          about: "Oud-Turnhout"
        },
        {
          name: "Minerva Hooper",
         job_occupation: "$36,738",
          institute: "Niger",
          about: "Oud-Turnhout"
        }
      ]
    }
  },

};
</script>
