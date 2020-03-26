/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, up, down){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.up = up;
  this.down = down;
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"' +
        '/>';
  };

  this.moveRight = function(){
    this.left += 100;
    console.log('ok: ' + this.left);
  };
  this.moveDown = function () {

  };
  this.moveLeft = function () {

  };
  this.moveUp =function () {

  };

}

var hero = new Hero('pika.png', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();