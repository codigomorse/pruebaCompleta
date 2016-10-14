// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
function obterDatos(cantidad) {
	var url = "http://api.randomuser.me/?results=" + cantidad;
	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			//Ti.API.info(this.responseText);
			crearUsuarios(JSON.parse(this.responseText).results);
		},
		onerror : function(e) {
			Ti.API.info(e.error);
		},
		timeout : 5000 /* in milliseconds */
	});
	xhr.open("GET", url);
	xhr.send();
}
 
function crearUsuarios(usuarios) {
	//Ti.API.info(usuarios);
	
	var items = [];
	usuarios.forEach(function(usuarios) {
		items.push({
			nombre: {text: usuarios.name.first },
			avatar: {image: usuarios.picture.thumbnail },
		});
	});
	$.elementsList.sections[0].setItems(items);
	//Ti.API.info(items);
}
 
obterDatos(20);

$.btnCerrarVentana.addEventListener('click', function(_evento){
 	var index=new Alloy.createController	('index');
	index = index.getView();
	index.open();
 	$.usuarios.close();
});



