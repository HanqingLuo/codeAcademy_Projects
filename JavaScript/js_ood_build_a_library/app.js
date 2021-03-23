// Parent Class
class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  // Parent Getters
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
  // Parent Setters
    set isCheckedOut(value){
      this._isCheckedOut = value;
    }
  // Parent methods
    // changes the value saved to the _isCheckedOut property.
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    // Return the average value of the ratings array.
    getAverageRating(){
      let averageRating = this._ratings.reduce((a,b) => a + b) / this._ratings.length
      return averageRating
      // edge case: Null array, value of array = string
    }
    // addRating that accepts one argument and uses .push() to add it to the end of the ratings array.
    addRating(score){
      this.ratings.push(score);
    }
  }
  
  // Children Class: Book
  class Book extends Media{
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    // Book Getters
      get author(){
        return this._author;
      }
      get pages(){
        return this._pages;
      }
  
      // Book Functions
  }
  
  // Children Class: Movie
  class Movie extends Media{
    constructor(director, title, runtime){
      super(title);
      this._director = director;
      this._runtime = runtime;
    }
    // Movie Getters
      get author(){
        return this._director;
      }
      get director(){
        return this._runtime;
      }
  
      // Movie Functions
  }
  
  // Book constructor(author, title, pages)
  // Instance: Book
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  console.log(historyOfEverything.author, historyOfEverything.title, historyOfEverything.pages)
  // console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.ratings, historyOfEverything.getAverageRating());
  
  
  // Movie constructor(director, title, runtime)
  // Instance: Movie
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.ratings, speed.getAverageRating());
  
  
  
  
  
  
  
  
  
  
  
  