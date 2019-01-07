import * as $ from "jquery";

export class KhoaHocService{
    public LayDanhSachKhoaHoc(){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc`;
        return $.ajax({
            type:'GET',
            url: urlAPI,
        });
    }
    public XoaKhoaHoc(id){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`;
        return $.ajax({
            type:'DELETE',
            url: urlAPI,
        });
    }
    public ChiTietKhoaHoc(id){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/ChiTietKhoaHoc/${id}`;
        return $.ajax({
            type:'GET',
            url: urlAPI,
        })
    }
    public ThemKhoaHoc(khoahoc){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc`;
        return $.ajax({
            type:'POST',
            url:urlAPI,
            dataType:'json',
            data:khoahoc,
        });
    }
    public CapNhatKhoaHoc(makhoahoc:string, tenkhoahoc:string, mota:string, hinhanh:string, luotxem:number, nguoitao:string){
        let urlAPI = `http://sv.myclass.vn/api/QuanLyTrungTam/capnhatkhoahoc`;
        let khoahoc = JSON.stringify({MaKhoaHoc:makhoahoc, TenKhoaHoc:tenkhoahoc, MoTa:mota, HinhAnh:hinhanh, LuotXem:luotxem, NguoiTao:nguoitao});
        return $.ajax({
            type:'PUT',
            url:urlAPI,
            data: khoahoc,
            contentType:"application/json",
            dataType: "json",
        });
    }
    public GhiDanhKhoaHoc(makhoahoc:string, taikhoan:string){
        let urlAPI  = `http://sv.myclass.vn/api/QuanLyTrungTam/GhiDanhKhoaHoc`;
        let model = JSON.stringify({MaKhoaHoc:makhoahoc, TaiKhoan:taikhoan});
        return $.ajax({
            type:'POST',
            url: urlAPI,
            contentType: "application/json",
            dataType: "json",
            data: model
        })
    }
}