var btn = document.getElementsByTagName('button')[0]
var close = document.getElementsByClassName('li')
btn.onclick = () => {
	var input = document.getElementById('work').value
	var time = document.getElementById('time').value
	var date = document.getElementById('date').value
	if(input == ""){
		alert('mời nhập công việc')
	}
	if(time == ""){
		alert('nhập thời gian')
	}
	if(date == ""){
		alert('nhập ngày')
	}
	else{
		var myList = document.querySelector('ul')
		var li = document.createElement('li')
		var txt = document.createTextNode(input)
		var timetxt = document.createTextNode( " "+"vào lúc" + " "+time + 'h' + " " + "PM")
		var date = document.createTextNode(' '+ 'vào ngày '+date)
		li.appendChild(txt)
		li.appendChild(timetxt)
		li.appendChild(date)
		myList.appendChild(li)
		var liClass = li
		li.classList.add('li')
		input = "";
	}
	for(i = 0; i < close.length ; i++){
		close[i].onclick = function()  {
			this.style.display = 'none'
		}
	}
}
var i = 0
for(i = 0; i < close.length ; i++){
	close[i].onclick = function()  {
		this.style.display = 'none'
	}
}
// ngày giờ

setInterval(function(){
  let datezone = new Date()
	let hours = datezone.getHours()
	let minutes = datezone.getMinutes()
	let seconds = datezone.getSeconds()
	document.getElementsByTagName('h3')[0].innerHTML = "bây giờ là " + hours + ":" + minutes + ":" + seconds 
}, 1000);