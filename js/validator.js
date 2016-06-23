	var userEmail;
	var userAuth;
	var userZip;
	
	var emailValid  = false;
	var authValid 	= false;
	var zipValid 	= false;

	/*
		This function will validate that the data is in the
		correct format
	*/
	function validate( typeOfData, userData ){
		console.log( "validate() invoked...");
		var valid = false;

		userData = sanitize( userData );

		switch( typeOfData ){
			case "email":
				//RUN EMAIL VALIDATION SCRIPT HERE
				console.log( "validating and email ")
				console.log( userData );

				console.log( userData.indexOf('@') );
				if(  userData.indexOf('@') != -1 && userData.indexOf('.') != -1 &&  userData.indexOf('@') < userData.indexOf('.') && userData.length >= 9 ){
					valid = true;
				}

				break;
			case "auth":
				//RUN PASSWORD VALIDATION  
				break;
			case "zip":
				//RUN ZIP CODE 
				break;

		}

		return valid;

	}

	/*
		This function will remove malicious characters from 
		the input
	*/
	function sanitize( userData ){
		console.log( "BEFORE" )
		console.log( userData )

		userData = userData.replace( "<", "&lt;" );
		userData = userData.replace( ">", "" );
		userData = userData.replace( "script", "");
		userData = userData.replace( "</script", "");
		userData = userData.replace( "<?php", "" );
		userData = userData.replace( "DELETE", "");
		
		console.log( "BEFORE" )
		console.log( userData )

		return userData;

	}


$(document).ready( function(){

	$("#formBtn").click( function(){
		
		userEmail	= $("#email").val();
		userAuth  	= $("#auth").val();
		userZip 	= $("#zip").val();

		if( userEmail == "" ){
			$("#email").css("border", "solid 1px red");
			$(".emailErr").html("This field is required!!!! -_- ");
		}else{
			//Validate
			if( validate( "email", userEmail ) ){
				console.log( "email is valid ")
			}else{
				console.log( "email is invalid ")
			}
		}

		if( userAuth == "" ){
			$("#auth").css("border", "solid 1px red");
		}else{
			//validate
		}

		if( userZip == "" ){
			$("#zip").css("border", "solid 1px red");
		}else{
			//validate
		}

	});

} );