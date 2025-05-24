<template>
    <main>
        <div class="login position-relative d-flex justify-content-center align-items-center">
            <div class="form-login rounded-3 p-5 position-absolute">
                <router-link to="/" class="position-absolute top-0 start-0 px-3 pt-2">
                    <i class="bi bi-house text-white fs-3"></i>
                </router-link>
                <h1 class="text-center mb-5 text-uppercase text-white">Đăng ký</h1>
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="Email" class="form-label text-white">Email</label>
                        <input v-model="v$.email.$model" c type="text" class="form-control" id="Email"
                            placeholder="Nhập tên tài khoản">
                        <small v-if="v$.email.$error && v$.email.$dirty" class="text-danger">{{ v$.email.$errors[0].$message }}</small>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label text-white">Mật khẩu</label>
                        <input v-model="v$.password.$model" :class="{'border border-danger':v$.password.$error && v$.password.$dirty}" type="password" class="form-control" id="password"
                            placeholder="Nhập mật khẩu">
                            <small v-if="v$.password.$error && v$.password.$dirty" class="text-danger">{{ v$.password.$errors[0].$message }}</small>
                    </div>
                    <div class="mb-5">
                        <label for="password-old" class="form-label text-white">Nhập lại mật khẩu</label>
                        <input v-model="v$.passwordConfirm.$model" type="password" :class="{'border border-danger' : v$.passwordConfirm.$error && v$.password.$dirty}" class="form-control" id="password-old" placeholder="Nhập mật khẩu">
                        <small v-if="v$.passwordConfirm.$error && v$.password.$dirty" class="text-danger">{{ v$.passwordConfirm.$errors[0].$message }}</small>
                    </div>
                    <button type="submit" class="btn btn-success text-white w-100 mb-3">Đăng ký</button>
                    <div class="mt-3">
                        <div class="row">
                            <div class="col text-white">
                                Đã có tài khoản?
                            </div>
                            <div class="col text-end">
                                <router-link to="/login" href="./dangnhap.html"
                                    class="text-decoration-none text-white">Đăng nhập</router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </main>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { email, helpers, required  } from '@vuelidate/validators';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const accounts = ref([]);
const account = ref({
    id: undefined,
    email: '',
    password: '',
    passwordConfirm: '',
    role: false,
    cart: []
})

const loadData = async () =>{
        try {
            accounts.value = (await axios.get('http://localhost:3000/Accounts')).data;     
                 
        } catch (error) {
            console.log(error);
        }
    }
onMounted(loadData);
const checkEmail = (value) => {
    return !accounts.value.some(a => a.email === value);
};
const password = (value) => {
    return value === account.value.password;
};
const rules = {
    email: {   
        required: helpers.withMessage("Email không được để trống!", required),
        email: helpers.withMessage("Email không hợp lệ!", email),
        emailExists: helpers.withMessage("Email đã tồn tại!", checkEmail)
    },
    password: {
        required: helpers.withMessage("Vui lòng nhập mật khẩu!", required)
    },
    passwordConfirm: {
        required: helpers.withMessage("Vui lòng nhập lại mật khẩu!", required),
        sameAsPassword: helpers.withMessage("Mật khẩu nhập lại không khớp!", password)
    }
};

const v$ = useVuelidate(rules, account);
const register = async () =>{
    v$.value.$touch();
    const isValid = await v$.value.$validate();
    if (!isValid){
        return;
    } 
    try {
        const acc = account.value;
        delete acc.passwordConfirm;
        
        await axios.post('http://localhost:3000/Accounts',acc);
        router.push('/login');
    } catch (error) {
        console.error("Lỗi khi đăng ký:", error);
    }
}




</script>

<style scoped>

</style>