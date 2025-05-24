<template>
  <div class="row py-2">
    <div class="col-7">
      <p class="m-0 text-end">
        {{ getCurrentDate() }}
      </p>
      
    </div>
    <div class="col-5 d-flex justify-content-end pe-5">
    </div>
  </div>
  <div class="content bg-light rounded-2 p-3">
    <div class="container bg-white p-4 rounded-2 px-4 mb-3">
      <div class="row">
        <h5 class="mb-3">Tổng loại</h5>
        <div  v-for="item in products" :key="item.name" class="col text-center d-flex justify-content-center">
          <div class="sum d-flex flex-column justify-content-between">
            <h6>{{ item.nameType }}</h6>
            <img class="img-fluid" :src="item.image" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container bg-white p-4 rounded-2">
      <div class="row">
        <h5>Sản phẩm bán chạy</h5>
        <div class="col">
          <div class="card rounded-pill">
            <img src="./images/Trà-sữa-Pudding-đậu-đỏ-2.png" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text text-center">
                Đã bán
                <strong class="icon-main h5">54</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-pill">
            <img src="./images/Strawberry-Oreo-Smoothie.png" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text text-center">
                Đã bán
                <strong class="icon-main h5">54</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-pill">
            <img src="./images/Oolong-vải-2.png" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text text-center">
                Đã bán
                <strong class="icon-main h5">54</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-pill">
            <img src="./images/Chanh-Aiyu-trân-châu-trắng-2.png" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text text-center">
                Đã bán
                <strong class="icon-main h5">54</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

const types = ref([]);
const products = ref([]);

const loadData = async () => {
  try {
    types.value = (await axios.get('http://localhost:3000/Types')).data;
    products.value = flatProducts.value.filter((product, index, array) =>
        array.findIndex(p => p.idType === product.idType) === index
    )
  } catch (error) {
    console.log(error);
    
  }
};
onMounted(loadData);

const flatProducts = computed(() =>
    types.value.flatMap(type =>
        type.products.reverse().map(product => ({
            idType: type.id,
            nameType: type.name,
            name: product.name,
            price: product.price,
            description: product.description,
            image: product.image
        }))
    )
);


const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    return `Ngày ${day} Tháng ${month} Năm ${year}`;
}


</script>

<style scoped></style>