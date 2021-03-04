//GET 30 IDS FROM ARRAY OF STORIES ID DEPENDING ON CURRENT INDEX/PAGE
export  function currentArticles(array, lastIndex){
    const firstIndex=lastIndex-29;
   var subList= array.filter((item, index)=>{
         return index>=firstIndex && index<=lastIndex
   })
   return subList
}

//REGEX TO EXTRACT DOMAINS FROM URL
export function extract_domain(url){
      if(url===undefined){ return ""}
      var result
      var match
      if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
          result = match[1]
          if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
              result = match[1]
          }
      }
      return result
}


//TIME EXPRESSED AS  "x" moments ago->e.g  "x"seconds ago or "x"minutes ago etc
export function timeSince(date) {

      var seconds = Math.floor(((new Date().getTime()/1000) - date))
      // var seconds = Math.floor((new Date() - date) / 1000);
      var interval = seconds / 31536000;
    
      if (interval >= 1) {
        return Math.floor(interval) + " years ago";
      }
      interval = seconds / 2592000;
      if (interval >= 1) {
        return Math.floor(interval) + " months ago";
      }
      interval = seconds / 86400;
      if (interval >= 1) {
        return Math.floor(interval) + " days ago";
      }
      interval = seconds / 3600;
      if (interval >= 1) {
        return Math.floor(interval) + " hours ago";
      }
      interval = seconds / 60;
      if (interval >= 1) {
        return Math.floor(interval) + " minutes ago";
      }
      return Math.floor(seconds) + " seconds ago";
    }