var bigSmallDancer = function(top, left, timebetweenSteps) {
  makeDancer.call(this, top, left, timebetweenSteps);
  this.$node.addClass("pikachu");
  this.$node.removeClass("dancer");
  this.id = Date.now();
  this.$node.css("position", "relative");
  this.$node.attr('id', this.id);
  this.hasMoved = false;
}
bigSmallDancer.prototype = Object.create(makeDancer.prototype);

bigSmallDancer.prototype.constructor = bigSmallDancer;

bigSmallDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.hasMoved) {
    $('#' + this.id).animate({ left: '+=25px'});
    this.hasMoved = false;
  } else {

    $('#' + this.id).animate({ left: '-=25px'});
    this.hasMoved = true;
  }
}
