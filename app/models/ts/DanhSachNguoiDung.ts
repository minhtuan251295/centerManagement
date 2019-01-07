import { NguoiDung } from "./NguoiDung";
import * as $ from "jquery";

export class DanhSachNguoiDung{
    public DSND:Array<NguoiDung> = [];
    public ThemNguoiDung(nguoidung:NguoiDung){
        this.DSND.push(nguoidung);
    }
    public TimKiem(tukhoa){
        let danhsachKQ = new DanhSachNguoiDung();
        for (let i =0; i< this.DSND.length; i++){
            let hocvien = this.DSND[i];
            if(hocvien.HoTen.toLowerCase().trim().search(tukhoa.toLowerCase().trim()) != -1){
                danhsachKQ.ThemNguoiDung(hocvien);
            }
        }
        return danhsachKQ;
    }
}