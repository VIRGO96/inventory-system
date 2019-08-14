<template>
  <router-view></router-view>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:{...mapActions(['fillSuppliers','fillProducts'])},
  created() {
    this.fillSuppliers() 
    this.fillProducts() 

  }
};
</script>
