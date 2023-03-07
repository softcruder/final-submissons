function displayLecture() {
  var courseName = document.getElementById("course-name").value;
  if (courseName === "CPT221") {
    document.getElementById("output").innerHTML = "Lecturer: VICTOR ADAMA";
  } else if (courseName === "CPT222 and 223") {
    document.getElementById("output").innerHTML = "Lecturer: DR BASIR";
  } else if (courseName === "CPT224") {
    document.getElementById("output").innerHTML = "Lecturer: MR SOLOMON";
  } else if (courseName === "CPT226") {
    document.getElementById("output").innerHTML = "Lecturer: DR JOHN";
  }
  else if (courseName === "MAT222") {
    document.getElementById("output").innerHTML = "Lecturer: DR KHADIJA";
  }
  else if (courseName === "CIT224") {
    document.getElementById("output").innerHTML = "Lecture: H.O ALIYU";
  }
  else if (courseName === "MAT225") {
    document.getElementById("output").innerHTML = "Lecturer: DR LAWAL";
  }
  else {
    document.getElementById("output").innerHTML = "Invalid course name/title";
  }
}
