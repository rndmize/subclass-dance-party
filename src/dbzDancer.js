var DBZDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fightingDancer"></span>');
};

DBZDancer.prototype = Object.create(Dancer.prototype);
DBZDancer.prototype.constructor = DBZDancer;

DBZDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
