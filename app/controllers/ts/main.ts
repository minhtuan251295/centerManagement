import * as $ from "jquery";
import { KhoaHocService } from "../../services/ts/KhoaHocService";
import { DanhSachKhoaHoc } from "../../models/ts/DanhSachKhoaHoc";
import { KhoaHoc } from "../../models/ts/KhoaHoc";
import { DanhSachNguoiDung } from "../../models/ts/DanhSachNguoiDung";
import { NguoiDungService } from "../../services/ts/NguoiDungService";
import { NguoiDung } from "../../models/ts/NguoiDung";
import { validation } from "../../models/ts/validation";
import Swal from 'sweetalert2';

$(document).ready(function(){
    let danhsachkhoahoc:DanhSachKhoaHoc = new DanhSachKhoaHoc();
    let KHService:KhoaHocService = new KhoaHocService();
    let validate:validation = new validation();

    //Lấy danh sách các khóa học trang index
    KHService.LayDanhSachKhoaHoc().done(function (danhSachKhoaHoc) {
        let content:string = "";
        for (let i = 0; i < 6; i++){
            let khoahoc = danhSachKhoaHoc[i];
            content +=`
            <div class="col-sm-12 col-md-4" style="margin-bottom:20px;">
                <div class="card" style="display:inline-block; -webkit-box-shadow: 0 10px 6px -6px #777;
                -moz-box-shadow: 0 10px 6px -6px #777;
                        box-shadow: 0 10px 6px -6px #777;">
                    <img class="card-img-top" src="${khoahoc.HinhAnh}" alt="Card image" style="height:200px!important;">
                    <div class="card-body">
                        <h4 class="card-title">${khoahoc.TenKhoaHoc}</h4>
                        <p class="card-text" style="margin-bottom:0.2rem;"> Giảng Viên : ${khoahoc.NguoiTao} </p>
                        <p class="card-text"> Lượt xem: ${khoahoc.LuotXem}</p>
                        <a href="ChiTietKhoaHoc.html?makhoahoc=${khoahoc.MaKhoaHoc}" class="btn btn-primary ChiTietKhoaHoc">Xem Chi Tiết</a>
                    </div>
                </div>
            </div>
            `
        }
        $('#content').html(content);
    });
    //Lấy tất cả các khóa học cho trang CacKhoaHoc
    KHService.LayDanhSachKhoaHoc().done(function (danhSachKhoaHoc) {
        let content:string = "";
        for (let khoahoc of danhSachKhoaHoc){
            content +=`
            <div class="col-sm-12 col-md-4" style="margin-bottom:20px;">
                <div class="card" style="display:inline-block; -webkit-box-shadow: 0 10px 6px -6px #777;
                -moz-box-shadow: 0 10px 6px -6px #777;
                        box-shadow: 0 10px 6px -6px #777;">
                    <img class="card-img-top" src="${khoahoc.HinhAnh}" alt="Card image" style="height:200px!important;">
                    <div class="card-body">
                        <h4 class="card-title">${khoahoc.TenKhoaHoc}</h4>
                        <p class="card-text" style="margin-bottom:0.2rem;"> Giảng Viên : ${khoahoc.NguoiTao} </p>
                        <p class="card-text"> Lượt xem: ${khoahoc.LuotXem}</p>
                        <a href="ChiTietKhoaHoc.html?makhoahoc=${khoahoc.MaKhoaHoc}" class="btn btn-primary ChiTietKhoaHoc">Xem Chi Tiết</button>
                    </div>
                </div>
            </div>
            `
            danhsachkhoahoc.ThemKhoaHoc(khoahoc);
        }
        $('#content-all').html(content);
        
    });
    $('#btnLayThongTinKhoaHoc').click(function(){
        KHService.LayDanhSachKhoaHoc().done(function (danhSachKhoaHoc){
            LoadKhoaHoc(danhSachKhoaHoc);
        })
    })
    //Load khóa học lên bảng
    function LoadKhoaHoc(ketqua){
        let NoiDung: string = "";
        for (let khoahoc of ketqua) {
            NoiDung += `
            <tr>
                <td> <input type="checkbox" class="checkbxMaKhoaHoc" value="${khoahoc.MaKhoaHoc}"> </td>
                <td> ${khoahoc.MaKhoaHoc} </td>
                <td> ${khoahoc.TenKhoaHoc} </td>
                <td> ${khoahoc.HinhAnh}</td>
                
            </tr>
        `
        }
        $('#showkhoahoc').html(NoiDung);
    }
    //Lấy chi tiết khóa học
    {
        $('body').on("click",".ChiTietKhoaHoc",function(){
            // let value = $(this).attr("makhoahoc");
            // KHService.LayDanhSachKhoaHoc().done(function (danhSachKhoaHoc){
            //     for(let i =0; i< danhSachKhoaHoc.length; i++){
            //         if(danhSachKhoaHoc[i].MaKhoaHoc == value){
            //             let khoahoc = danhSachKhoaHoc[i];
            //             let data = JSON.stringify(khoahoc);
            //             localStorage.setItem('MyData', data);
            //             window.location.replace("ChiTietKhoaHoc.html#" + value);
            //         }
            //     }
            // });
        });
        // let data = localStorage.getItem('MyData');
        // let chitietkhoahoc = JSON.parse(data);
        // $('#TiTle').html(chitietkhoahoc.TenKhoaHoc);
        // $('.nguoitao').html(chitietkhoahoc.NguoiTao);
        // $('.MOTA').html(chitietkhoahoc.MoTa);
        // $('.card-img-top').attr('src', chitietkhoahoc.HinhAnh);
        // $('#btnGhiDanh').val(chitietkhoahoc.MaKhoaHoc);
    }
        
    //Lấy thông tin người dùng thông qua resigter
    $('#btnResigter').click(function(){
        let loi:number = 0;
        let Ho_Ten = $('#hoten').val();
        let Tai_Khoan = $('#userName').val();
        let PASS = $('#pass').val();
        let Email = $('#email').val();

        if(validate.KiemTraRong(Ho_Ten)){
            loi++;
            $('.wrap-hoten').css("border-bottom-color", "red");
        } else{
            $('.wrap-hoten').css("border-bottom-color", "green");
        }
        if(validate.KiemTraRong(Tai_Khoan)){
            loi++;
            $('.wrap-username').css("border-bottom-color", "red");
        } else{
            $('.wrap-username').css("border-bottom-color", "green");
        }
        if(validate.KiemTraRong(PASS)){
            loi++;
            $('.wrap-password').css("border-bottom-color", "red");
        } else{
            $('.wrap-password').css("border-bottom-color", "green");
        }
        if(validate.KiemTraRong(Email)){
            loi++;
            $('.wrap-email').css("border-bottom-color", "red");
        } else{
            $('.wrap-email').css("border-bottom-color", "green");
        }
        if(loi != 0){
            return;
        }else{
            Swal({
                title: "Welcome!", 
                text: "Resigter Successfully!", 
                type: "success",
            });
            
            setTimeout(function(){
                window.location.replace("login-page.html");
            },8000);
        }
    });
    
    //Kiểm tra người dùng login
    $('#btnLogin').click(function(){
        //Kiểm tra validation
        let user = $('#userName').val();
        let pass = $('#pass').val();
        let loi:number = 0;
        if(user == "")
        {
            loi++;
            $('.wrap-username').css("border-bottom-color", "red");
        } else{
            $('.wrap-username').css("border-bottom-color", "green");
        }
        if(pass == ""){
            loi++;
            $('.wrap-password').css("border-bottom-color", "red");
        }else{
            $('.wrap-password').css("border-bottom-color", "green");
        }
        if(loi != 0){
            return;
        }
        
        // let taikhoanHocVienMoi = chitiethocVien.TaiKhoan;
        // let matkhauHocVienMoi = chitiethocVien.MatKhau;
        // if(user == taikhoanHocVienMoi && pass == matkhauHocVienMoi){
        //     Swal({
        //         title: "Welcome!", 
        //         text: "Login Successfully!", 
        //         type: "success"
        //     }); 
        //     $("#dangnhap").css("display" , "none");
        //     $("#dangky").css("display" , "none");
        //     setTimeout(() => {
        //         window.location.replace("ChiTietKhoaHoc.html")
        //     }, 8000);
        // }
        // if(user == "admin" && pass == "12345"){
        //     Swal({
        //         title: "Welcome!", 
        //         text: "Login Successfully!", 
        //         type: "success"
        //     });
        //     setTimeout(window.location.replace("Dashboard.html"),8000);
        // }
    });
    //Trang Thông Tin Chi Tiết Giáo Vụ

        
    
    //Ghi Danh Khoa Hoc
    // $('#btnGhiDanh').click(function(){
    //     if(!flag){
    //         if (HOCVIEN.TaiKhoan == "") {
    //             Swal({
    //                 title: "Oops!",
    //                 text: "Bạn chưa đăng nhập, vui lòng đăng nhập trước khi ghi danh!",
    //                 type: "error"
    //             });
    //             flag = true;
    //             setTimeout(window.location.replace("login-page.html"), 8000);
    //         }
    //     }
    //     //Kiểm tra xem người dung để đăng nhập chưa
    //     else{
    //         let makhoahoc = $('#btnGhiDanh').val();
    //         let taikhoan = chitiethocVien.TaiKhoan;
    //         KHService.GhiDanhKhoaHoc(makhoahoc, taikhoan).done(function (ketqua) {
    //             Swal({
    //                 title: "Welcome!",
    //                 text: "Bạn đã ghi danh thành công!",
    //                 type: "success"
    //             });
    //         });
    //     }
    // });
    
    //Xóa Khóa Học
    $('#btnXoaKhoahoc').click(function () {
        let lstMa = $('.checkbxMaKhoaHoc');
        let lstMaChon = [];
        for(let i =0; i< lstMa.length; i++){
            if(lstMa[i].checked){
                lstMaChon.push(lstMa[i].value);
            }
        }
        KHService.LayDanhSachKhoaHoc().done(function(danhSachKhoaHoc){
            for(let k = 0; k <lstMaChon.length; k ++){
                for(let j=0; j < danhSachKhoaHoc.length; j++){
                    let khoahoc = danhSachKhoaHoc[j];
                    if(lstMaChon[k] == khoahoc.MaKhoaHoc){
                        KHService.XoaKhoaHoc(lstMaChon[k]).done(function(){
                            window.location.reload(true);
                        });
                    }
                }
            }
            
        });
        
    });
    
    //Lấy chi tiết khóa học để load lên bảng
    
    $('#btnChiTietKhoaHoc').click(function(){
        let lstMa = $('.checkbxMaKhoaHoc');
        let MaChon;
        for (let i = 0; i < lstMa.length; i++) {
            if (lstMa[i].checked) {
                MaChon = lstMa[i].value;
            }
        }
        KHService.ChiTietKhoaHoc(MaChon).done(function(chitiet){
            (<HTMLInputElement>document.getElementById('makhoahoc')).value = chitiet.MaKhoaHoc;
            (<HTMLInputElement>document.getElementById('tenkhoahoc')).value = chitiet.TenKhoaHoc;
            (<HTMLInputElement>document.getElementById('mota')).value = chitiet.MoTa;
            (<HTMLInputElement>document.getElementById('hinhanh')).value = chitiet.HinhAnh;
            (<HTMLInputElement>document.getElementById('luotxem')).value = chitiet.LuotXem;
            (<HTMLInputElement>document.getElementById('nguoitao')).value = chitiet.NguoiTao;
            // let data = JSON.stringify(chitiet);
            // console.log(data);
            // localStorage.setItem('MyData', data);
        });
    });
    
    //Thêm khóa học
    $('#btnThemKhoaHoc').click(function(){
        let makhoahoc:string = $('#makhoahoc').val();
        let tenkhoahoc:string = $('#tenkhoahoc').val();
        let mota:string = $('#mota').val();
        let hinhanh:string = $('#hinhanh').val();
        let luotxem:number = $('#luotxem').val();
        let nguoitao:string = $('#nguoitao').val();
        
        let khoahoc:KhoaHoc = new KhoaHoc(makhoahoc, tenkhoahoc, mota, hinhanh, luotxem, nguoitao);
        KHService.ThemKhoaHoc(khoahoc).done(function(danhSachKhoaHoc){
            window.location.reload(true);
        });
    });

    //Cập nhật khóa học
    $('#btnCapNhat').click(function(){
        let makhoahoc:string = $('#makhoahoc').val();
        let tenkhoahoc:string = $('#tenkhoahoc').val();
        let mota:string = $('#mota').val();
        let hinhanh:string = $('#hinhanh').val();
        let luotxem:number = $('#luotxem').val();
        let nguoitao:string = $('#nguoitao').val();

        KHService.CapNhatKhoaHoc(makhoahoc, tenkhoahoc, mota, hinhanh, luotxem, nguoitao).done(function(ketqua){
            window.location.reload(true);
        })
    });
    
    //Tìm kiếm khóa học
    $('#input-search').keyup(function(){
        let tukhoa = $('#input-search').val();
        KHService.LayDanhSachKhoaHoc().done(function(danhSachKhoaHoc){
            let danhsachKQ:DanhSachKhoaHoc = danhsachkhoahoc.TimKiem(tukhoa);
            let content:string = "";
            for(let khoahoc of danhsachKQ.DSKH){
                content +=`
                <div class="col-sm-12 col-md-4" style="margin-bottom:20px;">
                    <div class="card" style="display:inline-block; -webkit-box-shadow: 0 10px 6px -6px #777;
                    -moz-box-shadow: 0 10px 6px -6px #777;
                            box-shadow: 0 10px 6px -6px #777;">
                        <img class="card-img-top" src="${khoahoc.HinhAnh}" alt="Card image" style="height:200px!important;">
                        <div class="card-body">
                            <h4 class="card-title">${khoahoc.TenKhoaHoc}</h4>
                            <p class="card-text" style="margin-bottom:0.2rem;"> Giảng Viên : ${khoahoc.NguoiTao} </p>
                            <p class="card-text"> Lượt xem: ${khoahoc.LuotXem}</p>
                            <button class="btn btn-primary ChiTietKhoaHoc" makhoahoc="${khoahoc.MaKhoaHoc}">Xem Chi Tiết</button>
                        </div>
                    </div>
                </div>
                `
            }
            $('#content-all').html(content);
        });
    });
    $('#input-search').change(function(){
        let tukhoa = $('#input-search').val();
        KHService.LayDanhSachKhoaHoc().done(function(danhSachKhoaHoc){
            let danhsachKQ:DanhSachKhoaHoc = danhsachkhoahoc.TimKiem(tukhoa);
            let content:string = "";
            for(let khoahoc of danhsachKQ.DSKH){
                content +=`
                <div class="col-sm-12 col-md-4" style="margin-bottom:20px;">
                    <div class="card" style="display:inline-block; -webkit-box-shadow: 0 10px 6px -6px #777;
                    -moz-box-shadow: 0 10px 6px -6px #777;
                            box-shadow: 0 10px 6px -6px #777;">
                        <img class="card-img-top" src="${khoahoc.HinhAnh}" alt="Card image" style="height:200px!important;">
                        <div class="card-body">
                            <h4 class="card-title">${khoahoc.TenKhoaHoc}</h4>
                            <p class="card-text" style="margin-bottom:0.2rem;"> Giảng Viên : ${khoahoc.NguoiTao} </p>
                            <p class="card-text"> Lượt xem: ${khoahoc.LuotXem}</p>
                            <button class="btn btn-primary ChiTietKhoaHoc" makhoahoc="${khoahoc.MaKhoaHoc}">Xem Chi Tiết</button>
                        </div>
                    </div>
                </div>
                `
            }
            $('#content-all').html(content);
        });
    });

    //---------------------------------------------------------------------
    //Người dùng
    let danhsachnguoidung:DanhSachNguoiDung = new DanhSachNguoiDung();
    let NDService:NguoiDungService = new NguoiDungService();
    let danhsachhocvien:DanhSachNguoiDung = new DanhSachNguoiDung();
    //Lấy danh sách từ server
    NDService.LayDanhSachHocVien().done(function(danhSachHocVien){
        LoadNguoiDung(danhSachHocVien);
        for(let i=0; i< danhSachHocVien.length; i++){
            let hocvien:NguoiDung  = danhSachHocVien[i];
            danhsachhocvien.ThemNguoiDung(hocvien);
        };
    });

    //Lấy thông tin từ server để phân loại
    $('#btnLayThongTin').click(function(){
        NDService.LayDanhSachNguoiDung().done(function(danhSachNguoiDung){
            LoadNguoiDung(danhSachNguoiDung);
            for(let i=0; i< danhSachNguoiDung.length; i++){
                let hocvien:NguoiDung  = danhSachNguoiDung[i];
                danhsachnguoidung.ThemNguoiDung(hocvien);
            }
        });
    });
    $('#btnLayThongTinHocVien').click(function(){
        NDService.LayDanhSachHocVien().done(function(danhSachHocVien){
            LoadNguoiDung(danhSachHocVien);
            for(let i=0; i< danhSachHocVien.length; i++){
                let hocvien:NguoiDung  = danhSachHocVien[i];
                danhsachhocvien.ThemNguoiDung(hocvien);
            }
        });
    });
    //Hàm load table
    function LoadNguoiDung(DSND:Array<NguoiDung>){
        let NoiDung: string = "";
        for (let nguoidung of DSND) {
            NoiDung += `
                <tr class="text-center">
                    <td> <input type="checkbox" class="checkbxMaNguoiDung" value="${nguoidung.TaiKhoan}"> </td>
                    <td> ${nguoidung.TaiKhoan} </td>
                    <td> ${nguoidung.HoTen} </td>
                    <td> ${nguoidung.SoDT} </td>
                    <td> ${nguoidung.MaLoaiNguoiDung} </td>
                    <td> <button class="btnChiTietThongTin" data-toggle="modal" data-target="#myModal" style="background-color:transparent; border:none; cursor:pointer;"> <i class="fa fa-pencil"></i></button> </td>
                    <td> <button class="btnXoaHocVien" style="background-color:transparent; border:none; cursor:pointer"><i class="fa fa-trash"></i></button></td>
                </tr>
            `
        }
        $('.danhsach').html(NoiDung);
    }
    //Remove cache from modal
    $('body').on('click', '.modal-toggle', function (event) {
        event.preventDefault();
        $('.modal-content').empty();
        $('#myModal')
            .removeData('bs.modal')
            .modal({remote: $(this).attr('href') });
    });
    //Thêm Người dùng
    $('#btnThemHocVien').click(function(){
        let taikhoan:string = $('#taikhoan').val();
        let matkhau:string = $('#matkhau').val();
        let hoten:string = $('#hoten').val();
        let email:string = $('#email').val();
        let sodienthoai:number = $('#sodienthoai').val();
        let maloai:string = $('#maloai').val();
        let tenloai:string = $('#tenloai').val();

        let nguoidung:NguoiDung = new NguoiDung(taikhoan, matkhau, hoten, email, sodienthoai, maloai, tenloai);
        NDService.LayDanhSachNguoiDung().done(function(danhSachNguoiDung){
            for(let i = 0; i< danhSachNguoiDung.length; i++){
                let nguoidung = danhSachNguoiDung[i];
                if(taikhoan == nguoidung.TaiKhoan){
                    Swal({
                        title: "Oops!",
                        text: "Tài khoản đăng nhập của bạn bị trùng, vui lòng nhập lại!",
                        type: "error"
                    });
                } else{
                    NDService.ThemNguoiDung(nguoidung).done(function(danhSachHocVien){
                        window.location.reload();
                    }); 
                }
            }
        });        
             
    });

    //Xóa người dùng
    $('body').delegate("", "click", function(){
        $('.btnXoaHocVien').click(function(){
            let lstMa = $('.checkbxMaNguoiDung');
            let lstMaChon = [];
            for(let i =0; i< lstMa.length; i++){
                if(lstMa[i].checked){
                    lstMaChon.push(lstMa[i].value);
                }
            }
            //Cho học viên
            NDService.LayDanhSachHocVien().done(function(danhSachHocVien){
                for(let j=0; j< lstMaChon.length; j++){
                    for(let k=0; k < danhSachHocVien.length; k++){
                        let hocvien:NguoiDung = danhSachHocVien[k];
                        if(lstMaChon[j] == hocvien.TaiKhoan){
                            danhsachhocvien = danhSachHocVien.splice(k,1)
                            NDService.XoaHocVien(hocvien.TaiKhoan).done(function(){
                                window.location.reload();
                            });
                        }   
                    }
                }
            });
            //Cho người dùng (cả học viên + giáo vụ)
            NDService.LayDanhSachNguoiDung().done(function(danhSachHocVien){
                for(let j=0; j< lstMaChon.length; j++){
                    for(let k=0; k < danhSachHocVien.length; k++){
                        let hocvien:NguoiDung = danhSachHocVien[k];
                        if(lstMaChon[j] == hocvien.TaiKhoan){
                            danhsachnguoidung = danhSachHocVien.splice(k,1)
                            NDService.XoaHocVien(hocvien.TaiKhoan).done(function(){
                                window.location.reload();
                            });
                        }   
                    }
                }
            });
        });
    });
    //Lấy chi tiết thông tin người dùng
    $('body').delegate("", "click", function(){
        $('.btnChiTietThongTin').click(function(){
            let lstMa = $('.checkbxMaNguoiDung');
            let MaChon;
            for(let i =0; i< lstMa.length; i++){
                if(lstMa[i].checked){
                    MaChon = lstMa[i].value;
                }
            }
            NDService.ThongTinNguoiDung(MaChon).done(function(thongtin){
                console.log(thongtin);
                for (let i = 0; i <thongtin.length; i++){
                    let hocvien  = thongtin[i];
                    (<HTMLInputElement>document.getElementById('taikhoan1')).value = hocvien.TaiKhoan;
                    (<HTMLInputElement>document.getElementById('matkhau1')).value = hocvien.MatKhau;
                    (<HTMLInputElement>document.getElementById('hoten1')).value = hocvien.HoTen;
                    (<HTMLInputElement>document.getElementById('email1')).value = hocvien.Email;
                    (<HTMLInputElement>document.getElementById('sodienthoai1')).value = hocvien.SoDT;
                    (<HTMLInputElement>document.getElementById('maloai1')).value = hocvien.MaLoaiNguoiDung;
                    (<HTMLInputElement>document.getElementById('tenloai1')).value = hocvien.TenLoaiNguoiDung;
                }
            });
        });
    });
    //Cập nhật thông tin người dùng
    
    $('#btnCapNhatChinhThuc').click(function(){
        let taikhoan:string = $('#taikhoan1').val();
        let matkhau:string = $('#matkhau1').val();
        let hoten:string = $('#hoten1').val();
        let email:string = $('#email1').val();
        let sodienthoai:number = $('#sodienthoai1').val();
        let maloai:string = $('#maloai1').val();
        let tenloai:string = $('#tenloai1').val();

        NDService.CapNhatThongTin(taikhoan, matkhau,hoten, email, sodienthoai, maloai, tenloai).done(function(){
            window.location.reload(true);
        });
    });
    
    //Tìm kiếm học viên
    $('#search').keyup(function(){
        let tukhoa = $('#search').val();
        NDService.LayDanhSachHocVien().done(function(danhSachHocVien){
            let danhsachKQ:DanhSachNguoiDung = danhsachnguoidung.TimKiem(tukhoa);
            danhSachHocVien = danhsachKQ.DSND;
            LoadNguoiDung(danhSachHocVien);
        });
        NDService.LayDanhSachNguoiDung().done(function(danhSachHocVien){
            let danhsachKQ:DanhSachNguoiDung = danhsachnguoidung.TimKiem(tukhoa);
            danhSachHocVien = danhsachKQ.DSND;
            LoadNguoiDung(danhSachHocVien);
        }); 
    });
    $('#search').change(function(){
        let tukhoa = $('#search').val();
        NDService.LayDanhSachHocVien().done(function(danhSachHocVien){
            let danhsachKQ:DanhSachNguoiDung = danhsachnguoidung.TimKiem(tukhoa);
            danhSachHocVien = danhsachKQ.DSND;
            LoadNguoiDung(danhSachHocVien);
        });
        NDService.LayDanhSachNguoiDung().done(function(danhSachHocVien){
            let danhsachKQ:DanhSachNguoiDung = danhsachnguoidung.TimKiem(tukhoa);
            danhSachHocVien = danhsachKQ.DSND;
            LoadNguoiDung(danhSachHocVien);
        }); 
    });

});

