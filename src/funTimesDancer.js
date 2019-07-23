var funTimesDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.makeLeft = function() {
    // let left = "20px";
    this.$node.css("left", "200px");
  }

  this.$node.addClass("bobble");
  // this.$node.removeClass("dancer");
  this.id = Date.now();
  // this.$node.css("position", "relative");
  this.$node.attr('id', this.id);
  this.hasMoved = false;
}
funTimesDancer.prototype = Object.create(makeDancer.prototype);
funTimesDancer.prototype.constructor = funTimesDancer;
funTimesDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.hasMoved) {
    $('#' + this.id).animate({ top: '+=25px'});
    this.hasMoved = false;
  } else {

    $('#' + this.id).animate({ top: '-=25px'});
    this.hasMoved = true;
  }
}

// funTimesDancer.prototype.makeLeft = function() {
//   let left = "20px";
//   $this.node.css(left);
// }

