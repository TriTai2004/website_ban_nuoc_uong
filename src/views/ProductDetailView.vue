<template>
    <HeaderView />
    <main>
        <div class="position-relative overflow-hidden">
            <img src="https://gongcha.com.vn/wp-content/uploads/2018/03/banner-tintuc-uudai.png" alt="">
            <h1 class="position-absolute top-50 ms-5 text-white translate-middle-y">Chi tiết</h1>
        </div>
        <div class="container mt-4">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/" class="text-main text-decoration-none"
                            href="./index.html">Trang chủ</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="`/product/${route.params.idType}`"
                            class="text-main text-decoration-none" href="./product.html">Sản phẩm</router-link></li>
                    <li class="breadcrumb-item icon-main" aria-current="page">Chi tiết</li>
                </ol>
            </nav>
        </div>
        <div class="container-fluid mb-3">
            <div class="row mb-3">
                <div class="col">
                    <div class="card w-75 mx-auto">
                        <img :src="product.image" alt="" class="w-75 mx-auto">
                    </div>
                </div>
                <div class="col">
                    <h1 class="mb-5">{{ product.name }}</h1>
                    <h5 class="mb-4">Thông tin</h5>
                    <h6 class="mb-3">Tên: {{ product.name }}</h6>
                    <h6 class="mb-3">Loại: {{ type.name }}</h6>
                    <div class="price mb-3">
                        <h6>Giá: {{ formatCurrency(product.price) }}</h6>
                    </div>
                    <div class="quantity mb-4">
                        <label for="quantity" class="me-3 h6">Số lượng</label>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-danger btn-sm"
                                @click="quantity.quantity == 1 ? quantity.quantity : quantity.quantity = quantity.quantity - 1"><i
                                    class="bi bi-dash"></i>
                            </button>
                            <input type="text" v-model="v$.quantity.$model"
                                :class="{ 'border border-danger': v$.quantity.$error && v$.quantity.$dirty }"
                                id="quantity" style="width: 60px;" class="form-control text-center mx-2 " readonly>
                            <button class="btn btn-success btn-sm" @click="quantity.quantity = quantity.quantity + 1"><i
                                    class="bi bi-plus"></i></button>
                        </div>
                        <small v-if="v$.quantity.$error && v$.quantity.$dirty" class="text-danger ms-5 ps-5 d-block">{{
                            v$.quantity.$errors[0].$message }}</small>
                    </div>
                    <a class="btn btn-success align-self-baseline " @click="addCart">Thêm vào giỏ hàng</a>
                </div>
            </div>
            <div class="container">
                <div class="row p-2 bg-light rounded-2">
                    <h3>Mô tả</h3>
                    <p>{{ product.description }}</p>
                </div>
            </div>

            <div class="container bg-light mt-3 rounded-2 mb-5 pb-2">
                <div class="row">
                    <div class="col">
                        <h4 class="p-2">Sản phẩm khác</h4>
                    </div>
                </div>
                <div class="row">
                    <div v-for="product in displayedProducts" :item="product.id" class="col-2 mb-3">
                        <router-link :to="`/product-detail/${product.id}/${product.nameProduct}`"
                            class="card text-decoration-none text-main box-product">
                            <img :src="product.image" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title text-truncate">{{ product.name }}</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="mt-3 text-center">
                    <button v-if="displayedProducts.length >= itemsPerPage" @click="loadMore" class="h6 border-0 bg-transparent">Xem thêm</button>
                </div>
            </div>
        </div>
    </main>
    <FooterView />
</template>

<script setup>
import FooterView from '@/components/FooterView.vue';
import HeaderView from '@/components/HeaderView.vue';
import axios from 'axios';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import useVuelidate from "@vuelidate/core";
import { required, numeric, minValue, helpers } from "@vuelidate/validators";


const types = ref([]);
const route = useRoute();
const type = ref({});
const quantity = ref({
    quantity: 1
});
const product = ref({
    name: '',
    price: '',
    description: '',
    image: ''
})



const rules = {
    quantity: {
        required: helpers.withMessage("Chưa nhập số lượng", required),
        numeric: helpers.withMessage("Chỉ được nhập số", numeric),
        minValue: helpers.withMessage("Số lượng phải lớn hơn 0", minValue(1))
    }
};

const loadData = async () => {
    try {
        types.value = await (await axios.get('http://localhost:3000/Types')).data;
        type.value = (await axios.get(`http://localhost:3000/Types/${route.params.idType}`)).data;
        product.value = type.value.products.find(p => p.name == route.params.nameProduct);
    } catch (error) {
        console.log(error);
    }
}
onMounted(loadData);
watch(() => route.params, loadData);


const flatProducts = computed(() =>
    types.value.flatMap(type =>
        type.products.map(product => ({
            id: type.id,
            name: type.name,
            nameProduct: product.name,
            price: product.price,
            description: product.description,
            image: product.image
        }))
    )
);

const itemsPerPage = ref(6);
const displayedProducts = computed(() => flatProducts.value.slice(0, itemsPerPage.value));
const loadMore = () => {
    itemsPerPage.value += 6
};


const v$ = useVuelidate(rules, quantity);

const formatCurrency = (number) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(number);
};




</script>

<style scoped>
  .box-product:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    transition: all 0.3s ease-in-out; 
}

</style>