// console.log(time.getMilliseconds());
setInterval(() => {
//   console.log("dar"); 
var time=new Date();

var hrs=document.querySelector(".hrs")
var mint=document.querySelector(".mint")
var sec=document.querySelector(".sec")
var g_hrs=time.getHours();
var g_mint=time.getMinutes();
var g_sec=time.getSeconds();

sec.style.transform=`rotate(${g_sec*6}deg)`;
mint.style.transform=`rotate(${(g_mint*60+g_sec)*0.1}deg)`;
hrs.style.transform=`rotate(${(g_hrs*30)+(g_mint*60+g_sec)*0.008}deg)`;
// console.log(((g_hrs*60*60)+g_mint*60)*0.008);
// console.log((g_hrs*30)+(g_mint*60+g_sec)*0.008);
// console.log(time.getHours());


}, 1000);
