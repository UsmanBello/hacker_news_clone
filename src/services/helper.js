export default function (array, lastIndex){
    const firstIndex=lastIndex-29;
   var subList= array.filter((item, index)=>{
         return index>=firstIndex && index<=lastIndex
   })
   return subList
}