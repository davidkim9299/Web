pacmanPosition = {x: 13*20, y: 17*20};

var c = document.getElementById("canvas");

const ctx= canvas.getContext("2d");

const width = 28;

//initial matrix to set up the grids//

const layout = [

  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,

  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,

  1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,

  1,3,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,3,1,

  1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,

  1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,

  1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,

  1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,

  0,0,0,0,0,0,0,3,1,1,0,0,0,1,1,0,0,0,1,1,3,0,0,0,0,0,0,0,

  1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,

  1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,

  1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,

  1,0,1,1,1,1,0,1,1,0,1,1,1,4,4,1,1,1,0,1,1,0,1,1,1,1,0,1,

  1,0,1,1,1,1,0,1,1,0,1,4,4,4,4,4,4,1,0,1,1,0,1,1,1,1,0,1,

  1,0,1,1,0,0,3,1,1,0,1,4,4,5,5,4,4,1,0,1,1,3,0,0,1,1,0,1,

  1,0,1,1,0,1,1,1,1,0,1,4,4,5,5,4,4,1,0,1,1,1,1,0,1,1,0,1,

  1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,

  1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,

  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,

  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,

  1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,

  1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,

  1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,

  0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,

  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,

  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,

  1,0,0,0,1,1,0,1,1,3,0,0,0,0,0,0,0,0,3,1,1,0,1,1,0,0,0,1,

  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,

  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,

  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,

  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,

]

//matrix to store objects on each grid//
var squares=[];

var coin = document.getElementById("coin");
var wall = document.getElementById("wall");
var pacman = document.getElementById("pac-man");
var ghost1 = document.getElementById("ghost");

for(let i=0; i<layout.length; i++)
{
  const square = document.createElement('div');

  squares.push(square);

  //convert the index of a 1d matrix to that of a 2d matrix//


  var y =  parseInt(i / 28) * 20;

  var x =  parseInt(i % 28) * 20;

  if(layout[i]==0)
  {
    squares[i].classList.add('pac-dot');
    ctx.drawImage(coin, x, y, 20, 20);

  }else if(layout[i]==1)
  {
    squares[i].classList.add('wall');
    ctx.drawImage(wall, x, y, 20, 20);

  }else if(layout[i]==2)
  {
    squares[i].classList.add('pac-man');
    ctx.drawImage(pacman, x, y, 20, 20);

  }else if(layout[i]==3)
  {
    squares[i].classList.add('super-dot');
    ctx.fillStyle = "orange";
    ctx.fillRect(x, y, 20, 20);

  }else if(layout[i]==4)
  {
    squares[i].classList.add('empty');
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, 20, 20);

  }else if(layout[i]==5)
  {
    squares[i].classList.add('ghost');
    ctx.drawImage(ghost1, x, y, 20, 20);
  }
}

