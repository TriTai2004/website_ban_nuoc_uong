<template>
    <nav class="d-flex flex-column align-items-center justify-content-center">
        <router-link to="/" class="navbar-brand pt-4 mb-5 p-0 m-0" >
            <img src="../assets/images/lloggo.png" alt="logo">
        </router-link>
        <div class="list-group w-100 list-group-flush">
            <router-link to="/admin/home" @click="active" :class="{'active': isActive('/admin/home')}" class="rounded-3 list-group-item list-group-item-action" aria-current="true">
                <i class="bi bi-house me-2"></i>Trang chủ
            </router-link>
            <router-link to="/admin/product" :class="{'active': isActive ('/admin/product') }" class="rounded-3 list-group-item list-group-item-action">
                <i class="bi bi-box2-heart me-2"></i>Sản phẩm
            </router-link>
            <router-link to="/admin/type" :class="{'active': isActive ('/admin/type') }" class="rounded-3 list-group-item list-group-item-action">
                <i class="bi bi-box2-heart me-2"></i>Loại
            </router-link>
            <router-link to="/admin/history" :class="{'active': isActive ('/admin/history')}" class="rounded-3 list-group-item list-group-item-action">
                <i class="bi bi-book me-2"></i>Lịch sử
            </router-link>
            <router-link to="/admin/account" :class="{'active': isActive ('/admin/account')}"   class="rounded-3 list-group-item list-group-item-action">
                <i class="bi bi-people me-2"></i>Tài khoản
            </router-link>
            <router-link to="/admin/statistic" :class="{'active': isActive ('/admin/statistic')}"  class="rounded-3 list-group-item list-group-item-action">
                <i class="bi bi-graph-up me-2"></i>Thống kê
            </router-link>
            <router-link to="/admin/customer" :class="{'active': isActive ('/admin/customer')}"  class="rounded-3 list-group-item list-group-item-action ">
                <i class="bi bi-gender-ambiguous me-2"></i>Khách hàng
            </router-link>
            <router-link to="/admin/bill" :class="{'active': isActive ('/admin/bill')}"  class="rounded-3 list-group-item list-group-item-action">
                <i class="bi bi-basket3 me-2"></i>Hóa đơn
            </router-link>
        </div>
    </nav>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const isActive = (path) => route.path.includes(path);
</script>

<style scoped></style>