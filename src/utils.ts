
// export const shuffleArray = (arr:any[]):any => {
//   arr
//   .map((a)=> (Math.random(),a))
//   .sort((a,b)=>a[0]-b[0])
//   .map(a => a[1])
// }

export const shuffleCards = (array:any[]):any => {

    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;

}