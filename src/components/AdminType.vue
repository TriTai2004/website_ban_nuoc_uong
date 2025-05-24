<template>
    <div class="row bg-white py-3">
        <div class="col d-flex justify-content-end">
            <button @click="clearForm()" class="btn btn-sm btn-success border-0 rounded-pill me-2 bg-main" type="button"
                data-bs-toggle="modal" data-bs-target="#type">
                Thêm loại
            </button>
        </div>
    </div>
    <div class="content bg-light rounded-2 p-3">
        <!-- <table class="table table-hover table-striped text-center align-middle">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tên loại</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paginatedTypes" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td class="d-flex justify-content-end pe-5">
                        <div class="dropdown dropstart">
                            <a class="btn btn-light bg-transparent border-0" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button @click="type.id = item.id, getType()" class="dropdown-item btn "
                                        type="button" data-bs-toggle="modal" data-bs-target="#type">Cập
                                        nhật</button></li>
                                <li><button @click="type.id = item.id" class="dropdown-item" data-bs-toggle="modal"
                                        data-bs-target="#deleteType" type="button">Xóa</button></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> -->

        <VueGoodTable :columns="columns" :rows="types" :pagination-options="{ enabled: true, perPage: 5 }"
            :search-options="{ enabled: true }">
            <template #table-row="props">
                <span v-if="props.column.field === 'actions'" class="d-flex justify-content-center">
                    <div class="dropdown dropstart">
                            <a class="btn btn-light bg-transparent border-0" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button @click="type.id = props.row.id, getType()" class="dropdown-item btn "
                                        type="button" data-bs-toggle="modal" data-bs-target="#type">Cập
                                        nhật</button></li>
                                <li><button @click="type.id = props.row.id" class="dropdown-item" data-bs-toggle="modal"
                                        data-bs-target="#deleteType" type="button">Xóa</button></li>
                            </ul>
                        </div>
                </span>
           
            </template>
        </VueGoodTable>

        <!-- Modal  add-->
        <div class="modal fade" id="type" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Loại</h5>
                        <button type="button" id="close" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="save">
                            <div class="mb-3">
                                <label for="type" class="form-label">Tên loại</label>
                                <input v-model="v$.name.$model"
                                    :class="{ 'border border-danger': v$.name.$error && v$.name.$dirty }" type="text"
                                    class="form-control" id="type" name="type">
                                <small v-if="v$.name.$error && v$.name.$dirty" class="text-danger">Vui lòng nhập tên
                                    loại</small>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                <button type="submit" class="btn btn-success">Lưu</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal delete-->
        <div class="modal fade" id="deleteType" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Xóa loại</h5>
                        <button type="button" id="closeDelete" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6>Bạn có muốn xóa loại?</h6>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Quay lại</button>
                        <button @click="deleteType" type="button" class="btn btn-danger">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, numeric, helpers } from '@vuelidate/validators';
import { VueGoodTable } from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";

const types = ref([]);
const type = ref({
    id: undefined,
    name: '',
    products: []
})

const loadData = async () => {
    try {
        const response = (await axios.get('http://localhost:3000/Types'));
        types.value = response.data;
        types.value = types.value.reverse();
    } catch (error) {
        console.log("load data type: " + error);
    }
}
onMounted(loadData);


const columns = ref([
    { label: "Id", field: "id", sortable: true },
    { label: "Tên loại", field: "name", sortable: true },
    { label: "Hành động", field: "actions", sortable: false},
]);


const rules = {
    name: { required },
};
const v$ = useVuelidate(rules, type);




const clearForm = async () => {
    type.value = {
        id: undefined,
        name: '',
        products: []
    };
    v$.value.$reset();
}




const getType = async () => {
    try {
        const response = await axios.get('http://localhost:3000/Types/' + type.value.id);
        type.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

const addType = async () => {
    try {
        await axios.post('http://localhost:3000/Types', type.value);
        await loadData();
        clearForm();
        closeModal();
    } catch (error) {
        console.log(error);
    }
}

const updateType = async () => {
    try {
        await axios.put('http://localhost:3000/Types/' + type.value.id, type.value);
        await loadData();
        clearForm();
        closeModal();
    } catch (error) {
        console.log(error);
    }
}

const save = async () => {
    const error = await v$.value.$validate();
    if (!error) {
        return;
    }
    if (type.value.id) {
        await updateType();
    } else {
        await addType();
    }
}

const deleteType = async () => {
    try {
        await axios.delete('http://localhost:3000/Types/' + type.value.id);
        await loadData();
        closeModal();
        clearForm();
    } catch (error) {
        console.log(error);
    }
}


const closeModal = () => {
    document.querySelector('#close').click();
    document.querySelector('#closeDelete').click();

}

</script>

<style  scoped>
::v-deep(.vgt-table th:nth-child(3)),
::v-deep(.vgt-table td:nth-child(3)) {
    width: 130px !important;
    min-width: 80px !important;
    max-width: 130px !important;
    text-align: center;
}
</style>