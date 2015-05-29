var CAL;

$( document ).ready( function() {

CAL = ( function () {

	var _init = function() {

		console.log( "Cal init." );
	};

	return {
		init: _init
	};

}() );

CAL.init();

} );
