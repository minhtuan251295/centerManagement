function ValidationForm()
{
	let userName = document.getElementById('userName').value;

	let passWord = document.getElementById('pass').value;

	if(userName == "nguyentuan" && passWord == "12345")
	{
		swal("Welcome!", "Login Successfully!", "success");
		setTimeout(changePage, 1700);
		function changePage()
		{
			window.location = "file:///C:/Users/USER/Desktop/QLSV/index.html";
		}	
	} else 
	{
		swal("Oops!", "Bạn nhập mật khẩu không đúng với tài khoản hoặc chưa có tài khoản!", "error");
	}
}