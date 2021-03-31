const animals = {
    dolphin: {
      image: '/images/dolphin.jpg',
      facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
      image: '/images/lobster.jpg',
      facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
      image: '/images/starfish.jpg',
      facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
  };




// console.log(animals)

const array = [];
for (const animal in animals){
    array.push(
        animals[animal].image,
        animals[animal].facts[0]
    )
}
console.log(array)
