var DBZDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps); // BEGIN CONSTRUCTION
  this.$node = $('<span class="fightingDancer"></span>');
  this.setPosition(300 + Math.random() * 500, left);

  var that = this.$node;
  this.$node.on('mouseenter', function(event) {
    this.idd = setInterval(function(){ // Every 25 ms move bird up
      that.css('top', function(index, value) {
        var newValue = parseInt(value);
        return (newValue - 10) + 'px';
      }).css('background-position-y', function(index, value) {
        var newValue = parseInt(value);
        return (newValue + 60) + 'px'; // also rotate bird by manipulating background position
      });
    }, 25);
  }).on('mouseleave', function(){
    this.idd && clearInterval(this.idd); // Cancel the above setInterval operations when mouse leaves
  });
};

DBZDancer.prototype = Object.create(Dancer.prototype);
DBZDancer.prototype.constructor = DBZDancer;

DBZDancer.prototype.step = function(){ // Replaces default step function
  Dancer.prototype.step.call(this);

  this.$node.css('background-position-x', function(index, value){ //generates "flying" animation
    value = parseInt(value);
    return (value += 60) + 'px';
  });
};
