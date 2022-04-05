const menu = {
  _menu: 'Katsu', 
  _price: 35,

set meal(mealToCheck) {
  if (typeof mealToCheck === 'string') {
    return this._meal = mealToCheck;
    }
},

set price(priceToCheck) {
  if (typeof priceToCheck === 'number') {
    return this._price === priceToCheck;
    }
  },

 get todaysSpecial() {
   if (this._meal && this._price) {
     return `Today's SPECIAL dinner Meal is ${this._meal} for $${this._price}(including chilled beer)!!`
   } else {
     return 'Meal or price was not set correctly!'
    }
  }
};

menu.meal = 'Katsu';
menu.price = '35';

console.log(menu.todaysSpecial);



