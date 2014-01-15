/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};

game.HUD.Container = me.ObjectContainer.extend({

	init: function() {
		// call the constructor
		this.parent();
		
		// persistent across level change
		this.isPersistent = true;
		
		// non collidable
		this.collidable = false;
		
		// make sure our object is always draw first
		this.z = Infinity;

		// give a name
		this.name = "HUD";
		
		// add our child objects 
		this.addChild(new game.HUD.ScoreItem(630, 440));
		this.addChild(new game.HUD.LevelItem(10,10));
		this.addChild(new game.HUD.LivesItem(10,50));
		this.addChild(new game.HUD.GameOverItem(150,100));
	},
});


/** 
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({	
	/** 
	 * constructor
	 */
	init: function(x, y) {
		
		// call the parent constructor 
		// (size does not matter here)
		this.parent(new me.Vector2d(x, y), 10, 10); 
		
		// create a font
		this.font = new me.BitmapFont("32x32_font", 32, 0.8);
		this.font.set("left");
		
		// local copy of the global score
		this.score = -1;

		// make sure we use screen coordinates
		this.floating = true;
	},

	/**
	 * update function
	 */
	update : function () {
		// we don't do anything fancy here, so just
		// return true if the score has been updated
		if (this.score !== game.data.score) {	
			this.score = game.data.score;
			return true;
		}
		return false;
	},

	/**
	 * draw the score
	 */
	draw : function (context) {
		if(game.data.lives > 0){
			this.font.draw(context, "SCORE:", 340, 10);
			this.font.draw (context, game.data.score, 530, 10);
		}
	}

});

/** 
 * a basic HUD item to display level
 */
game.HUD.LevelItem = me.Renderable.extend({	
	/** 
	 * constructor
	 */
	init: function(x, y) {
		
		// call the parent constructor 
		// (size does not matter here)
		this.parent(new me.Vector2d(x, y), 10, 10); 
		
		// create a font
		this.font = new me.BitmapFont("32x32_font", 32, 0.8);
		this.font.set("left");
		
		// local copy of the global level
		this.level = -1;

		// make sure we use screen coordinates
		this.floating = true;
	},

	/**
	 * update function
	 */
	update : function () {
		// we don't do anything fancy here, so just
		// return true if the score has been updated
		if (this.level !== me.levelDirector.getCurrentLevelId()) {	
			this.level = me.levelDirector.getCurrentLevelId();
			return true;
		}
		return false;
	},

	/**
	 * draw the score
	 */
	draw : function (context) {
		if(game.data.lives > 0){
			this.font.draw(context, "LEVEL:", 10, 10);
			this.font.draw (context, this.level, 50, 10);
		}
	}
});

/** 
 * a basic HUD item to display lives
 */
game.HUD.LivesItem = me.Renderable.extend({	
	/** 
	 * constructor
	 */
	init: function(x, y) {
		
		// call the parent constructor 
		// (size does not matter here)
		this.parent(new me.Vector2d(x, y), 10, 10); 
		
		// create a font
		this.font = new me.BitmapFont("32x32_font", 32, 0.8);
		this.font.set("left");
		
		// local copy of the global level
		this.lives = -1;

		// make sure we use screen coordinates
		this.floating = true;
	},

	/**
	 * update function
	 */
	update : function () {
		// we don't do anything fancy here, so just
		// return true if the score has been updated
		if (this.lives !== game.data.lives) {	
			this.lives = game.data.lives;
			return true;
		}
		return false;
	},

	/**
	 * draw the score
	 */
	draw : function (context) {
		if(game.data.lives > 0){
			this.font.draw(context, "LIVES:", 10, 50);
			this.font.draw (context, this.lives, 210, 50);
		}
	}
});

/** 
 * a basic HUD item to display lives
 */
game.HUD.GameOverItem = me.Renderable.extend({	
	/** 
	 * constructor
	 */
	init: function(x, y) {
		
		// call the parent constructor 
		// (size does not matter here)
		this.parent(new me.Vector2d(x, y), 10, 10); 
		
		// create a font
		this.font = new me.BitmapFont("32x32_font", 32, 0.8);
		this.font.set("left");
		
		// make sure we use screen coordinates
		this.floating = true;
	},

	/**
	 * draw the score
	 */
	draw : function (context) {
		// draw it baby !
		if(game.data.lives == 0){
			this.font.draw(context, "GAME OVER", 170, 200);
		}
	}
});



