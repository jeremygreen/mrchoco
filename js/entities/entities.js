/*------------------- 
a player entity
-------------------------------- */
game.PlayerEntity = me.ObjectEntity.extend({
  
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
 
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(4, 15);

	    // adjust the bounding box
	    this.updateColRect(0, 32, -1, 0);
 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
 
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.jumping && !this.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.vel.y = -this.maxVel.y * me.timer.tick;
                // set the jumping flag
                this.jumping = true;
               // play some audio 
			   me.audio.play("jump");
            }
        }
				
        this.updateMovement();
			
		var res = me.game.collide(this);

		if(game.data.state == 1){
			this.renderable.setAnimationFrame(1);			
		}
		if(game.data.state == 2){
			this.renderable.setAnimationFrame(2);
		}	
		if(game.data.state == 3){
			this.renderable.setAnimationFrame(0);
			game.data.state = 0;
		}
		if(game.data.state == 4){
			me.levelDirector.loadLevel(me.levelDirector.getCurrentLevelId());
			me.game.viewport.fadeOut("#000000", 500);
			game.data.state = 0;
		}
 
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }
 
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
    },
});

game.CandyCoatEntity = me.ObjectEntity.extend({
	
	init: function (x, y, settings)
	{
		this.parent(x, y , settings);
	},
	
	onCollision: function()
	{
		if(game.data.state != 2) {
			this.collidable = false;
			game.data.state = 1;
        	// remove it
        	me.game.remove(this);
        }
	}
});


game.TeethEntity = me.ObjectEntity.extend({
	
	init: function (x, y, settings)
	{
        settings.image = "teeth";
        settings.spritewidth = 32;
 
        // call the parent constructor
        this.parent(x, y, settings);
 
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite
 
        // make him start from the left
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkRight = true;
 
        // walking & jumping speed
        this.setVelocity(0.5, 0);
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = me.game.ENEMY_OBJECT;
	},
	
	onCollision: function(res, obj) {
		if(game.data.lives > 0){
			game.data.lives = game.data.lives -1;
			this.collidable = false;
			game.data.state = 4;
			me.audio.play("lifelost");
			me.game.remove(this);	
		}else{
		    me.state.change(me.state.GAMEOVER);
		}
    },

    // manage the enemy movement
    update: function() {
        // do nothing if not in viewport
        if (!this.inViewport)
            return false;
 
        if (this.alive) {
            if (this.walkRight && this.pos.x <= this.startX) {
                this.walkRight = false;
            } else if (!this.walkRight && this.pos.x >= this.endX) {
                this.walkRight = true;
            }
            // make it walk
            this.flipX(this.walk);
            this.vel.x += (this.walkRight) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
                 
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }
        return false;
    }
});

game.NutEntity = me.CollectableEntity.extend({
	
	init: function (x, y, settings)
	{
		this.parent(x, y, settings);
	},
	
	onCollision: function()
	{
		game.data.score += 5;
	    me.audio.play("bonus");
		this.collidable = false;
		me.game.remove(this);
	},
	
});

game.RasinEntity = me.CollectableEntity.extend({
	
	init: function (x, y, settings)
	{ 
        // call the parent constructor
        this.parent(x, y, settings);
	},
	
	onCollision: function()
	{
		game.data.score += 10;
	    me.audio.play("bonus");
		this.collidable = false;
		me.game.remove(this);
	},		
});

game.WrapperEntity = me.ObjectEntity.extend({
	
	init: function (x, y, settings)
	{ 
        // call the parent constructor
        this.parent(x, y, settings);
	},
	
	onCollision: function()
	{
		if(game.data.state != 1){
			game.data.score = 0;
			this.collidable = false;
			me.game.remove(this);			
		}
	},	
});

game.FlameEntity = me.ObjectEntity.extend({
	
	init: function (x, y, settings)
	{ 
        // call the parent constructor
        this.parent(x, y, settings);
		this.updateColRect(10, 16, -1, 20)
	},
	
	onCollision: function()
	{
		if(game.data.lives > 0){
			game.data.lives = game.data.lives -1;
			this.collidable = false;
			game.data.state = 4;
			me.audio.play("lifelost");
			me.game.remove(this);			
		}else{
			me.state.change(me.state.GAMEOVER);
		}
	},
});

game.MilkEntity = me.ObjectEntity.extend({
	
	init: function (x, y, settings)
	{ 
        // call the parent constructor
        this.parent(x, y, settings);

		this.updateColRect(10, 16, -1, 20)

	},
	
	onCollision: function()
	{
		if(game.data.state == 2){
			game.data.state = 3;
			this.collidable = false;
			me.game.remove(this);			
		}
	},
});
	
	