document.onkeydown = function(e){
  var pos = (pacmanPosition.y/20)*28+pacmanPosition.x/20;
  switch(e.keyCode) {
    //move left
    case 37:
    if(pos === 224 || pos === 644){
        if(!squares[pos+27].classList.contains('ghost')){
          if(!squares[pos+27].classList.contains('wall')){
            if(squares[pos+27].classList.contains('pac-dot')){
                squares[pos+27].classList.remove('pac-dot');
            }
            if(squares[pos+27].classList.contains('super-dot'))
            {
              squares[pos+27].classList.remove('super-dot');
              goFreeze(ghosts);
            }
            squares[pos+27].classList.add('pac-man');
            squares[pos].classList.remove('pac-man');
            ctx.fillStyle = "black";
            ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
            pacmanPosition.x+=540;
            ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
        }
      } else {
          for(i = 0; i < ghosts.length; i++)
          {
            if(ghosts[i].currentX==pacmanPosition.x+540 && ghosts[i].currentY==pacmanPosition.y)
            {
              if(ghosts[i].isFreeze)
              {
                if(squares[pos+27].classList.contains('pac-dot')){
                    squares[pos+27].classList.remove('pac-dot');
                }
                if(squares[pos+27].classList.contains('super-dot'))
                {
                  squares[pos+27].classList.remove('super-dot');
                  goFreeze(ghosts);
                }
                squares[pos+27].classList.add('pac-man');
                squares[pos].classList.remove('pac-man');
                ctx.fillStyle = "black";
                ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
                pacmanPosition.x+=540;
                ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
                squares[pos+27].classList.remove('ghost');
                squares[(ghosts[i].startY/20)*28+ghosts[i].startX/20].classList.add('ghost');
                ghosts[i].currentX=ghosts[i].startX;
                ghosts[i].currentY=ghosts[i].startY;
                ghosts[i].isFreeze=false;
              }
              else {
                gameover();
              }
            }
          }
        }
    }
    else {
      if(!squares[pos-1].classList.contains('ghost'))
      {
         if(!squares[pos-1].classList.contains('wall')){
          //take away the pac-dot when pacman steps on that grid//
          if(squares[pos-1].classList.contains('pac-dot'))
          {
            squares[pos-1].classList.remove('pac-dot');
          }
          if(squares[pos-1].classList.contains('super-dot'))
          {
            squares[pos-1].classList.remove('super-dot');
            goFreeze(ghosts);
          }
          squares[pos-1].classList.add('pac-man');
          squares[pos].classList.remove('pac-man');
          //once the pacman leaves, the grid should be black//
          ctx.fillStyle = "black";
          ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
          pacmanPosition.x-=20;
          //draw pacman on new grid//
          ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
        }
      }else {
          for(var i=0;i<ghosts.length;i++)
          {
            if(ghosts[i].currentX==pacmanPosition.x-20 && ghosts[i].currentY==pacmanPosition.y)
            {
              if(ghosts[i].isFreeze)
              {
                if(squares[pos-1].classList.contains('pac-dot')){
                    squares[pos-1].classList.remove('pac-dot');
                }
                if(squares[pos-1].classList.contains('super-dot'))
                {
                  squares[pos-1].classList.remove('super-dot');
                  goFreeze(ghosts);
                }
                squares[pos-1].classList.add('pac-man');
                squares[pos].classList.remove('pac-man');
                ctx.fillStyle = "black";
                ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
                pacmanPosition.x-=20;
                ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
                squares[pos-1].classList.remove('ghost');
                squares[(ghosts[i].startY/20)*28+ghosts[i].startX/20].classList.add('ghost');
                ghosts[i].currentX=ghosts[i].startX;
                ghosts[i].currentY=ghosts[i].startY;
                ghosts[i].isFreeze=false;
                ghosts.forEach(ghost => moveGhost(ghost))
              }
              else {
                gameover();
              }
            }
          }
      }
    }
    break

    //move down
    case 40:
    if(!squares[pos+width].classList.contains('ghost'))
    {
      if(!squares[pos+width].classList.contains('wall')){
        if(squares[pos+width].classList.contains('pac-dot'))
        {
          squares[pos+width].classList.remove('pac-dot');
        }
        if(squares[pos+width].classList.contains('super-dot'))
        {
          squares[pos+width].classList.remove('super-dot');
          goFreeze(ghosts);
        }
        squares[pos+width].classList.add('pac-man');
        squares[pos].classList.remove('pac-man');
        ctx.fillStyle = "black";
        ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
        pacmanPosition.y+=20;
        ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
      }
    }
    else {
        for(var i=0;i<ghosts.length;i++)
        {
          if(ghosts[i].currentY==pacmanPosition.y+20 && ghosts[i].currentX==pacmanPosition.x)
          {
            if(ghosts[i].isFreeze)
            {
              if(squares[pos+width].classList.contains('pac-dot')){
                  squares[pos+width].classList.remove('pac-dot');
              }
              if(squares[pos+width].classList.contains('super-dot'))
              {
                squares[pos+width].classList.remove('super-dot');
                goFreeze(ghosts);
              }
              squares[pos+width].classList.add('pac-man');
              squares[pos].classList.remove('pac-man');
              ctx.fillStyle = "black";
              ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
              pacmanPosition.y+=20;
              ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
              squares[pos+width].classList.remove('ghost');
              squares[(ghosts[i].startY/20)*28+ghosts[i].startX/20].classList.add('ghost');
              ghosts[i].currentX=ghosts[i].startX;
              ghosts[i].currentY=ghosts[i].startY;
              ghosts[i].isFreeze=false;
          }
          else{
            gameover();
          }
          }
        }

    }
    break

    //move right
    case 39:
    if(pos === 251 || pos === 671){
        if(!squares[pos-27].classList.contains('ghost')){
          if(!squares[pos-27].classList.contains('wall')){
            if(squares[pos-27].classList.contains('pac-dot')){
                squares[pos-27].classList.remove('pac-dot');
            }
            if(squares[pos-27].classList.contains('super-pac')){
                squares[pos-27].classList.remove('super-pac');
                goFreeze(ghosts);
            }
            squares[pos-27].classList.add('pac-man');
            squares[pos].classList.remove('pac-man');
            ctx.fillStyle = "black";
            ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
            pacmanPosition.x-=540;
            ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
        }
      }
      else {
          for(var i=0;i<ghosts.length;i++)
          {
            if(ghost[i].currentX==pacmanPosition.x-540 && ghost[i].currentY==pacmanPosition.y)
            {
              if(ghost[i].isFreeze)
              {
                if(squares[pos-27].classList.contains('pac-dot')){
                    squares[pos-27].classList.remove('pac-dot');
                }
                if(squares[pos-27].classList.contains('super-dot'))
                {
                  squares[pos-27].classList.remove('super-dot');
                  goFreeze(ghosts);
                }
                squares[pos-27].classList.add('pac-man');
                squares[pos].classList.remove('pac-man');
                ctx.fillStyle = "black";
                ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
                pacmanPosition.x-=540;
                ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
                squares[pos-27].classList.remove('ghost');
                squares[(ghost[i].startY/20)*28+ghost[i].startX/20].classList.add('ghost');
                ghost[i].currentX=ghost[i].startX;
                ghost[i].currentY=ghost[i].startY;
                ghost[i].isFreeze=false;
              }
              else {
                gameover();
              }
            }
          }
        }
      }
    else {
      if(!squares[pos+1].classList.contains('ghost'))
      {
          if(!squares[pos+1].classList.contains('wall')){
          if(squares[pos+1].classList.contains('pac-dot'))
          {
            squares[pos+1].classList.remove('pac-dot');
          }
          if(squares[pos+1].classList.contains('super-dot'))
          {
            squares[pos+1].classList.remove('super-dot');
            goFreeze(ghosts);
          }
          squares[pos+1].classList.add('pac-man');
          squares[pos].classList.remove('pac-man');
          ctx.fillStyle = "black";
          ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
          pacmanPosition.x+=20;
          ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
        }
      }
      else {
        for(var i=0;i<ghosts.length;i++)
        {
          if(ghosts[i].currentX==pacmanPosition.x+20 && ghosts[i].currentY==pacmanPosition.y)
          {
            if(ghosts[i].isFreeze)
            {
              if(squares[pos+1].classList.contains('pac-dot')){
                  squares[pos+1].classList.remove('pac-dot');
              }
              if(squares[pos+1].classList.contains('super-dot'))
              {
                squares[pos+1].classList.remove('super-dot');
                goFreeze(ghosts);
              }
              squares[pos+1].classList.add('pac-man');
              squares[pos].classList.remove('pac-man');
              ctx.fillStyle = "black";
              ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
              pacmanPosition.x+=20;
              ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
              squares[pos+1].classList.remove('ghost');
              squares[(ghosts[i].startY/20)*28+ghosts[i].startX/20].classList.add('ghost');
              ghosts[i].currentX=ghosts[i].startX;
              ghosts[i].currentY=ghosts[i].startY;
              ghosts[i].isFreeze=false;
            }
            else {
              gameover();
            }
          }
        }
      }
    }
    break
    //move down
    case 38:
    if(!squares[pos-width].classList.contains('ghost'))
    {
      if(!squares[pos-width].classList.contains('wall')){
        if(squares[pos-width].classList.contains('pac-dot'))
        {
          squares[pos-width].classList.remove('pac-dot');
        }
        if(squares[pos-width].classList.contains('super-dot'))
        {
          squares[pos-width].classList.remove('super-dot');
          goFreeze(ghosts);
        }
        squares[pos-width].classList.add('pac-man');
        squares[pos].classList.remove('pac-man');
        ctx.fillStyle = "black";
        ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
        pacmanPosition.y-=20;
        ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
      }
    }
    else {
      for(var i=0;i<ghosts.length;i++)
      {
        if(ghosts[i].currentY==pacmanPosition.y-20 && ghosts[i].currentX==pacmanPosition.x)
        {
          if(ghosts[i].isFreeze)
          {
            if(squares[pos-width].classList.contains('pac-dot')){
                squares[pos-width].classList.remove('pac-dot');
            }
            if(squares[pos-width].classList.contains('super-dot'))
            {
              squares[pos-width].classList.remove('super-dot');
              goFreeze(ghosts);
            }
            squares[pos-width].classList.add('pac-man');
            squares[pos].classList.remove('pac-man');
            ctx.fillStyle = "black";
            ctx.fillRect(pacmanPosition.x, pacmanPosition.y, 20, 20);
            pacmanPosition.y-=20;
            ctx.drawImage(pacman, pacmanPosition.x, pacmanPosition.y, 20, 20);
            squares[pos-width].classList.remove('ghost');
            squares[(ghosts[i].startY/20)*28+ghosts[i].startX/20].classList.add('ghost');
            ghosts[i].currentX=ghosts[i].startX;
            ghosts[i].currentY=ghosts[i].startY;
            ghosts[i].isFreeze=false;
          }
          else {
            gameover();
          }
        }
      }
    }
    break
  }
}

