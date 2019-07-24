var leftRightDancer = function(top, left, timebetweenSteps) {
  makeDancer.call(this, top, left, timebetweenSteps);

  this.makeLeft = function() {
    this.$node.css("left", "200px");
  }

  // this.$node.mouseenter(function() {
  //   $('#' + this.id).fadeOut( "fast" );
  // });

  // this.$node.mouseleave(function() {
  //   $('#' + this.id).fadeIn();
  // });

  this.$node.addClass("pikachu");
  // this.$node.removeClass("dancer");
  // this.id = Date.now();
  // this.$node.css("position", "relative");
  // this.$node.attr('id', this.id);
  this.hasMoved = false;
}
leftRightDancer.prototype = Object.create(makeDancer.prototype);
leftRightDancer.prototype.constructor = leftRightDancer;
leftRightDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.hasMoved) {
    // var styleSettings = {
    //   top: top,
    //   left: left
    // };
    // $('#' + this.id).animate({ height: '+=25px'});
    $('#' + this.id).animate({ top: '-=10px', height: '+=25px', width: '+=25px'});
    this.hasMoved = false;
  } else {
    // $('#' + this.id).animate({ height: '-=25px'});
    $('#' + this.id).animate({ top: '+=10px', height: '-=25px', width: '-=25px'});
    this.hasMoved = true;
  }
}
