<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
             <div class="md-button-content ">
               <button  class="btn btn-info btn-sm pull-right" @click="createSupplier()">
                  <i class="md-icon md-icon-font md-theme-demo-light "> add</i>
                  Create Suppliers
                </button>
              <!-- <i data-v-393bd7a0=""  @click="createSupplier()" class="md-icon md-icon-font md-theme-demo-light pull-right"> add</i> -->
              </div> 
            <h4 class="title">Suppliers</h4>
            <p class="category">Manage your Business Suppliers</p>
          </md-card-header>
          <md-card-content>
            <data-table table-header-color="green" @item-event="showModal" title="Sparco Users" :fields="fields" :tableData="suppliers"></data-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <b-modal id="create-supplier-modal">
      <template slot="modal-header" slot-scope="{ close }">
        <h5><b><strong>Create Supplier</strong></b> </h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Full Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.full_name" placeholder="Alex Hesh"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Email</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.email" placeholder="someone@gmail.com"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Phone</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.phone_no" placeholder="+4456858586589"></b-form-input>
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
        <h5><b><strong>Modify Supplier</strong></b> </h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Full Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.full_name" placeholder="Alex Hesh"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Email</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.email" placeholder="someone@gmail.com"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Phone</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="supplier_obj.phone_no" placeholder="+4456858586589"></b-form-input>
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
    ...mapGetters(['suppliers'])
  },
  data() {
    return{
      supplier_obj:{
        full_name:null,
        credit:null,
        debit:null,
        location:null,
        balance:null,
        email:null,
        phone_no:null

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
        email:null,
        phone_no:null

      }

    },
    showModal(item){
      this.supplier_obj={
        full_name:item.full_name,
        credit:item.credit,
        debit:item.debit,
        location:item.location,
        balance:item.balance,
        email:item.email,
        phone_no:item.phone_no
      }
      this.$bvModal.show('update-supplier-modal')

    },
    createSupplier(){
      this.emptySupplierObj()
      this.$bvModal.show('create-supplier-modal')

    }

  
  }

};
</script>
