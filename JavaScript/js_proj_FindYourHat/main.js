const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
        this._field = field;
        this._locationX = 0;
        this._locationY = 0;
    }

    get field() {
        return this._field;
    }

    set field(newField){
        this._field = newField;
    }



    runGame() {
        this.askQuestion();
        // this.print();
    }

    askQuestion() {
        const answer = prompt('Which direction? ').toUpperCase(); 
        switch (answer) {
            case 'U':
              this._locationY -= 1;
              break;
            case 'D':
              this._locationY += 1;
              break;
            case 'L':
              this._locationX -= 1;
              break;
            case 'R':
              this._locationX += 1;
              break;
            default:
              console.log('Enter U, D, L or R.');
              this.askQuestion();
              break;
          }
    }




    static generateField(width, height, numOfHoles) {
        // prefilled 2D array with '░'
        let defaultField = Array(width).fill().map(() => Array(height).fill(fieldCharacter));  
        
        // Default player Position
        defaultField[0][0] = pathCharacter; 

        // set holes

        for (let i = 0; i < numOfHoles; i++){
            let holeLocation_X = Math.floor(Math.random() * width);
            let holeLocation_Y = Math.floor(Math.random() * height);
            // if grid is available, set hole
            if (this.isLocationAvailable(holeLocation_X, holeLocation_Y) == false){
                defaultField[holeLocation_Y][holeLocation_X] = hole; 
            } i--;
        }





        // for(let x = 0; x < width; x++){
        //     for(let y = 0; y < height; y++){

        //     }
        // }




        this._field = defaultField;
        return this._field;
    }

    isLocationAvailable(location_X, location_Y){
        if(this._field[location_X][location_Y] != fieldCharacter) {
            return false
        } return true
    }

   

    // generateDefaultHat() {
    //     this._field[0][0] = pathCharacter;
    //     return this._field;
    // }



    // return field string
    print() {
        let displayString = this._field;
        for (let i = 0; i < displayString[0].length; i++) {
            displayString[i] = displayString[i].join('');
        }
        displayString = displayString.join('\n');
        console.log(displayString)
    }

}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

const myField1 = new Field([[]]);


// test print() - Check
// myField.print();



// test askQuestion() - Check
// myField.askQuestion()

// test generateField() - Check
console.log(Field.generateField(5,5, 5))

// console.log(myField1.generateDefaultHat());



// test runGame()
// myField.runGame()


