window.onload = pageLoad;

function pageLoad(){
let Start = document.getElementById("start")	
Start.onclick = startGame
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*30; 
	var x = document.getElementById('clock');
	let Start = document.getElementById("start")
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK)
	
	function timeCount()
	{
		var allbox = document.querySelectorAll("#game-layer div");
		second = second-1 
		x.innerHTML = second
		if (allbox.length == 0)
		{
			alert ("You win เวลาที่คุณทำได้"+second)
			clearInterval(timer)
			timer = null;
			clearScreen()
			x.innerHTML=""
		}
		else if(second==0)
		{
			alert("You lose")
			clearInterval(timer)
			timer = null;
			clearScreen()
			x.innerHTML=""
		}

		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value //จำนวนกล่อง
	var gameLayer = document.getElementById("game-layer")//แสดงช่อง
	var colorDrop = document.getElementById("color").value
	for (var i =0; i<numbox;i++)
	{
		var tempbox = document.createElement("div")
		tempbox.className = "square"
		tempbox.id = "box"+i; 
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox)
		bindBox(tempbox);
	}
}

function bindBox(box)
{
	//เมื่อกดแล้ว กล่องจะหายไป
	var gameLayer = document.getElementById("game-layer")
	box.onclick = function()
	{
		gameLayer.removeChild(box)	
	}
}

function clearScreen()
{
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ

	var allbox = document.querySelectorAll("#game-layer div");
	var gameLayer = document.getElementById("game-layer")

	//delete all  div
	for (var i=0;i<allbox.length;i++)
	{
		gameLayer.removeChild(allbox[i])
	}
}




