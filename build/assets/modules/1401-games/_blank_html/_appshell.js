/* _appshell.js */
define ([ 
	'durandal/viewLocator',
	'plugins/router',
	'1401/js-extend/oop',		// returns empty object
	'1401/js-extend/format'		// returns empty object

], function (
	viewLocator,
	router,
	js_oop,
	js_format
) {


///////////////////////////////////////////////////////////////////////////////
/**	APPSHELL *****************************************************************\

	This is a Durandal ViewModel that does the absolute minimum to start the
	game engine. It returns properties (e.g. displayName) that are linked
	to the corresponding View 'game-init.html' using KnockoutJS data binding.

	We launch the game via the MASTER.Start(), passing itself (the ViewModel)
	so it's available to the game modules if they need to update the HTML
	portions of the screen.


///////////////////////////////////////////////////////////////////////////////
/** PUBLIC API **************************************************************/

	var MOD = {};

	MOD.displayName = 'Blank HTML Template';
	MOD.description = 'Put Your Description here in _appshell.js';

	// Get the 1401-game module path by parsing the router's 
	// moduleId (defined in shell.js router navigation array)
	var moduleId = router.activeInstruction().config.moduleId;
	moduleId = moduleId.substring(0,moduleId.lastIndexOf("/"));

	// update subviews folder to load from game directory
	viewLocator.useConvention(null,null,moduleId);

	/**                                                                   **\
		This Durandal viewmodel is ordinarily used to launch 1401, 
		the game engine, but all that stuff is removed to for simpler
		experimentation without 1401 Game Engine support. 

		See 1401-games/_blank or 1401-games/demo for the activation hooks
		that launch 1401 game features.
	\**                                                                   **/

///////////////////////////////////////////////////////////////////////////////
/** RETURN MODULE DEFINITION FOR REQUIREJS ***********************************/
	return MOD;

});