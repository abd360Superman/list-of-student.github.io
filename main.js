var nameOfTheStudentArray = [ ];

function submit() {
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;
    var name5 = document.getElementById("student5").value;

    nameOfTheStudentArray.push(name1);
    nameOfTheStudentArray.push(name2);
    nameOfTheStudentArray.push(name3);
    nameOfTheStudentArray.push(name4);
    nameOfTheStudentArray.push(name5);

    console.log(nameOfTheStudentArray);

    document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
    document.getElementById("submitBTN").style.display = "none";
    document.getElementById("sortBTN").style.display = "inline-block";
}

function sort() {
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);
    document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
}