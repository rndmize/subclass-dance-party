var count = 0;
var NinjaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ninjaDancer"></span>');
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.constructor = NinjaDancer;

NinjaDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  count++;
  //var oldPosition = this.$node.css('background-position', function());
  this.$node.css('background-position-x', count*55);
  console.log(count);
};
