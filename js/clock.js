
let userName = prompt("Adınız ");

let frontName = document.querySelector("#myName");
frontName.innerHTML = `${userName}`;


var tarih=new Date();
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();	
let myClock=document.querySelector("#myClock");
myClock.innerHTML=`${saat}: ${dakika}: ${saniye}`