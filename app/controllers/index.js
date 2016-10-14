$.imagenW.addEventListener('click', function(_evento) {
	//navegador para ver la peli
	Ti.Platform.openURL('https://www.youtube.com/watch?v=8TQ-gD4UCmI');
});
$.imagenX.addEventListener('click', function(_evento) {
	//navegador para ver la peli
	Ti.Platform.openURL('https://www.youtube.com/watch?v=pK2zYHWDZKo');
});

$.usuarios.addEventListener('click',function (e){
	var usuarios=new Alloy.createController	('usuarios');
	usuarios = usuarios.getView();
	usuarios.open();
	$.index.close();
});

$.index.open();