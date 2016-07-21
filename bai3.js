var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
var list_properties = function(f) {
  return Object.keys(f);
}
var length_obj = function(f) {
  return list_properties(student).length;
}
document.write(length_obj(student));