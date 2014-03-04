var DBZDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fightingDancer"></span>');
  this.setPosition(300 + Math.random() * 500, left);

  //set timeout
  var that = this.$node;
  this.$node.on('mouseenter', function(event) {
    this.idd = setInterval(function(){
      that.css('top', function(index, value) {
        var newValue = parseInt(value);
        return (newValue - 10) + 'px';
      }).css('background-position-y', function(index, value) {
        var newValue = parseInt(value);
        return (newValue + 60) + 'px';
      });
    }, 25);
  }).on('mouseleave', function(){
    this.idd && clearInterval(this.idd);
  });

};

DBZDancer.prototype = Object.create(Dancer.prototype);
DBZDancer.prototype.constructor = DBZDancer;


DBZDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

this.$node.css('background-position-x', function(index, value){
  value = parseInt(value);
  return (value += 60) + 'px';
});


};
