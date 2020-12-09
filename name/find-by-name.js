const spot = { name: 'spot', age: 5, weight: '20 lbs' };


const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };


// const findByName = (obj) => {
//   return obj["name"];
// };
 
// const findByName = (obj) => {
//   return obj.name;
// };
//////



// const findByName = (obj) => {
//   const { name } = obj;
//   return name;
// };


const findByName = ({name }) => {
  // const { name } = obj;
  return name;
};



module.exports = {
  findByName,
     
};
