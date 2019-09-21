// To chuc 1 doi tuong
// var sinhVien = {
//     maSinhVien: "01",
//     tenSinhVien: "Tuan",
// }
// console.log(sinhVien.maSinhVien);

function hienThiThongTin (){
    var maSinhVien = document.getElementById("txtMaSV").value;
    var tenSinhVien = document.getElementById("txtTenSV").value;
    var loaiSinhVien = document.getElementById("loaiSV").value;
    var diemToan = document.getElementById("txtDiemToan").value;
    var diemVan = document.getElementById("txtDiemVan").value;
    // To chuc doi tuong
    var sinhVien = {
        // key : value
        maSV: maSinhVien,
        tenSV: tenSinhVien,
        loaiSV: loaiSinhVien,
        diemToan: diemToan,
        diemVan: diemVan,

        tinhDiemTB: function () {
            return (this.diemToan + this.diemVan) / 2;
        },
        xepLoai: function () {
            var xepLoai = "";
            var diemTB = this.tinhDiemTB();


            if (diemTB > 8) {
                xepLoai = "Gioi"
            }
            return xepLoai;
        }
    }
    // Hien Thi Ket Qua
    document.getElementById("spanTenSV").innerHTML = sinhVien.tenSV;
    document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
    document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
    document.getElementById("spanDTB").innerHTML = sinhVien.tinhDiemTB ();
    document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai ();

}