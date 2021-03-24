
// Parent Class: School
class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(integer){
        if(isNaN(integer) === false){
            this._numberOfStudents = integer;
        } console.log('Invalid input: numberOfStudents must be set to a Number.')     
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers){
        const randomTeacher = substituteTeachers[Math.floor(substituteTeachers.length * Math.random())]
        return randomTeacher;
    }
  }

//   Child Class: PrimarySchool
class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }

    set pickupPolicy(string){
        this._pickupPolicy = string;
    }
}

//   Child Class: HighSchool
class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams ){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        console.log(this._sportsTeams);
    }
}


// Instance: PrimarySchool
// PrimarySchool constructor(name, numberOfStudents, pickupPolicy)
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])



// Instance: HighSchool
// HighSchool constructor(name, numberOfStudents, sportsTeams )
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams;