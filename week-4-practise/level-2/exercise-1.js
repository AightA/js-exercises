/*
Create an object that acts like a water bottle. 
It will need a volume key to store how full or empty the bottle is. 
It will be 100 when full and 0 when empty. 
Give your water bottle methods for filling it up, 
drinking some of it, and emptying it.

We made a start on this for you here: 
*/

var bottle = {
  volume: 0,
  fill: function() {
    // calling this function should make you bottles volume = 100;
    return (this.volume = 100);
  },
  drink: function() {
    // calling this function should decrease your bottles volume by 10;
    if (this.volume >= 10) {
      return (this.volume -= 10);
    }
  },
  empty: function() {
    // this function should return true if your bottles volume = 0
    if (this.volume === 0) {
      return true;
    } else {
      return false;
    }
    ``;
  }
};

/*
--TIP--

Remember that for changing properties on the current object inside one of its
methods you can refer to it by its variable name: `bottle`.

Once you have completed your object run the following and see if your answer 
matches the expected result at the bottom :)
*/

bottle.fill();
console.log(bottle.fill()); //100
bottle.drink();
console.log(bottle.volume); //90
bottle.drink(); // 80
bottle.drink(); //70
if (!bottle.empty()) {
  console.log(" bottles volume = " + bottle.volume);
}
console.log("Above volume should be: Expected result:  70");

bottle.drink();
console.log(bottle.volume); //60
bottle.drink(); //60
bottle.drink(); //60
bottle.fill(); //100
bottle.drink();
console.log(bottle.volume); // 90
bottle.drink(); //80
bottle.drink(); //70
console.log(bottle.empty()); // false
bottle.drink(); //60
console.log(bottle.volume); // 60
console.log(bottle.empty()); // false
bottle.drink();
bottle.drink();
console.log(bottle.empty());
bottle.drink();
console.log(bottle.volume);
bottle.drink();
bottle.drink();
