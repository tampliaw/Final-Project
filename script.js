let canvas = document.getElementById("game")
canvas.width  = window.innerWidth; 
canvas.height = window.innerHeight; 
let ctx = document.getElementById("game").getContext("2d");

let mapWidth = 0
let mapHeight = 0
let tileSize = 50

let level = 0
let map = false
let player = false


let mapData = [
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0],
		[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0]
	],
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,3,3,0,3,3,0,0,0,0,0,0,0,3,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,3,3,0,0,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,0],
		[0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1]
	],
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,4,4,4,4,4,2,2,2,2,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,2,0,5,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,3,3,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,0,0,0,0,0,0,4,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0]
	],
	[
		[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
		[0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,4],
		[0,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,4],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,4],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
		[0,0,0,6,6,6,6,6,4,4,4,4,4,6,6,6,0,0,0,4,0,0,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],
		[6,6,6,6,6,6,6,6,4,4,4,4,4,4,6,6,6,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6,4,4,4,4,4,4,6,6,6,6,6,6,6,6],
		[6,6,6,6,6,6,6,6,6,4,4,4,4,6,6,6,6,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,4,4,4,4,6,6,6,6,6,6,6,6,6]
	],
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,0,0,0],
		[0,7,7,7,7,7,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0]
	]
]

function generateMap(n) {
	let data = mapData[n]
	let genMap = []

	for(let y = 0; y < data.length; y++) {
		genMap.push([])
		for(let x = 0; x < data[y].length; x++) {
			
			genMap[y].push(new Block(data[y][x]))
		}
	}
	return genMap
}

let keysDown = []
let mouseDown = false;
let mousePos = [-1, -1]


var viewport = {
    screen : [0, 0],
    startTile: [0, 0],
    endTile: [0, 0],
    offset: [0, 0],
    update: function(px, py) {

      this.screen = [
        document.getElementById("game").width,
        document.getElementById("game").height
      ]

      if(mapWidth*tileSize < this.screen[0]) {
        this.offset[0] = 0

      } else {
        this.offset[0] = Math.min(Math.floor((this.screen[0]/2)-px),0);
        if(this.offset[0] < this.screen[0]-mapWidth*tileSize && this.offset[0] < 0) {
          this.offset[0] = this.screen[0]-mapWidth*tileSize
        }
      }
      if(mapHeight*tileSize < this.screen[1]) {
        this.offset[1] = 0

      } else {
        this.offset[1] = Math.min(Math.floor((this.screen[1]/2)-py),0);
        if(this.offset[1] < this.screen[1]-mapHeight*tileSize && this.offset[1] < 0) {
          this.offset[1] = this.screen[1]-mapHeight*tileSize
        }
      }

      px = Math.floor(this.screen[0]/2-this.offset[0])
      py = Math.floor(this.screen[1]/2-this.offset[1])
	  
      var tile = [
        Math.floor((px)/tileSize),
        Math.floor((py)/tileSize)
      ];

      this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2)/tileSize);
      this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2)/tileSize);

      if(this.startTile[0]<0) this.startTile[0] = 0;
      if(this.startTile[1]<0) this.startTile[1] = 0;

      this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2)/tileSize);
      this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2)/tileSize);

      if(this.endTile[0]>=mapWidth) this.endTile[0] = mapWidth-1;
      if(this.endTile[1]>=mapHeight) this.endTile[1] = mapHeight-1;
    }
  }

window.addEventListener('load', function(e) {
	
	// Create player
	player = new Player([1,1])

	// Create the game
	startLevel(0)

	// Start the game
	requestAnimationFrame(update)
})


window.addEventListener('keydown', function(e) {
	
	keysDown[e.keyCode] = true
})

window.addEventListener('keyup', function(e) {
	
	keysDown[e.keyCode] = false
})

window.addEventListener('mousemove', function(e) {
	
	var rect = canvas.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    mousePos = [x, y] // Save the mouse position
})

window.addEventListener('mousedown', function(e) {
	
	mouseDown = true;
})
window.addEventListener('mouseup', function(e) {

	mouseDown = false;
})


var blockTypes = {
	0: {
		name: "Air",
		img: false,
		kill: false,
		collision: false,
		win: false
	},
	1: {
		name: "Dirt",
		img: "images/dirt.png",
		kill: false,
		collision: true,
		win: false
	},
	2: {
		name: "Cobblestone",
		img: "images/stone.png",
		kill: false,
		collision: true,
		win: false
	},
	3: {
		name: "Wood Planks",
		img: "images/planks.png",
		kill: false,
		collision: true,
		win: false
	},
	4: {
		name: "Lava",
		img: "images/lava.png",
		kill: true,
		collision: false,
		win: false
	},
	5: {
		name: "Diamond",
		img: "images/diamond.png",
		kill: false,
		collision: false,
		win: true
	},
	6: {
		name: "Netherrack",
		img: "images/netherrack.png",
		kill: false,
		collision: true,
		win: false
	},
	7: {
		name: "Obsidian",
		img: "images/obsidian.png",
		kill: false,
		collision: true,
		win: false
	},
	8: {
		name: "End Stone",
		img: "images/endstone.png",
		kill: false,
		collision: true,
		win: false
	},
}

