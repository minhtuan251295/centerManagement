export class NguoiDung{
    public TaiKhoan:string;
    public MatKhau:string;
    public HoTen:string;
    public Email:string;
    public SoDT:number;
    public MaLoaiNguoiDung:string;
    public TenLoaiNguoiDung:string;

    constructor(taikhoan:string, matkhau:string, hoten:string, email:string, sodt:number, maloainguoidung:string, tenloainguoidung:string){
        this.TaiKhoan = taikhoan;
        this.MatKhau = matkhau;
        this.HoTen = hoten;
        this.Email = email;
        this.SoDT = sodt;
        this.MaLoaiNguoiDung = maloainguoidung;
        this.TenLoaiNguoiDung = tenloainguoidung;
    }
}