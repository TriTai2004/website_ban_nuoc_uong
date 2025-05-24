<template>
        <div class="row bg-white py-3">
        <div class="col">

        </div>
        <div class="col d-flex justify-content-end">

        </div>

    </div>
    <div class="row py-2">
        <div class="col-3">

        </div>
        <div class="col d-flex align-items-center justify-content-end pe-4">
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
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Số lượng bán</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Doanh thu</th>
                    <th scope="col">Ngày bán</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Trà Sữa Thái Lan</td>
                    <td>50</td>
                    <td>35.000 VNĐ</td>
                    <td>1.750.000 VNĐ</td>
                    <td>24/01/2025</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Trà Sữa Đào</td>
                    <td>30</td>
                    <td>40.000 VNĐ</td>
                    <td>1.200.000 VNĐ</td>
                    <td>24/01/2025</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Trà Sữa Khoai Môn</td>
                    <td>40</td>
                    <td>45.000 VNĐ</td>
                    <td>1.800.000 VNĐ</td>
                    <td>23/01/2025</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Trà Sữa Khoai Môn</td>
                    <td>40</td>
                    <td>45.000 VNĐ</td>
                    <td>1.800.000 VNĐ</td>
                    <td>23/01/2025</td>
                </tr>
            </tbody>
        </table>
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