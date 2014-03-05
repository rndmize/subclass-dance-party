var twitterDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="twitterDancer"></span>');
  this.setPosition(300 + Math.random() * 500, left);

  var that = this.$node;
  this.$node.on('mouseenter', function(event) { //move on mouseover
    this.idd = setInterval(function(){
      that.css('left', function(index, value) {
        var newValue = parseInt(value);
        return (newValue + 10) + 'px';
      });
    }, 25);
  }).on('mouseleave', function(){
    this.idd && clearInterval(this.idd);
  });

};

twitterDancer.prototype = Object.create(Dancer.prototype);
twitterDancer.prototype.constructor = twitterDancer;


twitterDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

this.$node.css('background-position-x', function(index, value){ //basic sprite animation
  value = parseInt(value);
  return (value += 150) + 'px';
});


};
