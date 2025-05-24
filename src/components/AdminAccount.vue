<template>
    <div class="row bg-white py-2  overflow-hidden opacity-0">
        <p class="">a</p>
    </div>
    <div class="content bg-light rounded-2 p-3">

        <!-- <table class="table table-hover table-striped text-center align-middle">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Quyền</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listAccount" :key="item">
                    <td>{{ item.id }}</td>
                    <td>{{ item.email }}</td>
                    <td>*******</td>
                    <td>{{ item.role ? 'Admin' : 'user' }}</td>
                    <td class="d-flex justify-content-end">
                        <div class="dropdown dropstart">
                            <a class="btn btn-light bg-transparent border-0" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button @click="account.id = item.id; loadDataUpdate()" class="dropdown-item"
                                        type="button" data-bs-toggle="modal" data-bs-target="#account">Cập nhật</button>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> -->
        <VueGoodTable :columns="columns" :rows="listAccount" :pagination-options="{ enabled: true, perPage: 5 }"
            :search-options="{ enabled: true }">
            <template #table-row="props">
                <span v-if="props.column.field === 'actions'" class="d-flex justify-content-center">
                    <div class="dropdown dropstart">
                            <a class="btn btn-light bg-transparent border-0" type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button @click="account.id = props.row.id; loadDataUpdate()" class="dropdown-item"
                                        type="button" data-bs-toggle="modal" data-bs-target="#account">Cập nhật</button>
                                </li>
                            </ul>
                        </div>
                </span>

            </template>
        </VueGoodTable>
        <!-- Modal add-->
        <div class="modal fade" id="account" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tài khoản</h5>
                        <button type="button" id="close" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="" @submit.prevent="updateAccount">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="v$.email.$model " type="text" :class="{'border border-danger':v$.email.$error && isSubmit}" class="form-control" id="email" name="email"
                                    >
                                <small v-if="v$.email.$error && isSubmit" class="text-danger">{{ v$.email.$errors[0].$message }}</small>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Quyền</label>
                                <div class="d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" v-model="account.role"
                                            :value="true" id="admin">
                                        <label class="me-5" for="admin">Admin</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" v-model="account.role"
                                            :value="false" id="user">
                                        <label for="user">User</label>
                                    </div>
                                </div>
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
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from '@vuelidate/validators';
import { VueGoodTable } from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";


const listAccount = ref([]);
const account = ref({
    id: undefined,
    email: '',
    password: '',
    role: false,
    cart: []
})
const loadData = async () => {
    try {
        listAccount.value = (await axios.get('http://localhost:3000/Accounts')).data;
    } catch (error) {
        console.log('loaddata account: ' + error);
    }
}
onMounted(loadData);



const columns = ref([
    { label: "Id", field: "id", sortable: true },
    { label: "Email", field: "email", sortable: true },
    { label: "Quyền", field: (row) =>  row.role ? "Admin" : "User", sortable: false },
    { label: "Hành động", field: "actions", sortable: false },
]);


const checkEmail = (value) => {
    return !listAccount.value.some(a => a.email === value && a.id != account.value.id);
};
const rules = {
    email: {
        required: helpers.withMessage("Email không được bỏ trống!", required),
        email: helpers.withMessage("Trường này là email!", email),
        emailExit: helpers.withMessage("Email đã tồn tại!", checkEmail)
    }
};
const v$ = useVuelidate(rules, account);

const isSubmit = ref(false);
const updateAccount = async () => {
    isSubmit.value = true
    const error = await v$.value.$validate();
    if(!error){
        return;
    }
    try {
        let acc = listAccount.value.find(c => c.id === account.value.id);
        acc.email = account.value.email;
        acc.role = account.value.role;
        await axios.put('http://localhost:3000/Accounts/' + account.value.id, acc);
        loadData();
        account.value = {};
        v$.value.$reset();
        close();
    } catch (error) {
        console.log('update account: ' + error);
    }
}
const loadDataUpdate = async () => {
    try {
        account.value = (await axios.get('http://localhost:3000/Accounts/' + account.value.id)).data;
        isSubmit.value = false
    } catch (error) {
        console.log(error);

    }
}

const close = () => {
    document.querySelector('#close').click();
}

</script>

<style scoped>
    ::v-deep(.vgt-table th:nth-child(4)),
::v-deep(.vgt-table td:nth-child(4)) {
    width: 130px !important;
    min-width: 80px !important;
    max-width: 130px !important;
    text-align: center;
}
</style>