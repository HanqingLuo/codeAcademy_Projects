// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// console.log(mockUpStrand())


const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate(){
      const randNum = Math.floor(Math.random() * this.dna.length);
      let randBase = returnRandBase();
      while(this.dna[randNum] === randBase){
        randBase = returnRandBase();
      }
      this.dna[randNum] = randBase;
      return this.dna;
    },
    /*
    The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. 
    .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
    */
    compareDNA(obj){
      const currDnaLength = this.dna.length
      let count = 0
      for(let index = 0; index < currDnaLength; index++){
        if(this.dna[index] === obj.dna[index]){
          count += 1
        }
      }
      const commonDna = (100*(count/currDnaLength)).toFixed(2) 
      console.log(`${this.specimanNum} and ${obj.specimanNum} have ${commonDna} DNA in common`)
    },
    willLikelySurvive(){
      let count = 0
      const dnaLength = this.dna.length
      for(let index = 0; index < dnaLength; index++){
        if(this.dna[index] === 'C' || this.dna[index] === 'G'){
          count += 1
        }
      }
      return count/dnaLength >= 0.6
    },
  };  
};



let originalBase = pAequorFactory(1,mockUpStrand())
let anotherBase = pAequorFactory(2,mockUpStrand())
let newBase = originalBase.mutate()
console.log(originalBase.compareDNA(anotherBase))
console.log(originalBase)
console.log(anotherBase)
console.log(originalBase.willLikelySurvive())
console.log(anotherBase.willLikelySurvive())


