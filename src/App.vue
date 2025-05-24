<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useRoute } from 'vue-router';
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

const route = useRoute();
</script>
<template>
  <!-- <HeaderView/> -->
  <RouterView />
  <!-- <FooterView/> -->
</template>
<style scoped>

</style>
