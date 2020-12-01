
const pet = {
    name: 'Rosa',
    age: 5,
    weight: '20 lbs'
  };

function copyPush2(pet) { 
  pet.push( {color: 'gold'});
}

copyPush = { ...pet, color: 'gold'};

module.export = {
  copyPush2,  
  copyPush

}