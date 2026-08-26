 function testSeal() {
            let user = {
                name: "john"
            };

            Object.seal(user);

            // Changing existing property works
            user.name = "peter";

            // Adding new property fails silently (in non-strict mode)
            user.age = 30;

            // Deleting property fails silently
            delete user.name;

            document.getElementById("result").innerText = JSON.stringify(user);
            alert(JSON.stringify(user));
        }