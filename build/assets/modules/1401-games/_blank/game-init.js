/* game-init.js */
define ([ 
	'1401/master',
	'1401/js-extend/oop',		// returns empty object
	'1401/js-extend/format',	// returns empty object
], function (
	MASTER,
	js_oop,
	js_format
) {


///////////////////////////////////////////////////////////////////////////////
/**	GAME-INIT ****************************************************************\

	This is a Durandal ViewModel that does the absolute minimum to start the
	game engine. It returns properties (e.g. displayName) that are linked
	to the corresponding View 'game-init.html' using KnockoutJS data binding.

	We launch the game via the MASTER.Start(), passing itself (the ViewModel)
	so it's available to the game modules if they need to update the HTML
	portions of the screen.


///////////////////////////////////////////////////////////////////////////////
/** PUBLIC API **************************************************************/

	var MOD = {};

	MOD.displayName = 'Blank Template';
	MOD.description = 'Put Your Description in game-init.js';

	MOD.compositionComplete = function () {
		MASTER.Start( this );
	};


///////////////////////////////////////////////////////////////////////////////
/** RETURN MODULE DEFINITION FOR REQUIREJS ***********************************/
	return MOD;

});

