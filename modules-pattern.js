var basicCarModule = {
  color: "blue",
  size: "sedan",
  options: {
    sunRoof: true,
    racingStripes: false,
    spoiler: false,
    leather: true
  },

  setColor: function (color) {
    this.color = color;
  },

  setOptions: function (options) {
    this.options = options;
  }
}

console.log(basicCarModule);

basicCarModule.setColor("green");

console.log(basicCarModule);


//----------------- MODULE PATTERN ------------

var module = (function () {
  var color = "blue";

  return {
    a: 1,
    getColor: function () {
      return color;
    },
    setColor: function (color) {
      this.color = color;
    }
  }

})();

var myModule = module;