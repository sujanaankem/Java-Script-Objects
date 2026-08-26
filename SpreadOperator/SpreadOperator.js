 function onClickCheck() {
            // Correct object syntax
            let person = {
                name: "peter",
                age: 25
            };

            // Copy using spread operator
            let copy = {
                ...person
            };

            // Show result
            document.getElementById("pResult").innerHTML = 
                "Original: " + JSON.stringify(person) + "<br>" +
                "Copy: " + JSON.stringify(copy);
        }