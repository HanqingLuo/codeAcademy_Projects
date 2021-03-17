const _ ={
    //Clamps number within the inclusive lower and upper bounds.
    clamp(number, lower, upper){ 
        let lowerClampedValue = Math.max(number, lower)
        let clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue 
    }, 
    //inRange(number, [start=0], end)
    //Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
    inRange(number, start, end){
        if (end == null){
            end = start
            start = 0
        } 
        if (start > end){
            [start, end] = [end, start]
        }
        const isInRange = (start <= number && number < end)
        return isInRange
    },
    words(string){
        words = string.split(' ')
        return words
    },
    pad(string,length){
        if(length <= string.length){
            return string
        }
        const startPaddingLength = Math.floor((length - string.length)/2)
        const endPaddingLength = length - startPaddingLength - string.length
        const padedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
        return padedString
    },
    has(object, key){
        const hasValue = object[key]
        if (hasValue === undefined){
            return false
        } return true
    },
    invert(object){
        let invertedObject = {}
        for(let key in object){
            const originalValue = object[key]
            invertedObject = {originalValue : key}
        }
        return invertedObject
    },
    findKey(object, predicate){
        for(let key in object){
            const value = object[key]
            const predicateReturnValue = predicate(value)
            if(predicateReturnValue === true){
                return key
            } 
            return undefined
        }
    },
    drop(array, n){
        if(n === undefined){
            n = 1
        }
        const droppedArray = array.slice(n, array.length)
        return droppedArray
    },
    dropWhile(array, predicate){
        const cb = (element, index) => {return !predicate(element, index, array)}
        const dropNumber = array.findIndex(cb)
        const dropArray = this.drop(array, dropNumber)
        return dropArray
    },
    chunk(array, size){
        if(size === undefined){
            size = 1
        }
        let arrayChunks = []
        for(let i = 0; i <= array.length-1; i+=size){
            let arrayChunk = array.slice(i, i+size)
            arrayChunks.push(arrayChunk)

        }
        return arrayChunks

    }
};




// Do not write or modify code below this line.
module.exports = _;