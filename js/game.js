
/* Game namespace */
var game = {
	
	// an object where to store game information
	data : {
		// score
		score : 0,
		// current state of player
		state : 0, //normal
		// current number of lives
		lives : 0,
	},
	
	// Run on page load.
	"onload" : function () {
	// Initialize the video.
	if (!me.video.init("screen", 640, 480, true, 'auto')) {
		alert("Your browser does not support HTML5 canvas.");
		return;
	}

	// add "#debug" to the URL to enable the debug Panel
	if (document.location.hash === "#debug") {
		window.onReady(function () {
			me.plugin.register.defer(debugPanel, "debug");
		});
	}

	// Initialize the audio.
	me.audio.init("mp3,ogg");

	// Set a callback to run when loading is complete.
	me.loader.onload = this.loaded.bind(this);

	// Load the resources.
	me.loader.preload(game.resources);

	// Initialize melonJS and display a loading screen.
	me.state.change(me.state.LOADING);
	
	me.debug.renderHitBox = true;
	
	game.data.score = 0;
	
	game.data.state = 0;
	
	game.data.level = 0;
	
	game.data.lives = 3;
},

	// Run on game resources loaded.
	"loaded" : function () {
		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.PLAY, new game.PlayScreen());
		
		me.entityPool.add("levelchange", game.LevelChangeEntity);
		
	    // add our player entity in the entity pool
	    me.entityPool.add("mrchoco", game.PlayerEntity);
	    me.entityPool.add("candycoat", game.CandyCoatEntity);
	    me.entityPool.add("nut", game.NutEntity);
	    me.entityPool.add("teeth", game.TeethEntity);
	    me.entityPool.add("flame", game.FlameEntity);
	    me.entityPool.add("wrapper", game.WrapperEntity);
	    me.entityPool.add("milk", game.MilkEntity);
	    me.entityPool.add("rasin", game.RasinEntity);
	 
	    // enable the keyboard
	    me.input.bindKey(me.input.KEY.LEFT,  "left");
	    me.input.bindKey(me.input.KEY.RIGHT, "right");
	    me.input.bindKey(me.input.KEY.UP, "jump", true);		

		// Start the game.
		me.state.change(me.state.MENU);
	}
};
