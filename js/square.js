;(function() {
  
  'use strict';
  
  var s = 20;
  var c = document.getElementById('c');
  var ctx = c.getContext('2d');
  var w = c.width = window.innerWidth;
  var h = c.height = window.innerHeight;
  var cx = w / 2;
  var cy = h / 2;
  var Box = function(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0;
    this.size = Math.random() * s;
  };
  Box.prototype = {
    constructor: Box,
    update: function() {
      this.r += 0.1;
    },
    render: function(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.r);
      ctx.strokeRect(-this.size/2, -this.size/2, this.size, this.size);
      ctx.restore();
    }
  };
  
  var ctr = 500;
  var boxes = [];
  var box;
  
  for(var i = 0; i < ctr; i++) {
    
    var px = Math.random() * w;
    var py = Math.random() * h;
    
    box = new Box(
      Math.floor(px / s) * s, 
      Math.floor(py / s) * s
    );
    boxes.push(box);
    
  }
  
  requestAnimationFrame(function loop() {
    requestAnimationFrame(loop);
    
    ctx.clearRect(0, 0, w, h);
    
    for(var i = 0, len = boxes.length; i < len ;i++) {
      box = boxes[i];
      box.update();
      box.render(ctx);
    }
  });
  
})();