window.onload = function () {

    const input = document.getElementById("inputBox");

    // Select all buttons
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            let value = this.value;

            // Clear Button
            if (value === "C") {
                input.value = "";
            }

            // Equal Button
            else if (value === "=") {

                try {

                    // Replace x with *
                    let expression = input.value.replace(/x/g, "*");

                    input.value = eval(expression);

                } catch (error) {

                    alert("Invalid Expression");
                    input.value = "";
                }
            }

            // Other Buttons
            else {
                input.value += value;
            }

        });

    });

};
