var input = "dog";

var subset_string = function(s){
  var result = [];
  for(t=1;t<=s.length;t++) {
     var jump = t;
     var j = jump;
     for(i=0;i<s.length;i=i+jump) {
      result.push(s.substring(i,j));
      j+=jump; 
     }
   }
  var unique = result.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
      })
  return unique;
}
document.write(subset_string(input))