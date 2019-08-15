<template>
  <router-view></router-view>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:{...mapActions(['fillSuppliers','fillProducts','fillCustomers'])},
  created() {
    this.fillSuppliers() 
    this.fillProducts() 
    this.fillCustomers() 

  }
};
</script>
