var mangSinhVien = [];
function themSinhVien() {
    var maSinhVien = document.getElementById("txtMaSV").value;
    var tenSinhVien = document.getElementById("txtTenSV").value;
    var loaiSinhVien = document.getElementById("loaiSV").value;
    var diemToan = parseFloat(document.getElementById("txtDiemToan").value);
    var diemLy = parseFloat(document.getElementById("txtDiemLy").value);
    var diemHoa = parseFloat(document.getElementById("txtDiemHoa").value);
    var diemRL = document.getElementById("txtDiemRenLuyen").value;
    
    // To chuc doi tuong
    var sinhVien = {
        // key : value
        maSV: maSinhVien,
        tenSV: tenSinhVien,
        loaiSV: loaiSinhVien,
        diemToan: diemToan,
        diemLy: diemLy,
        diemHoa: diemHoa,
        diemRL: diemRL,

        
    }
    mangSinhVien.push(sinhVien);
    HienThi();
}
function HienThi () {
    var tBody = document.getElementById("tbodySinhVien");
    tBody.innerHTML = "";
    for (var i = 0; i < mangSinhVien.lenght; i++);{
        var sinhVien = mangSinhVien[i];
        // Tao dong -- 1 sinh vien/ 1 dong
        var trSinhVien = document.createElement("tr");

        var tdMaSV = document.createElement("td");
        tdMaSV.innerHTML = sinhVien.maSV;
        trSinhVien.appendChild(tdMaSV);

        var tdTenSV = document.createElement("td");
        tdTenSV.innerHTML = sinhVien.tenSV;
        trSinhVien.appendChild(tdTenSV);

        var tdLoaiSV = document.createElement("td");
        tdLoaiSV.innerHTML = sinhVien.loaiSV;
        trSinhVien.appendChild(tdLoaiSV);

        var tdDiemTB = document.createElement("td");
        tdDiemTB.innerHTML = sinhVien.tinhDiemTB;
        trSinhVien.appendChild(tdDiemTB);

        var tdDiemRL = document.createElement("td");
        tdDiemRL.innerHTML = sinhVien.diemRL;
        trSinhVien.appendChild(tdDiemRL);

        tBody.appendChild(trSinhVien);
    }
}