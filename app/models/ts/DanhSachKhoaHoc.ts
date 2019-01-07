import { KhoaHoc } from "./KhoaHoc";

export class DanhSachKhoaHoc{
    public DSKH: Array<KhoaHoc>=[];
    public ThemKhoaHoc(khoahoc:KhoaHoc):void{
        this.DSKH.push(khoahoc);
    }
    public TimKiem(tukhoa){
        let danhsachKQ = new DanhSachKhoaHoc();
        for (let i =0; i< this.DSKH.length; i++){
            let hocvien = this.DSKH[i];
            if(hocvien.TenKhoaHoc.toLowerCase().trim().search(tukhoa.toLowerCase().trim()) != -1){
                danhsachKQ.ThemKhoaHoc(hocvien);
            }
        }
        return danhsachKQ;
    }
}