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

	$("#slides").slidesjs({
    	width: 940,
    	height: 528,
		navigation: {
			active: false
		},
		pagination: {
			active: false
		},
		play: { auto: true}
    });
	
	//Creation of the scroll using iScroll plugin
	//myScroll = new iScroll('wrapper', { hideScrollbar: true });
	//myScroll.disable();
	//Add default header title
	$sectionTitle.text('خانه');
	localStorage.setItem("code","ubuca");

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
		setTitle('خانه');
		$btnLocation.hide();
		$("#slides").slidesjs({
	    	width: 940,
	    	height: 528,
			navigation: {
				active: false
			},
			pagination: {
				active: false
			},
			play: { auto: true}
    	});
		myScroll.enable();
	}
	else if(option == 2){
		$btnLocation.hide();
		setTitle('آخرین اخبار');
		myScroll.enable();
	}
	else if(option == 3){
		$btnLocation.hide();
		setTitle('قیمت سهام');
		myScroll.enable();

	}
	else if(option == 4){
		setTitle('گالری تصاویر');
		myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 5){
		setTitle('تماس با مـــــا');
		myScroll.disable();
		//mapObject.init();
	}

	//Refresh of the iScroll plugin
	myScroll.refresh();
	myScroll.scrollTo(0,0);

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
