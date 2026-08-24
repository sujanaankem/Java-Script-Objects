function showStudent() {

    let student = {
        name: "Rahul",
        age: 22,
        marks: {
            maths: 85,
            english: 78,
            science: 90
        }
    };

    let output = "";

    for (let key in student) {

        if (key == "marks") {

            for (let subject in student[key]) {
                output += subject + " : " + student[key][subject] + "<br>";
            }

        } else {
            output += key + " : " + student[key] + "<br>";
        }
    }

    document.getElementById("result").innerHTML = output;
}