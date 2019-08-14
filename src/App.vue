<template>
  <router-view></router-view>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:{...mapActions(['fillSuppliers'])},
  created() {
    this.fillSuppliers() 
  }
};
</script>
