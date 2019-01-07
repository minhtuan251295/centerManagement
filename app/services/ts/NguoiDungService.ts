import * as $ from "jquery";

export class NguoiDungService{
    //Lấy danh sách người dùng từ server (HV+GV)
    public LayDanhSachNguoiDung(){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung`;
        return $.ajax({
            type:'GET',
            url: urlAPI,
        });
    }
    //Lấy danh sách học viên từ server
    public LayDanhSachHocVien(){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachHocVien`;
        return $.ajax({
            type:'GET',
            url: urlAPI,
        });
    }
    //Thêm người dùng vào thẳng server
    public ThemNguoiDung(nguoidung){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung`;
        return $.ajax({
            type:'POST',
            url: urlAPI,
            dataType: "json",
            data:nguoidung,
        });
    }
    //Xóa người dùng từ server
    public XoaHocVien(id){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`;
        return $.ajax({
            type:'DELETE',
            url: urlAPI,
        });
    }
    //Show thông tin chi tiết của người dùng
    public ThongTinNguoiDung(id){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${id}`;
        return $.ajax({
            type:'GET',
            url: urlAPI,
        });
    }
    //Cập nhật thông tin của người dùng
    public CapNhatThongTin(taikhoan, matkhau, hoten, email, sodt, maloainguoidung,tenloainguoidung){
        let thongtin = JSON.stringify({TaiKhoan:taikhoan, MatKhau:matkhau, HoTen:hoten, Email:email, SoDT:sodt,
            MaLoaiNguoiDung:maloainguoidung, TenLoaiNguoiDung:tenloainguoidung});
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`;
        return $.ajax({
            type:'PUT',
            url: urlAPI,
            contentType: "application/json",
            dataType: "json",
            data: thongtin,
        });
    }
}