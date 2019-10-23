var player;
var canvas;
var context;
function startGame(id){
	loadCanvas(id);
	component(10,10,"red",100,100,id)
}

function loadCanvas(id) {
        /*creates the variable canvas, which is a html thingy for game dev and other stuff*/
        canvas =  document.createElement('canvas');      
        context = canvas.getContext("2d");
        /*it gets the id element*/
        div = document.getElementById(id);
        /*the canvas element now has an id called CursorLayer*/
        canvas.id     = "CursorLayer";
        /*adding some width and height to it*/
        canvas.width  = 250;
        canvas.height = 250;
        /*bordering stuff*/
        canvas.style.border   = "1px solid";
        /*making sure that the order of apearence for the element is always first*/
        canvas.style.order = 1;
        div.appendChild(canvas);
        component(10,10,"red",100,100);
    }

function component(width,height,color,x,y,id){
    div = document.getElementById(id);
	player.widht = width;
	player.height = height;
	player.x = x;
	player.y = y;
	ctx = canvas.context;
	ctx.fillStyle = color;
	ctx.fillRect(player.x,player.y,player.width,player.height);
}