var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
var list_properties = function(f) {
  document.write(Object.keys(f))
}
list_properties(student)