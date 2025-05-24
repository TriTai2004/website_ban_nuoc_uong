<template>
  <div>
    <main>
      <div class="slider">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/images/slider_2.webp" alt="" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/slider_1.webp" alt="" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/slider_3.webp" alt="" class="d-block w-100" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <div class="introduce mb-4">
        <div class="container row mx-auto">
          <div class="col-lg-4 d-flex align-content-center justify-content-center">
            <img src="../assets/images/iconshipper.png" alt="" />
            <div class="title text-dark d-flex flex-column justify-content-center">
              <h5 class="text-white">Giao hàng miễn phí</h5>
              <p class="text-main fw-light text-white">
                Với các đơn hàng trên từ 100.000đ trở lên
              </p>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-content-center justify-content-center">
            <img src="../assets/images/icongio.png" alt="" />
            <div class="title text-dark d-flex flex-column justify-content-center">
              <h5 class="text-white">Phục vụ nhanh 24/7</h5>
              <p class="text-white fw-light">
                8h-22h30 tất cả các ngày trong tuần
              </p>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-content-center justify-content-center">
            <img src="../assets/images/iconnc.png" alt="" />
            <div class="title text-dark d-flex flex-column justify-content-center">
              <h5 class="text-white">Đồ uống đa dạng</h5>
              <p class="text-white fw-light">
                Ding tea, Matcha, Gong cha, Hồng trà,...
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="star-product mb-5">
        <div class="title text-center">
          <i class="bi bi-cup-straw fs-1 icon-main"></i>
          <h3 class="text-main mb-3 text-uppercase">Sản phẩm nổi bật</h3>
        </div>
        <div class="container">
          <div class="row">
            <div v-for="product in listProduct" :key="product.idType" class="col-md-3 align-items-stretch mb-3">
              <div class="card h-100">
                <router-link :to="`/product-detail/${product.idType}/${product.name}`" class="text-decoration-none">
                  <img :src="product.image" class="card-img-top" alt="..." />
                </router-link>
                <div class="card-body text-center">
                  <h5 class="card-title text-main text-truncate">
                    {{ product.name}}
                  </h5>
                  <p class="card-text icon-main">
                    {{ formatCurrency(product.price)}}
                  </p>
                </div>
              </div>
            </div>
            <div class="text-center">
            <button v-if="listProduct.length >= length" class="h6 border-0 bg-transparent" @click="length += 4">Xem thêm</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mb-5">
          <div class="row text-center">
            <i class="bi bi-gift icon-main fs-3"></i>
            <h3 class="mb-3 text-uppercase">Khuyến mãi hot</h3>
            <div class="col">
              <img src="../assets/images/banner-quang-cao-tra-sua-7_1623309814.png" alt="" class="w-100" />
            </div>
            <div class="col">
              <img src="../assets/images/mau-poster-tra-sua.jpg" alt="" class="w-100" />
            </div>
          </div>
        </div>
      </section>
      <div class="title text-center">
        <i class="bi bi-cup-hot fs-3 icon-main"></i>
        <h3 class="text-main text-uppercase">Menu</h3>
      </div>
      <section>
        <div class="menu container mb-5">
          <div class="d-flex justify-content-center align-items-center align-items-stretch">
            <div v-for="product in products" :key="product.name" class="d-flex align-items-end">
              <div class="card rounded-circle text-center border-0">
                <router-link :to="`/product/${product.idType}`">
                  <img :src="product.image" class="card-img-top w-25 rounded-pill" alt="" />
                </router-link>
                <div class="card-body">
                  <p class="card-text d-none d-sm-block">
                    {{ product.nameType }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mb-4">
          <h3 class="text-main text-center text-uppercase">Topping đa dạng</h3>
          <div class="row">
            <div class="col-8 justify-content-center">
              <div class="row mt-5">
                <div class="col text-center">
                  <marquee behavior="" direction="left">
                    <img src="../assets/images/Combo-3-loại-hạt.png" alt="" />
                    <img src="../assets/images/Combo2loaihat-2.png" alt="" />
                    <img src="../assets/images/Thạch-trái-cây.png" alt="" />
                    <img src="../assets/images/Sương-sáo.png" alt="" />
                    <img src="../assets/images/Trân-Châu-Đen.png" alt="" />
                  </marquee>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col">
                  <router-link><img src="../assets/images/Trân-Châu-Đen.png" alt=""
                      class="img-fluid" /></router-link>
                </div>
                <div class="col">
                  <router-link><img src="../assets/images/Trân-Châu-Trắng.png" alt=""
                      class="img-fluid" /></router-link>
                </div>
                <div class="col">
                  <router-link><img src="../assets/images/布丁-pudding.png" alt=""
                      class="img-fluid" /></router-link>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col">
                  <h3>
                    <marquee behavior="" direction="right">
                      <img v-for="product in products" :key="product.name" :src="product.image" alt="" />
                    </marquee>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-4 d-flex align-items-center">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div v-for="product, index in products" :key="product.name" :class="{'active':index == 1}" class="carousel-item">
                    <img :src="product.image" class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mb-5">
          <h3 class="text-center text-uppercase mb-4">Tin tức nổi bật</h3>
          <div class="row">
            <div class="col-lg-4 align-items-stretch">
              <a href="" class="h-100 card mb-3 text-decoration-none text-main">
                <img src="../assets/images/pcoffe_1_r1_slide_best_coffee_img_1-1.jpg" class="h-75" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-uppercase">Chế biến cà phê</h5>
                  <p class="card-text">
                    Cà phê sạch hiểu đơn giản là 100% cà phê, không pha trộn
                    thêm bất cứ thứ gì khác. Vậy quy trình sản xuất chế biến cà
                    phê sạch như...
                  </p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 align-items-stretch">
              <a href="" class="h-100 card mb-3 text-decoration-none text-main">
                <img src="../assets/images/blog-2_large.jpg" class="h-75" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-uppercase">COFFEE THỔ NHĨ KỲ</h5>
                  <p class="card-text">
                    Cà phê Thổ Nhĩ Kỳ có một phong cách pha chế rất quyến rũ và
                    nghệ thuật thưởng thức thú vị. Cà phê ở đất nước này không
                    chỉ là...
                  </p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 align-items-stretch">
              <a href="" class="h-100 card mb-3 text-decoration-none text-main">
                <img src="../assets/images/blog1_large.jpg" class="h-75" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-uppercase">
                    ĐẲNG CẤP QUA CỐC CÀ PHÊ
                  </h5>
                  <p class="card-text">
                    Uống cà phê thì dễ, thưởng thức cà phê mới khó. Muốn cảm
                    nhận được toàn bộ hương vị của cà phê, không những phải chú
                    ý đến hạt cà phê,...
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";

const types = ref([]);
const product = ref({
  idType: '',
  nameType: '',
  name: "",
  price: '',
  description: "",
  image: ""
})
const products = ref([]);

const loadData = async () => {
  try {
    types.value = (await axios.get('http://localhost:3000/Types')).data;
    
    products.value = flatProducts.value.filter((product, index, array) =>
        array.findIndex(p => p.idType === product.idType) === index
    )
  } catch (error) {
    console.log(error);
    
  }
};
onMounted(loadData);

const flatProducts = computed(() =>
    types.value.flatMap(type =>
        type.products.reverse().map(product => ({
            idType: type.id,
            nameType: type.name,
            name: product.name,
            price: product.price,
            description: product.description,
            image: product.image
        }))
    )
);

const length = ref(4);
const listProduct = computed(() => 
        flatProducts.value.slice(0, length.value)
);





const formatCurrency = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
};
</script>
<style></style>
