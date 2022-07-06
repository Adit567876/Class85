name_of_student_array=[];
function submit(){
 var display_student_array=[];
 for(var a=1;a<=4;a++){
var name_student=document.getElementById("name_of_student_"+a).value
console.log(name_student);
name_of_student_array.push(name_student);
 }
console.log(name_of_student_array);
var length_array=name_of_student_array.length;
console.log(length_array);
for(var b=0;b<length_array;b++){
    display_student_array.push("<h4>NAME-"+name_of_student_array[b]+"</h4>");
    console.log(display_student_array);
     }
     console.log(display_student_array);
document.getElementById("displayname_with_comma").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("displayname_without_comma").innerHTML=remove_commas;
}