const url = window.location.search;
const urlParams = new URLSearchParams(url)

const username = urlParams.get('username')
console.log(username);

const password = urlParams.get('password')
console.log(password);

window.onload = loginLoad;
function loginLoad(){
let mylogin = document.getElementById("myLogin")
mylogin.onsubmit = checkLogin
}

function checkLogin()
{
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	let ID = document.getElementById("username").value
	let Pass = document.getElementById("Password").value
	if(username != ID)
	{
		alert("ข้อมูลไม่ตรงกัน")
		return false
	}
	else if(Pass !=password)
	{
		alert("รหัสไม่ตรงกัน")
		return false
	}
	else
	(
		alert("Login final")
	)
	
}

			