<template>
    <main>
        <div class="login position-relative d-flex justify-content-center align-items-center">

            <div class="form-login rounded-3 p-5 position-absolute">
                <router-link to="/" class="position-absolute top-0 start-0 px-3 pt-2">
                    <i class="bi bi-house text-white fs-3"></i>
                </router-link>
                <h1 class="text-center mb-5 text-uppercase text-white">Đăng nhập</h1>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="form-label text-white">Email</label>
                        <input @input="loginError = ''" v-model="v$.email.$model" type="text" :class="{'border border-danger': v$.email.$error && v$.email.$dirty}" class="form-control" id="email" placeholder="Nhập email">
                        <small v-if="v$.email.$error && v$.email.$dirty" class="text-danger">{{ v$.email.$errors[0].$message }}</small>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label text-white">Mật khẩu</label>
                        <input @input="loginError = ''" v-model="v$.password.$model" :class="{'border border-danger':v$.password.$error && v$.password.$dirty}" type="password" class="form-control" id="password" placeholder="Nhập mật khẩu">
                        <small v-if="v$.password.$error && v$.password.$dirty" class="text-danger">{{ v$.password.$errors[0].$message }}</small>
                    </div>
                    <div class="mb-3 text-end">
                        <p v-if="loginError" class="text-danger text-center">{{ loginError }}</p>
                    </div>
                    <button type="submit" class="btn btn-success w-100 mt-4">Đăng Nhập</button>
                    <div class=" mt-3">
                        <div class="row">
                            <div class="col text-white">
                                Chưa có tài khoản?
                            </div>
                            <div class="col text-end">
                                <router-link to="/register" class="text-decoration-none text-white">Đăng ký</router-link>
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
import { email, helpers, required } from '@vuelidate/validators';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

    const router = useRouter()
    const accounts = ref([]);
    const account = ref({
        id: undefined,
        email: '',
        password: '',
        role: true,
        cart: []
    })

    const loginError = ref("");
    const rules = {
    email: {
        required: helpers.withMessage("Email không được bỏ trống!", required),
        email: helpers.withMessage("Trường này là email!", email),
    },
    password: {
        required: helpers.withMessage("Vui lòng nhập mật khẩu!", required),
    }
};

const v$ = useVuelidate(rules, account);

    const loadData = async () =>{
        try {
            accounts.value = (await axios.get('http://localhost:3000/Accounts')).data;          
        } catch (error) {
            console.log(error);
        }
    }
    const login = async () =>{

        loginError.value = ""; 

    const isValid = await v$.value.$validate(); 

    if (!isValid) return;
        loadData();
        if(checkLogin()) {
            router.push('/');
            sessionStorage.setItem("user", JSON.stringify(account.value));
        }else{
            loginError.value = "Email hoặc mật khẩu không đúng!";
        }
    }
    const checkLogin = () =>{
        const check = accounts.value.some((a) => a.email === account.value.email && a.password === account.value.password)
        if(check){
            account.value = accounts.value.find((a) => a.email === account.value.email && a.password == account.value.password);
        }
        return check;
    }
    onMounted(loadData);
</script>

<style lang="scss" scoped></style>