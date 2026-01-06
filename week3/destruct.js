let student=[
    {rollNum:102,name:"neha",marks:70},
     {rollNum:103,name:"sneha",marks:80}
]

//let totalMarks=0;
for(let element of student){
    //console.log(`Total marks of student $(Marks)`);
    element.marks +=10;
}
console.log(student)