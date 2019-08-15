<template>
    <div class="table-responsive">
        <b-container fluid>
          <!-- User Interface controls -->
          <b-row>
            <b-col md="6" class="my-1">
              <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
                <b-input-group>
                  <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="6" class="my-1">
              <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
                <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Main table element -->
              <b-table  
              :items="tableData" 
              :fields="fields" 
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter">
              <template slot="actions" slot-scope="row">
                <button  class="btn btn-success btn-sm" @click="emitItem(row.item)" >View</button>
              </template> 
              </b-table>
          <b-row>
            <b-col md="6" class="my-1">
              <b-pagination
                  v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                class="my-0"
              ></b-pagination>
            </b-col>
          </b-row>
       
      </b-container>
    </div>

</template>
<script>
//  import {mapGetters} from 'vuex'
  export default {
    name: 'data-table',
    props: {
      type: {
        type: String
      },
      title: String,
      tableData: {
        type: Array,
        default: function () { return [] }
    },
    fields: {
        type: Array,
        default: function () { return [] }
    }
    },
    computed:{
      // ...mapGetters(['getUsers']),
         sortOptions() {
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    data() {
      return {
       
        items: [],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        

      }
    },
    methods : {
     
      emitItem(item){
        console.log(item)
        this.$emit("item-event", item);
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    },
    watch:{
      tableData(val) {
      this.totalRows = this.tableData.length

      }
    },
    created() {
      console.log(this.tableData.length)
      this.totalRows = this.tableData.length
    }
  }
</script>
