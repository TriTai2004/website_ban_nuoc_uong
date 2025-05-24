<template>
    <HeaderView/>
    <div>
        <main>
            <div class="container mt-5 pt-5 mb-5">
                <div class="row mt-4">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="./index.html"
                                    class="text-main text-decoration-none">Trang chủ</a></li>
                            <li class="breadcrumb-item icon-main" aria-current="page">Liên Hệ</li>
                        </ol>
                    </nav>
                    <div class="col-lg-6 mb-3">
                        <iframe class="w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.420495049439!2d105.7533564776132!3d9.982081464653684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08906415c355f%3A0x416815a99ebd841e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1739019933261!5m2!1svi!2s"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="text-uppercase">gửi thông tinh cho chúng tôi</h2>
                        <p>Hãy liên hệ ngay với chúng tôi để nhận được nhiều ưu đãi hấp dẫn dành cho bạn!</p>
                        <p>
                            <i class="bi bi-geo-alt icon-main"></i>
                            <strong>Địa chỉ: </strong>
                            Toà nhà FPT Polytechnic, đường số 22, phường Thường Thạnh, quận Cái Răng, TP Cần Thơ
                        </p>
                        <p>
                            <i class="bi bi-envelope icon-main"></i>
                            <strong>Email: </strong>
                            taintpc09496@gmail.com
                        </p>
                        <p>
                            <i class="bi bi-telephone icon-main"></i>
                            <strong>Phone: </strong>
                            0989898989
                        </p>
                        <form>
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Họ và tên*</label>
                                <input type="text" class="form-control" id="fullName" placeholder="Nhập họ và tên"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email*</label>
                                <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Điện thoại*</label>
                                <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Nội dung*</label>
                                <textarea class="form-control" id="message" rows="4" placeholder="Nhập nội dung"
                                    required></textarea>
                            </div>
                            <button type="submit" class="btn btn-success w-100">Gửi thông tin</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <FooterView/>
</template>
<script setup>
import FooterView from '@/components/FooterView.vue';
import HeaderView from '@/components/HeaderView.vue';


</script>
<style>

</style>