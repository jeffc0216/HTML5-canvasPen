function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext("2d"); //沒寫var表示全域變數

	document.addEventListener('mousemove', usePen, false);

	
}

function usePen(evt){
	canvas.fillRect(evt.pageX,evt.pageY,10,10);
}
window.addEventListener('load', doFirst, false);