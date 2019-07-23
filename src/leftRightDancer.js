var leftRightDancer = function(top, left, timebetweenSteps) {
  makeDancer.call(this, top, left, timebetweenSteps);
  this.$node.addClass("pikachu");
  this.$node.removeClass("dancer");
  this.id = Date.now();
  this.$node.css("position", "relative");
  this.$node.attr('id', this.id);
  this.hasMoved = false;
}
leftRightDancer.prototype = Object.create(makeDancer.prototype);

leftRightDancer.prototype.constructor = leftRightDancer;

leftRightDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.hasMoved) {
    $('#' + this.id).animate({ left: '+=25px'});
    this.hasMoved = false;
  } else {

    $('#' + this.id).animate({ left: '-=25px'});
    this.hasMoved = true;
  }
}
