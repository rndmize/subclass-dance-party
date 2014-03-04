var count = 0;
var DBZDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fightingDancer"></span>');

};

DBZDancer.prototype = Object.create(Dancer.prototype);
DBZDancer.prototype.constructor = DBZDancer;


DBZDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  count++;

  this.$node.css('background-position-x', count*60);

  $(".fightingDancer").mouseover(function(event) {
    //console.log("its working?");
    $(this).css('top', function(index, value) {
      console.log(value);
      var newValue = parseInt(value);
      return (newValue - 1) + 'px';
    });
  });

};
