// back to homepage function if click the fixed header title
$('header h1').on('click', function(event){
	$.mobile.changePage('#home', {
		transition: "pop",
		reverse: false, 
		changeHash: true //removes query strings and hash tags from address
	});
});

//Split url into variable function
var splitURL = function (){
	var urlData = document.URL;
	console.log("url is " + urlData);
	var	urlParts = urlData.split('?');
	var urlVals = urlParts[1].split('&');	
	var idVals = {};
	for (var i in urlVals){
		var keyValue = urlVals[i].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		idVals[key] = value;
	}
	console.log(idVals[key]);
	return(idVals[key]);
};

//store the fish's data
function storeFishData() {
	console.log('Storing the fishy');
    if ( $('#key').val() == "" ) { var id = "fish_" + $('#commonName').val(); }
    else { var id = $('#key').val(); };
	var fish				= {} //create empty object
		fish._id			= id;
		fish.commonName		= ['Common Name:', $('#commonName').val()];
	console.log('Fish = ' + fish);
	
	console.log('Saving: ' + fish);
	$.couch.db('laquaria').saveDoc(fish, {
		success: function(data) {
			console.log('Saved: ' + data);
		}
	});
};


// Page Handlers

$('#home').live('pageshow',function(){
	// Let's make sure everything is working, eh? 
	console.log('Homepage Live: OK!');
});

$('#addAFish').live('pageshow', function() {
	console.log('Add/Edit Page OK!!');
	//form handler
	$('#addNewFishForm').validate({
		errorContainer: '#errors',
		errorLabelContainer: '#errors ui',
		wrapper: "li", debug: true,
		submitHandler: function(form) {
			var data = $('#addNewFishForm').serializeArray();
			storeFishData();
		}
	});

	function smartSubmit () {	
		var requiredFields = $('input.required');
		if ($("input.required:not(:valid)").length){
			console.log('form is not valid, disable button here');
			$('#addNewFishForm #submit').attr('disabled',true);
		} else {
			console.log('form is  valid ');
			$('#addNewFishForm #submit').attr('disabled',false);
		}
	}
});

$('#browseFishies').live('pageshow', function() {
	console.log('Browse Page OK!!');
});

// rawr: 		timentudgingirediedillev
// cloudant: 	StsgfQ35OK7gV6jVRboN7Dmy
