var explosionDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="explosionDancer"></span>');
  this.setPosition(550 + Math.random() * 200, left);
};

explosionDancer.prototype = Object.create(Dancer.prototype);
explosionDancer.prototype.constructor = explosionDancer;

explosionDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var that = this.$node;
  this.$node.css('background-position-x', function(index, value){ //looped sprite animation
    value = parseInt(value);
    if (value < 101) {
      value = 900;
      that.css('background-position-y', function(index, y) {
        y = parseInt(y);
        if (y < 101) {
          y = 900;
        }
        return (y - 100) + 'px';
      });
    }

    return (value - 100) + 'px';
  });
};
