export class validation{
    //Kiểm tra rỗng
	 public KiemTraRong = function(value){
		if(value.trim() == ""){
			return true;
		}
		return false;
	}
	public KiemTraEmail = function(value){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(value);
	}
	public KiemTraSoDienThoai = function(value){
		var reg = /^\d+$/;

		if(reg.test(value) && value.length >=10){
			return true;
		}return false ;
	}
}