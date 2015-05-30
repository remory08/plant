var plant = {
  type: 'jasmine',
  isSeed: true,
  height: 0,
  maxHeight: 12,
  isAlive: true,
  isDead: false,
  water: function () {
    plant.height += 2;
  }
  feed: function(food) {
    if (food === "anti-freeze") {
      plant.isAlive = false;
      plant.isDead = true;
    }
    else {
    plant.height +=1;
    }
  }
}
