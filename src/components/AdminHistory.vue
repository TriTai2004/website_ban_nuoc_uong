<template>
    <div class="row py-2">
        <div class="col">
            <form class="mb-4 position-relative">
                <div class="mb-3">
                    <input type="text" class="form-control form-control-sm" id="idKhachHang"
                        placeholder="Tìm kiếm khách hàng" required>
                </div>
                <button class="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent" type="submit"
                  >
                    <i class="bi bi-search"></i>
                </button>
            </form>
        </div>
        <div class="col d-flex align-items-center justify-content-end pe-4">
            <h5 class="me-2">Tổng tiền</h5>
            <i class="bi bi-sort-down fs-4 text-main me-1"></i>
            <i class="bi bi-sort-up fs-4 text-main"></i>
        </div>

    </div>
    <div class="content bg-light rounded-2 p-3">
        <table class="table table-hover table-striped text-center align-middle">
            <thead class="">
                <tr>
                    <th>#</th>
                    <th>Mã Đơn Hàng</th>
                    <th>Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Ngày Mua</th>
                    <th>Tổng Tiền (VNĐ)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>DH001</td>
                    <td>Trà sữa</td>
                    <td>2</td>
                    <td>2025-01-01</td>
                    <td>100,000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>DH002</td>
                    <td>Trà xanh</td>
                    <td>1</td>
                    <td>2025-01-15</td>
                    <td>50,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>DH003</td>
                    <td>Cà phê</td>
                    <td>3</td>
                    <td>2025-01-20</td>
                    <td>150,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>DH003</td>
                    <td>Cà phê</td>
                    <td>3</td>
                    <td>2025-01-20</td>
                    <td>150,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>DH003</td>
                    <td>Cà phê</td>
                    <td>3</td>
                    <td>2025-01-20</td>
                    <td>150,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>DH003</td>
                    <td>Cà phê</td>
                    <td>3</td>
                    <td>2025-01-20</td>
                    <td>150,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>DH003</td>
                    <td>Cà phê</td>
                    <td>3</td>
                    <td>2025-01-20</td>
                    <td>150,000</td>
                </tr>
            </tbody>
        </table>
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

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>