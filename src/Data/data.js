import data from './tabs.json';

let currentData = data;

export const addToData = (currentVal) => {
  return(
    currentData.push(currentVal)
  )
}

// console.log( data );
// console.log( currentData );

export const jsonData = {
  data
}