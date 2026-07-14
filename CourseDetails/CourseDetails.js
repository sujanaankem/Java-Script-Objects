let eligibility = [];
var course = JSON.parse(localStorage.getItem("ls_course")) || {};
function onClickSubmit() {
    debugger;
    course = new Object();
    course.Name = document.getElementById("txtCourseName").value;
    course.Description = document.getElementById("txtCourseDescription").value;
    course.Price = document.getElementById("txtCoursePrice").value;
    course.Eligibility = ["CSE", "ECE", "EEE", "civil", "aids", "aiml"]
    localStorage.setItem("ls_course", JSON.stringify(course))
    document.getElementById("divSubmit").innerHTML = JSON.stringify(course);
}

function onClickCountryUpdate() {
    debugger;
    course.Country = "India"
    localStorage.setItem("ls_course", JSON.stringify(course));
    document.getElementById("divSubmit").innerHTML = JSON.stringify(course);
}

function onClickEligibilityCriteria() {
    debugger;

    let content = "";
    for (i = 0; i < course.Eligibility.length; i++) {
        content += `<p>${i + 1}) ${course.Eligibility[i]}</p>`;
    }


    document.getElementById("divSubmit").innerHTML = content;

}