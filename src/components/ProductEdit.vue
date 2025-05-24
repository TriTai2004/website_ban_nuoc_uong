<template>
    <div>
        <div class="row bg-white py-2">
            <div class="col d-flex justify-content-end">
                <p class="border-0 rounded-pill me-2 bg-main opacity-0 overflow-hidden" type="button">
                    T
                </p>
            </div>
        </div>
        <div class="bg-light rounded-2 p-3">
            <div class="container bg-white p-3">
                <form @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label">Tên</label>
                                <input v-model="v$.name.$model" type="text" class="form-control"
                                    :class="{ 'border border-danger': v$.name.$error }" />
                                <small v-if="v$.name.$error && v$.name.$dirty" class="text-danger">{{
                                    v$.name.$errors[0]?.$message }}</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="col">
                                <label class="form-label">Loại</label>
                                <select class="form-select" v-model="type.id">
                                    <option v-for="(t, index) in types" :key="t.id" :value="t.id">
                                        {{ t.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label class="form-label">Giá (VNĐ)</label>
                            <input v-model="v$.price.$model" type="text" class="form-control"
                                :class="{ 'border border-danger': v$.price.$error }" />
                            <small v-if="v$.price.$error && v$.price.$dirty" class="text-danger">{{
                                v$.price.$errors[0]?.$message }}</small>
                        </div>
                        <div class="col">
                            <label class="form-label d-block">Chọn Hình Ảnh</label>
                        <input @input="uploadImage" type="file" class="form-control" :class="{
                            'border border-danger': v$.image.$error && v$.image.$dirty,
                        }" />
                        <small v-if="v$.image.$error" class="text-danger">{{
                            v$.image.$errors[0].$message
                            }}</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Mô Tả</label>
                        <textarea v-model="v$.description.$model" class="form-control" rows="8"
                            :class="{ 'border border-danger': v$.description.$error }"></textarea>
                        <small v-if="v$.description.$error" class="text-danger">{{
                            v$.description.$errors[0]?.$message
                            }}</small>
                        </div>
                        <div class="col-3">
                            <label for="" class="form-label text-white">d</label>
                            <div class="card">
                                <div class="card-img text-center">
                                     <img v-if="product.image" style="height:200px" :src="product.image" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="d-flex justify-content-end">
                        <router-link to="/admin/product" class="btn btn-secondary me-2">Quay lại</router-link>
                        <button type="submit" class="btn btn-success" >Lưu</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- <button data-bs-toggle="modal" data-bs-target="#myModal" id="message"></button> -->
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Cập nhật sản phẩm</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        Cập nhật thành công
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, minLength, numeric, helpers } from "@vuelidate/validators";

const router = useRouter();
const route = useRoute();
const types = ref([]);
const type = ref({
    id: undefined,
    name: "",
    products: [],
});

type.value.id = route.params.idType;

const product = ref({
    name: "",
    price: "",
    description: "",
    image: "",
});

const rules = {
    name: {
        required: helpers.withMessage("Tên không được bỏ trống!", required),
        minLength: helpers.withMessage("Tên ít nhất 5 ký tự!", minLength(5)),
    },
    price: {
        required: helpers.withMessage("Giá không được bỏ trống!", required),
        numeric: helpers.withMessage("Giá phải là số!", numeric),
    },
    description: {
        required: helpers.withMessage("Mô tả không được bỏ trống!", required),
    },
    image: {
        required: helpers.withMessage("Chưa chọn hình ảnh!", required),
    },
};

const v$ = useVuelidate(rules, product);

// Hàm upload ảnh lên Cloudinary
const uploadImage = async (event) => {
    const file = event.target.files[0]; // Lấy file ảnh
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "backend");
    try {
        // Gửi request POST lên Cloudinary
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dllgye47n/image/upload",
            formData
        );
        product.value.image = response.data.secure_url; // Lưu URL ảnh
    } catch (error) {
        console.error("Lỗi khi upload:", error);
    }
};

const addProduct = async () => {
    try {
        type.value = (
            await axios.get("http://localhost:3000/Types/" + type.value.id)
        ).data;
        type.value.products.push(product.value);
        console.log(product.value.id);

        await axios.put("http://localhost:3000/Types/" + type.value.id, type.value);
        router.push("/admin/product");
    } catch (error) {
        console.log(error);
    }
};

const updateProduct = async () => {
    try {
        type.value = (
            await axios.get("http://localhost:3000/Types/" + type.value.id)
        ).data;
        if (type.value.products.length > 0) {
            type.value.products = type.value.products.map((p) =>
                p.name.trim() === route.params.nameProduct ? product.value : p
            );
        }
        if (type.value.id != route.params.idType) {
            let list = (
                await axios.get("http://localhost:3000/Types/" + route.params.idType)
            ).data;
            list.products = list.products.filter(
                (p) => p.name !== route.params.nameProduct
            );
            await axios.put(
                "http://localhost:3000/Types/" + route.params.idType,
                list
            );
            type.value.products.push(product.value);
        }
        await axios.put("http://localhost:3000/Types/" + type.value.id, type.value);
        router.push("/admin/product");
    } catch (error) {
        console.log(error);
    }
};
const handleSubmit = async () => {
    v$.value.$touch();

    if (v$.value.$invalid) {
        return;
    }
    if (route.params.idType) {
        updateProduct();
    } else {
        addProduct();
    }
    v$.value.$reset();
};

const loadData = async () => {
    try {
        if (route.params.idType) {
            const response = await axios.get(
                "http://localhost:3000/Types/" + route.params.idType
            );
            types.value = response.data;
            product.value = types.value.products.find(
                (p) => p.name === route.params.nameProduct
            );
        }
        const response = await axios.get("http://localhost:3000/Types");

        types.value = response.data;
        if (!route.params.idType) {
            type.value.id = types.value[0].id;
        }
        console.log(types.value[0]);

    } catch (error) {
        console.log(error);
    }
};
onMounted(loadData);
</script>

<style lang="scss" scoped></style>
