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
                <button  class="btn btn-success btn-sm" v-b-modal.modal-1 >View Profile</button>
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
        <b-modal ref="profile_modal" ok-title="View Events" id="modal-3"  @ok="viewEvents" :title="infoModal.title"  @hide="resetInfoModal">
          <div class="row">

          <div  class="col-md-12" style="margin-top:-22px;">
                  <img class="offset-md-4  avatar" :src="infoModal.item.profile_image" style="width:90px;height:95px;" alt="...">
          </div>
          <div  class="col-md-6">
            <h5 style="color:black;">Name</h5>
          </div>
          <div class="col-md-6">
            <h5 style="color:black;">{{infoModal.item.name}}</h5>
          </div>
          <div  class="col-md-6">
            <h5 style="color:black;">Email</h5>
          </div>
          <div class="col-md-6">
            <h5 style="color:black;">{{infoModal.item.email}}</h5>
          </div>
          <div  class="col-md-6">
            <h5 style="color:black;">Occupation</h5>
          </div>
          <div class="col-md-6">
            <h5 style="color:black;">{{infoModal.item.job_occupation}}</h5>
          </div>
          <div  class="col-md-6">
            <h5 style="color:black;">Institute</h5>
          </div>
          <div class="col-md-6">
            <h5 style="color:black;">{{infoModal.item.institute}}</h5>
          </div>
          <div  class="col-md-6">
            <h5 style="color:black;">About</h5>
          </div>
          <div class="col-md-6">
            <h5 style="color:black;">{{infoModal.item.about}}</h5>
          </div>
          


      </div>
      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <b-button style="margin-left:5px; margin-bottom:0px !important" size="sm" variant="success" @click="ok()">
        Save
      </b-button>
      
      <!-- Button with custom close trigger value -->
      <!-- <b-button size="sm" variant="danger" @click="hide('forget')">
        Cancel
      </b-button>
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Create
      </b-button> -->
    </template>
        </b-modal>
        
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
        infoModal: {
          id: 'info-modal',
          title: '',
          content: '',
          item:{}
        },
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
      viewEvents() {
       for(var key in this.infoModal.item.events_hosted){
         console.log(this.infoModal.item.events_hosted[key])
         this.$store.dispatch("findEvent",{event_id:this.infoModal.item.events_hosted[key],type:'events_attended'})

       }
       for(var key in this.infoModal.item.events_attended){
         console.log(this.infoModal.item.events_attended[key])
         this.$store.dispatch("findEvent",{event_id:this.infoModal.item.events_attended[key],type:'events_hosted'})

       }
        this.$router.push({path:'events'})

      },
      info(item) {
        console.log(item)
        this.infoModal.title = item.name
        this.infoModal.item=item
        // this.$refs.profile_modal.show()
        // this.infoModal.content = JSON.stringify(item, null, 2)
        // this.$root.$emit('bv::show::modal')
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
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
<style scoped>

.col-md-6{
  margin-top:10px;
}
.modal-open {
  overflow-y:scroll!important;
  padding-right:0 !important;
  }
</style>
