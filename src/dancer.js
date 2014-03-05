// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step(); // start stepping loop
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {
    context.step();
  }, this.timeBetweenSteps);

/*
  // Here we tried unsuccessfully to add explosions (when twitterBird & bird got close to each other)
  var d = window.dancers;
  var result1;
  var result2;
  for(var i=0; i<d.length; i++){
    for (var j = 0; j < d.length; j++) {
      if (d[i].$node.hasClass('twitterDancer') && d[j].$node.hasClass('fightingDancer')) {
        if(parseInt(d[i].$node.css('background-position-x')) - parseInt(d[j].$node.css('background-position-x')) < 20 && parseInt(d[i].$node.css('background-position-y')) - parseInt(d[j].$node.css('background-position-y')) < 20) {
          result1 = i;
          result2 = j;

          // console.log("in the zone");
          // $("wrapper").remove(d[i].$node);
          // dancers.splice(i,1);
        }
      }
    }
  }
*/
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  if (top !== null) {
    var styleSettings = {
      top: top,
      left: left
    };
  } else {
    var styleSettings = {
      left: left
    };
  }
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){ // Send all dancers to left side of page
  this.setPosition(null, 100);
};
