window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);
function loadURL(url){
	console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    loadURL click : ' + url);
	window.open(url, '_system', 'location=yes');
	return false;
}

var myScroll, wrapper, $sectionTitle, $btnLocation, activeLi = 1;

body = document.getElementById("body"),
wrapper = document.getElementById("wrapper");
$sectionTitle = $('h1.sectionTitle');
$btnLocation = $('a#location');

var xhReq = new XMLHttpRequest();
var heightBody = window.innerHeight-50;

var app = {

	initialize: function() {

		//Creation of the css class
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.cssClass { position:absolute; z-index:2; left:0; top:50px; width:100%; height: '+heightBody+'px; overflow:auto;}';
		document.getElementsByTagName('head')[0].appendChild(style);

		//Add the css class
		body.className = 'page center';
		wrapper.className = 'cssClass';

		//Add default active class to the menu
		$( "ul.ulMenu li:nth-child(1)" ).addClass( "active" );

		//Load default option
		xhReq.open("GET", "options/option1.html", false);
		xhReq.send(null);
		document.getElementById("sectionContent").innerHTML=xhReq.responseText;

		
		//Creation of the scroll using iScroll plugin
		//myScroll = new iScroll('wrapper', { hideScrollbar: true });
		//myScroll.disable();
		//Add default header title
		$sectionTitle.text('فهرست مطالب');
		localStorage.setItem("code","ubuca");
		$('#wrapper *').on('dragstart', function(event) { event.preventDefault();});
	}

};

function menu(option){

	//Remove previous active class
	$( "ul.ulMenu li:nth-child("+activeLi+")" ).removeClass( "active" );

	//Add active class to the current option
	var oprion_temp = parseInt(option, 10)+1;
	$( "ul.ulMenu li:nth-child("+ oprion_temp +")" ).addClass( "active" );

	//Save active option
	activeLi = oprion_temp;

	//Read by ajax the page
	xhReq.open("GET", "options/option"+option+".html", false);
	xhReq.send(null);
	document.getElementById("sectionContent").innerHTML=xhReq.responseText;

	if(option == 1){
		setTitle('فهرست مطالب');
		$('#wrapper *').on('dragstart', function(event) { event.preventDefault();});
		$('.parallax_section').each(function(){
		   var $id = $(this).attr('id');
		   $('#'+$id + ".parallax_section").parallax("50%", -0.30);//0.2//-0.52
		   //$(this).click(function() {alert();});
		});
		//myScroll.enable();
	}
	else if(option == 2){
		setTitle('قسمت اول');
		//myScroll.disable();
		// myScroll = new iScroll('wrapper', { hideScrollbar: true });
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 3){
		setTitle('قسمت دوم');
		//myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );

	}
	else if(option == 4){
		setTitle('قسمت سوم');
		//myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 5){
		setTitle('قسمت چهارم');
		//myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 6){
		setTitle('قسمت پنجم');
		//myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 7){
		setTitle('قسمت ششم');
		//myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 8){
		setTitle('قسمت هفتم');
		//myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 9){
		setTitle('قسمت هشتم');
		//myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 10){
		setTitle('درباره تولید کننده');
		//myScroll.disable();
	}

	//Refresh of the iScroll plugin
	// myScroll.refresh();
	// myScroll.scrollTo(0,0);

}

function setTitle(title){
	$sectionTitle.text(title);
}

//Map
/*
var map, markers = [], openInfoWindow, bounds = new google.maps.LatLngBounds();

var mapObject = {

	init : function(){
		$('div#mapCanvas').css({'height': heightBody - (heightBody/2) + 20 + 'px'});
		var markers = [];
		var latlng = new google.maps.LatLng(43.978518, 15.383649);
		var myOptions = {
			zoom: 16,
			center: latlng,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
		this.getMarkers();
	},

	getMarkers: function(){
		mapObject.addMarker(
			'43.978518',
			'15.383649',
			'Contact',
			'<h3>Contact me</h3><br><p>I am at this heart shaped island.</p>',
			1,
			false);
		//$btnLocation.show();
	},

	addMarker: function(lat,lng,title,description,id,position){
		var myLatlng = new google.maps.LatLng(lat, lng);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP,
			title: title
		});

		marker.infowindow = new google.maps.InfoWindow({
			content: description
		});

		marker.id = id;

		google.maps.event.addListener(marker, 'click', function() {

			if(marker.title != '')
			{
				if(typeof openInfoWindow != 'undefined'){
					openInfoWindow.infowindow.close();
				}

				openInfoWindow = marker;
				marker.infowindow.open(map, marker);    	
			}		
		});

		markers.push(marker);
	}

};
*/
$( window ).resize(function() {
  $('#wrapper').css('height',window.innerHeight-50);
});
