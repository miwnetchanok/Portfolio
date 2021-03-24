window.onload = pageLoad;
function pageLoad(){
let myform = document.getElementById("myForm")
myform.onsubmit = validateForm

}

function validateForm() 
{
    let username = document.getElementById("Name").value;
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let password = document.getElementById("Password").value;
    let require = document.getElementById("Require").value;
    if (password != require)
    {
        alert("ไม่ตรงกัน");
        return false;
        
    }
}
const url = window.location.search;
const urlParams = new URLSearchParams(url)
const username = urlParams.get('username')
console.log(username);
const password = urlParams.get('password')