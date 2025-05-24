<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2">
                <NavAdmin />
            </div>
            <div class="col-lg-10 vh-100">
                <HeaderAdmin />
                <div class="">
                    <RouterView />
                
                </div>
               <footer class="text-dark text-center py-3 mt-2 position-absolute bottom-0 end-0 me-2">
                    <p class="mb-0">© 2025 TeaTime. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    </div>
</template>
<script setup>
import HeaderAdmin from '@/components/HeaderAdmin.vue';
import NavAdmin from '@/components/NavAdmin.vue';
import { RouterView } from 'vue-router';
</script>
<style></style>