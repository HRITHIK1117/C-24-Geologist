class Iron {
    constructor(x,y,w,h) {
      var options = {
        'density':5,
        'friction': 0.7,
        'restitution':1.5
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  