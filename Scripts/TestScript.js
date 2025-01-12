var x = 10;
document.write("JavaScript document.write" + x + '\n');

x= "중간에 문자열로 바꿔버리기";
document.write("JavaScript document.write" + x + '\n');

x= 100;
document.write("JavaScript document.write" + x + '\n');
  
x = false;

ss = document.getElementById("violet");
ss.style.color = "red";

var testElement = document.getElementById("violet");
testElement.style.color = "red";

new Date().getHours();

var testFunc = function()
{
    alert("test Func");
}
testFunc();

//var str = "<script src=" + "\"Scripts/TestScript.js\"" + "></script>";
//document.write(str);  

var exp = /^[0-9]+$/; //RegExp 객체 생성
if(!exp.test(testElement.value))
{
    alert("오류!");
    return false;
}
