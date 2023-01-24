function dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Wuf Wuf";
  };
}

dog.prototype.getName = function () {
  return this.name;
};

var dog = new dog("Skippy");
