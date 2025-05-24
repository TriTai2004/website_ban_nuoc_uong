<template>
                    <div class="row bg-white py-3">
                    <div class="col">
                    </div>
                    <div class="col d-flex justify-content-end">
                        <div class="d-flex justify-content-between mb-2">
                            <div>
                                <label for="startDate" class="form-label">Từ ngày:</label>
                                <input type="date" id="startDate" class="form-control form-control-sm" />
                            </div>
                            <div>
                                <label for="endDate" class="form-label">Đến ngày:</label>
                                <input type="date" id="endDate" class="form-control form-control-sm" />
                            </div>
                            <div class="align-self-end ms-2">
                                <button class="btn btn-success border-0 btn-sm bg-main" id="filterBtn">Lọc</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="content bg-light rounded-2 p-3">

                    <table class="table table-hover table-striped text-center align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Tên Khách Hàng</th>
                                <th scope="col">Ngày Lập</th>
                                <th scope="col">Tổng Giá Trị</th>
                                <th scope="col">Trạng Thái</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>01/01/2025</td>
                                <td>500.000 VNĐ</td>
                                <td>Đã thanh toán</td>
                                <td class="d-flex justify-content-between">
                                    <div class="dropdown dropstart">
                                        <a class="btn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button class="dropdown-item" type="button" data-bs-toggle="modal"
                                                    data-bs-target="#client">Cập nhật</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>01/01/2025</td>
                                <td>500.000 VNĐ</td>
                                <td>Đã thanh toán</td>
                                <td class="d-flex justify-content-between">
                                    <div class="dropdown dropstart">
                                        <a class="btn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button class="dropdown-item" type="button" data-bs-toggle="modal"
                                                    data-bs-target="#client">Cập nhật</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>01/01/2025</td>
                                <td>500.000 VNĐ</td>
                                <td>Đã thanh toán</td>
                                <td class="d-flex justify-content-between">
                                    <div class="dropdown dropstart">
                                        <a class="btn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button class="dropdown-item" type="button" data-bs-toggle="modal"
                                                    data-bs-target="#client">Cập nhật</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>01/01/2025</td>
                                <td>500.000 VNĐ</td>
                                <td>Đã thanh toán</td>
                                <td class="d-flex justify-content-between">
                                    <div class="dropdown dropstart">
                                        <a class="btn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button class="dropdown-item" type="button" data-bs-toggle="modal"
                                                    data-bs-target="#client">Cập nhật</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>01/01/2025</td>
                                <td>500.000 VNĐ</td>
                                <td>Đã thanh toán</td>
                                <td class="d-flex justify-content-between">
                                    <div class="dropdown dropstart">
                                        <a class="btn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button class="dropdown-item" type="button" data-bs-toggle="modal"
                                                    data-bs-target="#client">Cập nhật</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>01/01/2025</td>
                                <td>500.000 VNĐ</td>
                                <td>Đã thanh toán</td>
                                <td class="d-flex justify-content-between">
                                    <div class="dropdown dropstart">
                                        <a class="btn" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button class="dropdown-item" type="button" data-bs-toggle="modal"
                                                    data-bs-target="#client">Cập nhật</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Modal add-->
                    <div class="modal fade" id="client" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Hóa đơn</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="invoiceCustomerName" class="form-label">Tên Khách Hàng</label>
                                            <input type="text" class="form-control" id="invoiceCustomerName" required disabled>
                                        </div>
                                        <div class="mb-3">
                                            <label for="invoiceDate" class="form-label">Ngày Lập</label>
                                            <input type="date" class="form-control" id="invoiceDate" required disabled>
                                        </div>
                                        <div class="mb-3">
                                            <label for="invoiceTotal" class="form-label">Tổng Giá Trị</label>
                                            <input type="text" class="form-control" id="invoiceTotal" required disabled>
                                        </div>
                                        <div class="mb-3">
                                            <label for="invoiceStatus" class="form-label">Trạng Thái</label>
                                            <select class="form-select" id="invoiceStatus" required>
                                                <option value="Đã thanh toán">Đã thanh toán</option>
                                                <option value="Chưa thanh toán">Chưa thanh toán</option>
                                            </select>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button type="submit" class="btn btn-primary">Lưu</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
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
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>