var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
var list_properties = function(f) {
  return Object.keys(f);
}
var length_obj = function(f) {
  return list_properties(student).length;
}
for(i=0;i<library.length;i++) {
  for(property in library[i]) {
  document.write(property + " : "+ library[i][property] + "</br>");
  }
  document.write("</br>");
}






