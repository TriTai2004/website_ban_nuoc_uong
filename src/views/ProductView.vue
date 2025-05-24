<template>
  <HeaderView />
  <main>
    <div class="banner position-relative mb-4">
      <img class="w-100" src="../assets/images/banner-menu-1900-x-335.jpg" alt="" />
      <h2 class="text-uppercase position-absolute top-50 ms-5 ps-5 d-none d-lg-block">
        menu hiện tại
      </h2>
    </div>
    <section class="mb-4">
      <div class="title text-center">
        <i class="bi bi-cup-hot fs-3 icon-main"></i>
        <h3 class="text-main">Menu</h3>
      </div>
      <ul class="nav nav-pills d-flex justify-content-center border mb-3">
        <li v-for="type in types" :key="type.id" class="nav-item">
          <router-link @click="getProduct" :to="`/product/${type.id}`" :class="{ click: type.id == route.params.id }"
            class="nav-link rounded-0 text-main">{{ type.name }}</router-link>
        </li>
      </ul>

      <div class="tab-pane container active" id="home">
        <div class="container">
          <div class="row mb-2">
              <div v-for="product in products.products" :key="product.name" class="col-lg-3 col-6 mb-2 box-product">
                <router-link :to="`/product-detail/${products.id}/${product.name}`"
                  class="card text-decoration-none text-main">
                  <img :src="product.image" class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h5 class="card-title text-truncate">{{ product.name }}</h5>
                    <p class="icon-main">{{ formatCurrency(product.price) }}</p>
                  </div>
                </router-link>
              </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <FooterView />
</template>

<script setup>
import FooterView from "@/components/FooterView.vue";
import HeaderView from "@/components/HeaderView.vue";

import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { onMounted, ref, watch } from "vue";
const route = useRoute();
const types = ref([]);
const products = ref({});

const loadData = async () => {
  try {
    types.value = (await axios.get("http://localhost:3000/Types")).data;
    getProduct();
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async () =>{
    products.value = (await axios.get(`http://localhost:3000/Types/${route.params.id}`)).data
    products.value.products.reverse();
}
watch(() => route.params.id, (newId) => {
  if (newId) {
    getProduct();
  }
});
onMounted(loadData);

const formatCurrency = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
};
</script>

<style scoped>
.box-product img {
  transition: transform 0.3s ease-in-out;
}


.box-product:hover img {
  transform: scale(1.1);
}
.click {
  border-bottom: 3px solid #419838 !important;
}
</style>
