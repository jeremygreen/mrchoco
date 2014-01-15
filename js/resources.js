game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	{name: "tileset", type:"image", src: "data/img/map/tileset.png"},
	{name: "metatiles32x32", type:"image", src: "data/img/map/metatiles32x32.png"},
	{name: "mrchoco", type:"image", src: "data/img/sprite/mrchoco.png"},
	{name: "candycoat", type:"image", src: "data/img/sprite/candycoat.png"},
	{name: "nut", type:"image", src: "data/img/sprite/nut.png"},
	{name: "rasin", type:"image", src: "data/img/sprite/rasin.png"},
	{name: "teeth", type:"image", src: "data/img/sprite/teeth.png"},
	{name: "flame", type:"image", src: "data/img/sprite/flame.png"},
	{name: "milk", type:"image", src: "data/img/sprite/milk.png"},
	{name: "wrapper", type:"image", src: "data/img/sprite/wrapper.png"},
	
    {name: "area01_bkg0", type:"image", src: "data/img/area01_bkg0.png"},
    {name: "area01_bkg1", type:"image", src: "data/img/area01_bkg1.png"},

	{name: "32x32_font", type:"image", src: "data/img/font/32x32_font.png"},
	{name: "boxy_bold_font", type:"image", src: "data/img/font/boxy_bold_font.png"},
	
	// title screen
    {name: "title_screen", type:"image", src: "data/img/gui/title_screen.png"},
	
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
     {name: "level0", type: "tmx", src: "data/map/level0.tmx"},
     {name: "level1", type: "tmx", src: "data/map/level1.tmx"},
     {name: "level2", type: "tmx", src: "data/map/level2.tmx"},
     {name: "level3", type: "tmx", src: "data/map/level3.tmx"},
     {name: "level4", type: "tmx", src: "data/map/level4.tmx"},
     {name: "level5", type: "tmx", src: "data/map/level5.tmx"},
     {name: "level6", type: "tmx", src: "data/map/level6.tmx"},


	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	{name: "dst-inertexponent", type: "audio", src: "data/bgm/", channel : 1},
	{name: "asc", type: "audio", src: "data/bgm/", channel: 1},

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
	{name: "cling", type: "audio", src: "data/sfx/", channel : 2},
    {name: "stomp", type: "audio", src: "data/sfx/", channel : 1},
    {name: "jump",  type: "audio", src: "data/sfx/", channel : 1},
    {name: "bonus", type: "audio", src: "data/sfx/", channel : 1},
    {name: "lifelost", type: "audio", src: "data/sfx/", channel : 1},

];
