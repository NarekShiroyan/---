//Скрипт калькулятора
function Laminat(obj){
	var a = obj.metr.value;
	var b = obj.upakovk.value;
	var c = Math.ceil(a/b);
	var stoimost = obj.price.value;
	var allcena = Math.ceil(a/b)*b*stoimost;
	obj.result.value=c;
	obj.allprice.value=allcena^0;

	
}