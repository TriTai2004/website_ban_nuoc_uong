<template>
    <div class="row bg-white py-3">
        <div class="col d-flex justify-content-end">
            <router-link to="/admin/product-edit" class="btn btn-sm btn-success border-0 rounded-pill me-2 bg-main"
                type="button">
                Thêm sản phẩm
            </router-link>
        </div>
    </div>
    <div class="content bg-light rounded-2 p-3">
        <VueGoodTable :columns="columns" :rows="flatProducts" :pagination-options="{ enabled: true, perPage: 5 }"
            :search-options="{ enabled: true }">
            <template #table-row="props">
                <!-- Hiển thị hình ảnh -->
                <span v-if="props.column.field === 'image'" class="text-center d-flex justify-content-between">
                    <img :src="props.row.image" alt="Hình ảnh sản phẩm" class="rounded mx-auto" style="width: 50px;">
                </span>
                <span v-else-if="props.column.field === 'actions'" class="d-flex justify-content-center">
                    <div class="dropdown dropstart">
                        <button class="btn btn-light bg-transparent border-0" type="button" data-bs-toggle="dropdown">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link :to="`/admin/product-edit/${props.row.id}/${props.row.nameProduct}`"
                                    class="dropdown-item">Cập nhật</router-link>
                            </li>
                            <li>
                                <button
                                    @click="nameProduct.idType = props.row.id; nameProduct.nameProduct = props.row.nameProduct"
                                    class="dropdown-item" type="button" data-bs-toggle="modal"
                                    data-bs-target="#deleteProduct">
                                    Xóa
                                </button>
                            </li>
                        </ul>
                    </div>
                </span>

            </template>
        </VueGoodTable>
        <!-- Modal delete-->
        <div class="modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Xóa sản phẩm</h5>
                        <button type="button" id="closeDelete" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6>Bạn có muốn xóa sản phẩm?</h6>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Quay lại</button>
                        <button @click="deleteProduct" type="button" class="btn btn-danger">Xóa</button>
                    </div>
                </div>
            </div>
        </div>


       
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import { VueGoodTable } from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";
import { useRouter } from "vue-router";
const router = useRouter();
const types = ref([
    {
        id: undefined,
        name: "",
        products: [],
    },
]);
const nameProduct = ref({
    idType: '',
    nameProduct: ''
});
const loadData = async () => {
    try {
        const listType = await axios.get("http://localhost:3000/Types");
        types.value = listType.data;
        console.log(flatProducts.value);
    } catch (error) {
        console.log(error);
    }
};
onMounted(loadData);

const columns = ref([
    { label: "Tên", field: "nameProduct", sortable: true },
    { label: "Loại", field: "name", sortable: true },
    {
        label: "Giá",
        field: "price",
        type: "number",
        sortable: true,
        formatFn: (value) => formatCurrency(value)
    },
    { label: "Hình ảnh", field: "image", sortable: false },
    { label: "Hành động", field: "actions", sortable: false }
]);


const flatProducts = computed(() =>
    types.value.flatMap(type =>
        type.products.reverse().map(product => ({
            id: type.id,
            name: type.name,
            nameProduct: product.name,
            price: product.price,
            description: product.description,
            image: product.image
        }))
    )
);



const deleteProduct = async () => {
    let list = (await axios.get('http://localhost:3000/Types/' + nameProduct.value.idType)).data;
    list.products = list.products.filter(p => p.name != nameProduct.value.nameProduct)

    await axios.put('http://localhost:3000/Types/' + nameProduct.value.idType, list);
    loadData();
    closeModal();
}

const closeModal = () => {
    document.querySelector('#closeDelete').click();
}
const formatCurrency = (number) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(number);
};
</script>

<style scoped>
::v-deep(.vgt-table th:nth-child(5)),
::v-deep(.vgt-table td:nth-child(5)) {
    width: 130px !important;
    min-width: 80px !important;
    max-width: 130px !important;
    text-align: center;
}
</style>
