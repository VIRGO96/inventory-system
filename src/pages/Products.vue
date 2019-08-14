<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
             <div class="md-button-content ">
              <i data-v-393bd7a0=""  @click="createProduct()" class="md-icon md-icon-font md-theme-demo-light pull-right"> add</i>
              </div> 
            <h4 class="title">Products</h4>
            <p class="category">Manage your Business Products</p>
          </md-card-header>
          <md-card-content>
            <data-table table-header-color="green" @item-event="showModal" title="Sparco Users" :fields="fields" :tableData="products"></data-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <b-modal id="create-product-modal">
      <template slot="modal-header" slot-scope="{ close }">
        <h5>Create Supplier</h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Product Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.full_name" placeholder="Alex Hesh"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Date</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.location" placeholder="Saint Preux"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Quantity</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.debit"  placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Cost Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.credit" placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Selling Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.balance" placeholder="$300"></b-form-input>
                </div>
          </div>
      </template>

      <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
        <b-button style="margin-left:5px; margin-bottom:0px !important" size="sm" variant="success" @click="callFillProducts()">
          Save
        </b-button>
  
      </template>
    </b-modal>

    <b-modal id="update-product-modal">
      <template slot="modal-header" slot-scope="{ close }">
        <h5>Modify Product</h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Product Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.full_name" placeholder="Alex Hesh"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Date</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.location" placeholder="Saint Preux"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Quantity</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.debit"  placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Cos Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.credit" placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Selling Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.balance" placeholder="$300"></b-form-input>
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
    ...mapGetters(['products'])
  },
  data() {
    return{
      product_obj:{
        full_name:null,
        credit:null,
        debit:null,
        location:null,
        balance:null,

      },
      fields: [
          { key: 'product_code', label: 'Product Code' },
          { key: 'supplier_code', label: 'Supplier Code'},
          { key: 'product_name', label: 'Product Name' },
          { key: 'date', label: 'Date' },
          { key: 'actions', label: 'Action' }

        ]
    }
  },
  methods:{

    callFillProducts(){
      this.$bvModal.hide('create-product-modal')
      //api code here
      this.$store.commit("newSupplier",this.product_obj)
      this.emptySupplierObj()
      
    },
    emptySupplierObj(){
      this.product_obj={
        full_name:null,
        credit:null,
        debit:null,
        location:null,
        balance:null,

      }

    },
    showModal(item){
      this.product_obj={
        full_name:item.full_name,
        credit:item.credit,
        debit:item.debit,
        location:item.location,
        balance:item.balance,
      }
      this.$bvModal.show('update-product-modal')

    },
    createProduct(){
      this.emptySupplierObj()
      this.$bvModal.show('create-product-modal')

    }

  
  }

};
</script>
