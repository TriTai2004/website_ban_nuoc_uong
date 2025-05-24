<template>
    <div class="row bg-white py-3">
        <div class="col d-flex justify-content-end">
            <button @click="size.size = '', sizeId = ''" class="btn btn-sm btn-success border-0 rounded-pill me-2 bg-main"
                type="button" data-bs-toggle="modal" data-bs-target="#type">
                Thêm size
            </button>
        </div>
    </div>
    <div class="content bg-light rounded-2 p-3">
        <table class="table table-hover table-striped text-center align-middle">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Size</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listSize" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.size }}</td>
                    <td class="d-flex justify-content-end pe-5">
                        <div class="dropdown dropstart">
                            <a class="btn btn-light bg-transparent border-0" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button @click="sizeId = item.id, loadDataUpdate(item.id)"
                                        class="dropdown-item btn " type="button" data-bs-toggle="modal"
                                        data-bs-target="#type">Cập
                                        nhật</button></li>
                                <li><button @click="deleteSize(item.id)" class="dropdown-item" type="button">Xóa</button></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
        <div class="modal fade" id="type" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Size</h5>
                        <button type="button" id="close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="" @submit.prevent="addOrUpdate(sizeId)">
                            <div class="mb-3">
                                <label for="type" class="form-label">Tên size</label>
                                <input v-model="v$.size.$model" type="text" :class="{'border border-danger': v$.size.$error}" class="form-control" id="type" name="type"
                                    >
                                    <small v-if="v$.size.$error" class="text-danger">Vui lòng nhập size</small>
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
        <div class="row">
            <div class="col d-flex justify-content-end">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link text-main" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link text-main" href="#">1</a></li>
                        <li class="page-item"><a class="page-link text-main" href="#">2</a></li>
                        <li class="page-item"><a class="page-link text-main" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link text-main" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, numeric, helpers } from '@vuelidate/validators';

const listSize = ref([]);
const size = ref({ size: '' });
const sizeId = ref('');

const rules= {
    size: { required },
};
const v$ = useVuelidate(rules, size.value);

const loadData = async () => {
    try {
        const response = (await axios.get('http://localhost:3000/Sizes'));
        listSize.value = response.data;
    } catch (error) {
        console.log("load data type: " + error);
    }
}
const loadDataUpdate = async (id) => {
    try {
        const response = (await axios.get('http://localhost:3000/Sizes/' + id));
        size.value.size = response.data.size;
    } catch (error) {

    }
}
const addSize = async () => {
    try {
        await axios.post('http://localhost:3000/Sizes', size.value);
        alert('Thêm thành công!');
        size.value.size = '';
        loadData();
        closeModal();
        v$.value.$reset();
    } catch (error) {
        console.log('add type: ' + error);
    }
}

const updateSize = async (idSize) => {
    try {
        await axios.put('http://localhost:3000/Sizes/' + idSize, size.value);
        size.value.tenloai= '';
        loadData();
        closeModal();
        v$.value.$reset();
    } catch (error) {
        console.log('update type: ' + error);
    }
}

const deleteSize = async (idSize) => {
    try {
        if (confirm('Xác nhận xóa!')) {
            await axios.delete('http://localhost:3000/Sizes/' + idSize);
            loadData();
        }
    } catch (error) {
        console.log('update type: ' + error);
    }
}
const closeModal = () => {
    document.querySelector('#close').click();
}

const addOrUpdate = (id) => {
    v$.value.$touch();
    if (v$.value.$invalid){
        return; }
    if (id) {
        updateSize(sizeId.value);
    } else {
        addSize();
    }
}
onMounted(loadData);

</script>

<style lang="scss" scoped></style>