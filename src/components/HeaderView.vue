<template>
  <div>
    <header class="fixed-top">
      <div class="heaer-top bg-main d-none d-md-block">
        <div class="container row mx-auto px-2">
          <div class="col-4 p-0">
            <marquee behavior="" direction="" class="text-white">
              Đường số 22, phường Thường Thạnh, quận Cái Răng, TP Cần Thơ,
              Phone: 098 388 1100
            </marquee>
          </div>
          <div class="col p-0 d-flex justify-content-end align-items-center">
            <div class="dropdown ms-3">
              <a class="p-0 text-white" data-bs-toggle="dropdown">
                <i class="bi bi-search text-white"></i>
              </a>
              <div class="dropdown-menu border-0 bg-transparent p-0">
                <form action="" class="d-flex position-relative border-0 mt-1">
                  <input class="text-dark pe-4 ps-3 py-1 rounded-3 border" type="search" placeholder="Tìm kiếm..." />
                  <button class="border-0 bg-transparent position-absolute top-50 translate-middle-y end-0">
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div class="dropdown ms-3 account">
              <a class="p-0 text-white" data-bs-toggle="dropdown">
                <i class="bi bi-people text-white"></i>
              </a>
              <ul class="dropdown-menu">
                <div class="triangle position-absolute"></div>
                <li>
                  <router-link v-if="user == null" class="dropdown-item" to="/login">
                    Đăng nhập
                  </router-link>
                </li>
                <li>
                  <router-link v-if="user == null" class="dropdown-item" to="/register">
                    Đăng ký
                  </router-link>
                </li>
                <li>
                  <router-link v-if="user && user.role" class="dropdown-item" to="/admin/home">
                    Admin
                  </router-link>
                </li>
                <li>
                  <a @click="logout" v-if="user != null" class="dropdown-item btn btn-success" to="/login">
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="header-main">
        <nav class="navbar navbar-expand-md">
          <div class="container">
            <a class="d-md-none text-main" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
              aria-controls="offcanvasExample">
              <i class="bi bi-list fs-4"></i>
            </a>
            <router-link to="/" class="navbar-brand">
              <img src="../assets/images/loggo.png" alt="loggo" />
            </router-link>
            <div class="menu d-none d-md-block" id="collapsibleNavId">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link fs-6 text-uppercase text-white fw-bold" to="/">
                    Trang chủ
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link fs-6 text-uppercase text-white fw-bold" to="/introduction">
                    Giới thiệu
                  </router-link>
                </li>
                <li class="nav-item ">
                  <div class=" position-relative menu-product">
                    <a class="nav-link fs-6 text-uppercase text-white fw-bold d-block">
                      Sản phẩm
                      <div class="position-absolute menu-products ">
                        <div class="triangle position-absolute"></div>
                        <ul class="d-flex justify-content-between">
                          <li v-for="type in types" :key="type.id">
                            <router-link class="fw-light fs-6 text-decoration-none px-2  mb-5 text-black-50" :to="`/product/${type.id}`">
                              {{ type.name }}
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link fs-6 text-uppercase text-white fw-bold" to="/contact">
                    Liên hệ
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="shop-cart">
              <div class="btn-group">
                <a type="button" class="p-0 m-0" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-cart3 text-white fs-4"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-2 m-0">
                  <div class="triangle position-absolute"></div>

                  <li class="d-flex justify-content-center">
                    <span class="text-dark">Chưa có sản phẩm.</span>
                  </li>
                  <li class="d-none">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="mobile">
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header align-items-start">
              <a href="./index.html" class="offcanvas-title navbar-brand" id="offcanvasExampleLabel">
                <img src="./images/loggo.png" alt="" />
              </a>
              <button type="button" class="btn-close border-0 p-0 m-0 text-reset" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a class="nav-link fs-6 text-uppercase text-main fw-bold" href="./index.html" aria-current="page">
                    Trang chủ
                    <span class="visually-hidden">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-6 text-uppercase text-main fw-bold" href="./gioithieu.html">Giới thiệu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-6 text-uppercase text-main fw-bold" href="./product.html">
                    Sản phẩm
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-6 text-uppercase text-main fw-bold" href="./lienhe.html">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const types = ref([])

const loadData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/Types');

    types.value = response.data;
    types.value = types.value.reverse();

  } catch (error) {
    console.log(error);
  }

}
const user = JSON.parse(sessionStorage.getItem("user"));
const logout = () =>{
  sessionStorage.removeItem("user");
  router.push('/login');
}
onMounted(loadData);
</script>
<style scoped>
.triangle {
  width: 31px;
  height: 10px;
  top: -9px;
  right: 10px;
  background-color: rgb(255, 255, 255);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.account .dropdown-menu {
  top: 4px !important;
  right: -20px !important;
}

.shop-cart .dropdown-menu {
  top: 38px !important;
  right: -15px !important;
}

.dropdown-menu:hover a {
  color: black !important;
  border: none;
}

.menu-product {
  left: 50%;
  transform: translateX(-50%);

}

.menu-product .menu-products {
  padding: 10px 20px;
  top: 51px;
  height: auto;
  width: 100vh;
  background-color: rgb(255, 255, 255);
  display: none;
  box-shadow: 0 0 5px #c7c7c7;
  left: 50%;
  transform: translateX(-50%);
}

.menu-product .menu-products::before {
  content: "";
  display: block;
  height: 20px;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  top: -15px;
  transition: .4s all ease;
}

.menu-product:hover .menu-products {
  display: block;
}
.menu-products ul li:hover a{
  color: #000 !important;
  border-bottom: 1px solid#000;
}

.menu-products .triangle {

  display: block;
  left: 50%;
  top: -9px !important;
  transform: translateX(-50%);
}
</style>
