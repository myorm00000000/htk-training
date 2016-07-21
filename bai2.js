var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };
var list_properties = function(f) {
  return Object.keys(f);
}
document.write(list_properties(student));
delete student.rollno;
document.write("</br>")
document.write(list_properties(student));