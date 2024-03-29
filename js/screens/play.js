game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function(level) {
		
		// load starting level
		me.levelDirector.loadLevel("level0");
		var state = me.state.USER + 0;
		
		// reset the score
		game.data.score = 0;

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
		
		// Play track
		//me.audio.playTrack("DST-InertExponent");
		//me.audio.playTrack("asc");
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
		
        // stop the current audio track
        me.audio.stopTrack();
	}
});