function gameover()
{
  window.location = "gameover.html";
}

class Ghost {
  constructor(startX, startY) {
    this.startX = startX
    this.startY = startY
    this.currentX = startX
    this.currentY = startY
    this.isFreeze = false
  }
}

//all my ghosts
ghosts = [
  new Ghost(13*20,14*20),
  new Ghost(13*20,15*20),
  new Ghost(14*20,14*20),
  new Ghost(14*20,15*20)
]

function goFreeze(ghosts){
  for(var i=0;i<ghosts.length;i++)
  {
    ghosts[i].isFreeze=true;
  }
  setTimeout(function(){ for(var i=0;i<ghosts.length;i++)
  {
    ghosts[i].isFreeze=false;
  } }, 5000);
}
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
  //generate a random direction//
  const directions =  [-1, +1, width, -width]
  var direction = directions[Math.floor(Math.random() * directions.length)]
  //the function moves once 200 units of time passes//
  setInterval(function() {
    var pos = (ghost.currentY/20)*28+ghost.currentX/20;
      if(squares[pos + direction].classList.contains('pac-man')){
        if(!ghost.isFreeze)
        {
          gameover();
        }else {
          direction = directions[Math.floor(Math.random() * directions.length)];
        }
      }else
      {
        if (!squares[pos + direction].classList.contains('ghost') &&
        !squares[pos + direction].classList.contains('wall') ) {
          squares[pos + direction].classList.add('ghost');
          squares[pos].classList.remove('ghost');
          //ghost does nothing on the grid, so the pac-dot should be there//
          if(squares[pos].classList.contains('pac-dot'))
          {
            ctx.drawImage(coin, ghost.currentX, ghost.currentY, 20, 20);

          }else if(squares[pos].classList.contains('super-dot'))
          {
            ctx.fillStyle = "orange";
            ctx.fillRect(ghost.currentX, ghost.currentY, 20, 20);
          }
          else if(squares[pos].classList.contains('empty'))
          {
            //restore the empty and grid without pac-dot, since when the ghost enters, ghost was drawn at that grid. we need to fix it when the ghost leaves//
              ctx.fillStyle = "yellow";
              ctx.fillRect(ghost.currentX, ghost.currentY, 20, 20);
          }
          else{
            ctx.fillStyle = "black";
            ctx.fillRect(ghost.currentX, ghost.currentY, 20, 20);
          }
          if(direction == 1)
          {
            ghost.currentX+=20;

          }else if(direction == -1)
          {
            ghost.currentX-=20;

          }else if(direction == width)
          {
            ghost.currentY+=20;

          }else
          {
            ghost.currentY-=20;
          }
          if(ghost.isFreeze)
          {
            ctx.fillStyle = "grey";
            ctx.fillRect(ghost.currentX, ghost.currentY, 20, 20);
          }
          else {
            ctx.drawImage(ghost1, ghost.currentX, ghost.currentY, 20, 20);
          }
      }
        else {
           //generate another direction if ghost would run into another ghost or wall//
           direction = directions[Math.floor(Math.random() * directions.length)];
         }
      }
  }, 300)
}
