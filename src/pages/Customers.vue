<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
             <div class="md-button-content ">
               <button  class="btn btn-info btn-sm pull-right" @click="createCustomer()">
                  <i class="md-icon md-icon-font md-theme-demo-light "> add</i>
                  Create Customers
                </button>
              <!-- <i data-v-393bd7a0=""  @click="createCustomer()" class="md-icon md-icon-font md-theme-demo-light pull-right"> add</i> -->
              </div> 
            <h4 class="title">Customers</h4>
            <p class="category">Manage your Business Customers</p>
          </md-card-header>
          <md-card-content>
            <data-table table-header-color="green" @item-event="showModal" title="Sparco Users" :fields="fields" :tableData="customers"></data-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <b-modal id="create-supplier-modal">
      <template slot="modal-header" slot-scope="{ close }">
        <h5><b><strong>Create Customers</strong></b></h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Customer Image</h5>
                </div>
                <div class="col-md-6">
                  <b-form-file ></b-form-file>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Customer Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.full_name" placeholder="Alex Hesh"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Username</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.username" placeholder="demouser"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Password</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input type="password" v-model="supplier_obj.password" placeholder="******"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Postition</h5>
                </div>
                <div class="col-md-6">
                  <b-form-select v-model="supplier_obj.position" :options="position_options"></b-form-select>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Location</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.location" placeholder="Saint Preux"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Debit</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.debit"  placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Credit</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.credit" placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Balance</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.balance" placeholder="$300"></b-form-input>
                </div>
                
          </div>
      </template>

      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
        <b-button style="margin-left:5px; margin-bottom:0px !important" size="sm" variant="success" @click="callFillSuppliers()">
          Save
        </b-button>
  
      </template>
    </b-modal>

    <b-modal id="update-supplier-modal">
      <template slot="modal-header" slot-scope="{ close }">
        <h5><b><strong>Modify Customer</strong></b></h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Customer Image</h5>
                </div>
                <div  class="col-md-6">
                  <button  class="btn btn-success btn-sm" @click="previewfile" >View Image</button>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Full Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.full_name" placeholder="Alex Hesh"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Username</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.username" placeholder="demouser"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Password</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input type="password" v-model="supplier_obj.password" placeholder="******"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Postition</h5>
                </div>
                <div class="col-md-6">
                  <b-form-select v-model="supplier_obj.position" :options="position_options"></b-form-select>
                </div>
                
                <div  class="col-md-6">
                  <h5 style="color:black;">Location</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.location" placeholder="Saint Preux"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Debit</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.debit"  placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Credit</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.credit" placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Balance</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.balance" placeholder="$300"></b-form-input>
                </div>
                
          </div>
      </template>

      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
        <b-button size="sm" variant="danger" @click="cancel()">
          Delete
        </b-button>
        <b-button style="margin-left:5px; margin-bottom:0px !important" size="sm" variant="success" >
          Update
        </b-button>
  
      </template>
    </b-modal>

          
  </div>

  
</template>

<script>
import { DataTable } from "@/components";
import {mapGetters} from 'vuex'
export default {
  components: {
    DataTable
  },
  computed:{
    ...mapGetters(['customers'])
  },
  data() {
    return{
      position_options:[
        {value:'purchasing',text:'Purchasing'},
        {value:'inbounder',text:'Inbounder'},
        {value:'receiver',text:'Receiver'},
        {value:'quality_checker',text:'Quality Checker'},
        {value:'picker',text:'Picker'},
        {value:'keeper',text:'Keeper'},
        {value:'admin',text:'Admin'}


      ],
      supplier_obj:{
        full_name:null,
        credit:null,
        debit:null,
        location:null,
        balance:null,
        username:null,
        password:null,
        position:null,
        customer_image:'https://picsum.photos/id/20/1024/480'
      },
      fields: [
          { key: 'full_name', label: 'Full Name' },
          { key: 'location', label: 'Location'},
          { key: 'debit', label: 'Credit' },
          { key: 'credit', label: 'Debit' },
          { key: 'actions', label: 'Action' }

        ]
    }
  },
  methods:{

    callFillSuppliers(){
      this.$bvModal.hide('create-supplier-modal')
      //api code here
      this.$store.commit("newSupplier",this.supplier_obj)
      this.emptySupplierObj()
      
    },
    emptySupplierObj(){
      this.supplier_obj={
        full_name:null,
        credit:null,
        debit:null,
        location:null,
        balance:null,
        username:null,
        password:null,
        position:null

      }

    },
    showModal(item){
      this.supplier_obj={
        full_name:item.full_name,
        credit:item.credit,
        debit:item.debit,
        location:item.location,
        balance:item.balance,
        username:item.username,
        password:item.password,
        position:item.position
      }
      this.$bvModal.show('update-supplier-modal')

    },
    previewfile()
    {
      var params = "menubar=no,titlebar=no,status=no,toolbar=no,location=no,resizable=no,scrollbars=no,height=300,width=600,left=600,top=300"
      var newwindow = window.open("https://firebasestorage.googleapis.com/v0/b/sparc-bd7b1.appspot.com/o/profile_images%2Fimage.jpg?alt=media&token=e610a4b9-c2a7-4732-84ec-fd1677a8b333", 'image', params);

    },
    createCustomer(){
      this.emptySupplierObj()
      this.$bvModal.show('create-supplier-modal')

    }

  
  }

};
</script>