class Block {
	constructor(type) {
		// Create a block
		this.type = type
		this.collision = blockTypes[type].collision
		this.kill = blockTypes[type].kill
		this.win = blockTypes[type].win

		// Set image
		if(blockTypes[type].img) {
			this.img = new Image()
			this.img.src = blockTypes[type].img
		} else this.img = false
		
	}
}

class Player {
	constructor(startPos) {
		// Create the player
		this.color = "#00ffff"

		this.x = startPos[0] // x position
		this.y = startPos[1] // y position

		this.h = 2 // height
		this.w = 1 // width

		this.vx = 0 // x speed
		this.vy = 0 // y speed
		this.img = new Image()
		this.img.src = "images/steve.png"

		this.floor = false
	}

	update() {
		
		

		if(keysDown[32]) {
			if(this.floor) {
				this.floor = false
				this.vy = -0.15
			}
			
		}

		this.vy += 0.005
		if(this.vy > 0.01) this.floor = false

		if(keysDown[65]) { 
      this.vx -= 0.005
      if(this.vx < -0.1) this.vx = -0.1
    }
		else if(keysDown[68]) {
      this.vx += 0.005
      if(this.vx > 0.1) this.vx = 0.1
    }
		else { 
      if(this.vx > 0) {
        this.vx -= 0.005
        if(this.vx < 0) this.vx = 0
      } else if(this.vx < 0) {
        this.vx += 0.005
        if(this.vx > 0) this.vx = 0
      }
    }
		
    let death = false;
    let win = false;
    
    let xCollision = false
    let yCollision = false
    
		if(this.y > mapHeight+2) return this.die()

		// X movement
		let nx = this.x + this.vx 

		let collision = false; 
		// Collisions
		for(let x=Math.floor(nx); x<Math.floor(nx)+this.w+1; x++) {
			for(let y=Math.floor(this.y); y<Math.floor(this.y)+this.h+1; y++) {
				
				if(x < 0 || x >= mapWidth) {
					collision = true;
					break;
				}
				if(y >= 0 && y < mapHeight) {
					
					let checkBlock = map[Math.floor(y)][Math.floor(x)]
					if(checkBlock.kill) {
            death = true;
            break;
          }
					if(checkBlock.win) {
            win = true;
            break;
          }
					if(checkBlock.collision) {
						collision = true;
						break;
					}
				}
			}
		}
	
		if(!collision) { 
			this.x = nx 
			
			if(death) return this.die()
			
			if(win) return this.levelup()
		} else xCollision = true

		// Y movement
		let ny = this.y + this.vy 

		collision = false; 

		

		// Collisions
		for(let x=Math.floor(this.x); x<Math.floor(this.x)+this.w+1; x++) {
			for(let y=Math.floor(ny); y<Math.floor(ny)+this.h+1; y++) {
				
				if(y >= 0 && y < mapHeight) {
					
					let checkBlock = map[Math.floor(y)][Math.floor(x)]
					if(checkBlock.kill) {
						death = true;
            break;
					}
					if(checkBlock.win) {
						win = true;
            break;
					}
					if(checkBlock.collision) {
						collision = true;
						if(this.vy > 0) this.floor = true;
						this.vy = 0;
						break;
					}
				}

			}
		}
		
		if(!collision) {
			this.y = ny
			
			if(death) return this.die()
			
			if(win) return this.levelup()
		} else yCollision = true
    
		// Update camera
		viewport.update(this.x*tileSize, this.y*tileSize)

		// Render screen
		this.drawMap()
		this.draw()
	}

	draw() {
		ctx.drawImage(this.img, viewport.offset[0]+this.x*tileSize, viewport.offset[1]+this.y*tileSize, this.w*tileSize, this.h*tileSize)
	}

	drawMap() {
		for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; y++) {
			for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; x++) {
				if(map[y][x].img) {
					ctx.drawImage(map[y][x].img, viewport.offset[0]+(x*tileSize), viewport.offset[1]+(y*tileSize), tileSize, tileSize)
				}
				
			}
		}
	}
	die() {
		window.alert("You died. Press OK to try again.")
		keysDown = {}
		startLevel(level)
	}
	levelup() {
		window.alert("You won. Press OK to continue to the next level.")
		keysDown = {}
		if(level < mapData.length-1) level++
		startLevel(level)
	}
	
}

function startLevel(n) {
	map = generateMap(n)
	mapWidth = map[n].length
	mapHeight = map.length
	tileSize = window.innerHeight/mapHeight

	// Update player data
	player = new Player([1,1])
}

function update() {
	// Clear the canvas
	ctx.clearRect(0,0,canvas.width,canvas.height)

	// Update the player
	player.update()
	requestAnimationFrame(update)
}