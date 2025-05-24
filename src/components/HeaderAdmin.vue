<template>
    <div class="row py-4 ">
        <div class="col-3">
            <!-- <form class="position-relative ms-5">
                <input class="form-control form-control-sm w-100 ps-5" type="search" placeholder="Tìm kiếm"
                    aria-label="Search">
                <a class="position-absolute top-50 ps-4 translate-middle-y top-0" type="submit">
                    <i class="bi bi-search"></i>
                </a>
            </form> -->
        </div>
        <div class="col-9 d-flex justify-content-end pe-4">
            <div class="thongbao d-flex align-items-center">
                <i class="bi bi-bell"></i>
            </div>
            <div class="dropdown ms-3">
                <a class="text-main" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fs-5 bi bi-person"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Cài đặt</a></li>
                    <li>
                        <router-link class="dropdown-item" to="/">
                            Trang chủ
                        </router-link>
                        </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>