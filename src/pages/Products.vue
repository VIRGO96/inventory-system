<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
             <div class="md-button-content ">
                <button  class="btn btn-info btn-sm pull-right" @click="createProduct()">
                  <i class="md-icon md-icon-font md-theme-demo-light "> add</i>
                  Create Products
                </button>
               <!-- <span class="pull-right">
                  <i   @click="createProduct()" class="md-icon md-icon-font md-theme-demo-light "> add</i>Create Product
               </span> -->
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
        <h5><b><strong>Create Product</strong></b> </h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Product Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.product_name" placeholder="Uranium Salt"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Date</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.date" type="date" placeholder="2018-10-10"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Quantity</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.quantity"  placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Cost Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.cost_price" placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Selling Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.selling_price" placeholder="$300"></b-form-input>
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
        <h5><b><strong>Modify Product</strong></b></h5>
      </template>

      <template slot="default" slot-scope="{ hide }">
        <div class="row">
                <div  class="col-md-6">
                  <h5 style="color:black;">Product Name</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.product_name" placeholder="Uranium Salt"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Date</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.date" type="date" placeholder="2018-10-10"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Quantity</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.quantity"  placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Cost Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.cost_price" placeholder="$300"></b-form-input>
                </div>
                <div  class="col-md-6">
                  <h5 style="color:black;">Selling Price</h5>
                </div>
                <div class="col-md-6">
                  <b-form-input v-model="product_obj.selling_price" placeholder="$300"></b-form-input>
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
        product_name:null,
        date:'2017-07-04',
        quantity:null,
        cost_price:null,
        selling_price:null,

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
      // this.$store.commit("newSupplier",this.product_obj)
      this.emptySupplierObj()
      
    },
    emptySupplierObj(){
      this.product_obj={
        product_name:null,
        date:null,
        quantity:null,
        cost_price:null,
        selling_price:null,

      }

    },
    showModal(item){
      this.product_obj={
        product_name:item.product_name,
        date:item.date,
        quantity:item.quantity,
        cost_price:item.cost_price,
        selling_price:item.selling_price,
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
