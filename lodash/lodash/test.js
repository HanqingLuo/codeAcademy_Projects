const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  }

  console.log(Object.values(object1));   // ["somestring", 42, false]
  console.log(Object.keys(object1)); // [ 'a', 'b', 'c' ]


function invert(object){
    let invertedObject = {}
    for(let key in object){
        const originalValue = object[key]
        invertedObject = {originalValue : key}
    }
    return invertedObject
}
console.log(invert(object1))