var NinjaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ninjaDancer"></span>');
  this.setPosition(550 + Math.random() * 200, left);
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.constructor = NinjaDancer;

NinjaDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css('background-position-x', function(index, value){
    value = parseInt(value);
    if (value > 800) {
      value = 30;
    }
    return (value += 151) + 'px';
  });
};
