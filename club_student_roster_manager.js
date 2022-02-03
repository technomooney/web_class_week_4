

/* Add the following functionality to this page

[Note on HTML element notation: span#student-count means the span element with id="student-count" ]

When the page loads:
    * Using JavaScript, display 0 in the span#student-count  (1pt)

    * Add an event listener so that when button#add-students is clicked:
        - Read the value from the student-name input, save in a variable. If the name is not entered, show an alert error message and return. (1pt)
        - Read the value from the student-id input, save in a variable. If the id is not entered, show an alert error message and return. (1pt)
        - Read the value from the student-gpa input, save in a variable. If the GPA is not entered, or is not in the range 0-4, show an alert error message and return.  (1pt)
        - Create a new li element (1pt)
        - Set the innerHTML of the li element to a string containing the student's name, id, and GPA  (1pt)
            for example "Beyonce Knowles, id: aa1234bb, GPA 3.8"
            Use a template string to generate this string
        - Add a click event handler to the new li element.  (3pt)
        - When the li element is clicked, add the class="selected" to that li element.
        - When that li element is clicked again, remove the class="selected" from that li element
            In other words, clicking a li element will toggle the selected class. https://www.w3schools.com/howto/howto_js_toggle_class.asp
        - Add the new li element to ul#student-list element (1pt)
        - Clear the values of the three input elements (1pt)
        - Update the span#student-count value to the new number of students (1pt)

    * Add an event listener so that when button#remove-selected-students is clicked:
        - Remove all of the elements with the class="selected" from the list.   (3pt)
        - Using the remove() function on an element will remove it. Example https://jsfiddle.net/rk9pm4vg/

    You should not need to modify any of the HTML.
*/

let studentCountDisplay = document.querySelector("span#student-count")
let studentNameInput = document.querySelector("#student-name")
let studentIDInput = document.querySelector("#student-id")
let studentGPAInput =  document.querySelector("#student-gpa")
let addStudentButton = document.querySelector("button#add-student")
let studentList = document.querySelector("ul#student-list")

studentCountDisplay.innerHTML = "No students have been entered yet."

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addStudentButton.click();
    }
})

addStudentButton.addEventListener("click", function () {
    let studentID = studentIDInput.value;
    let studentName = studentNameInput.value;
    let studentGPA = studentGPAInput.value;
    let newListElement = document.createElement("li")

    if (studentName === "") {
        alert("You need to enter a name. Please try again!");
        // found how to do this here:
        // https://www.webmechanix.com/automatically-put-cursor-in-form-field-make-users-happy/
        studentNameInput.focus()
        return;
    }
    if (studentID === "") {
        alert("You need to enter a Student ID!!!! Please try again!");
        studentIDInput.focus()
        return;
    }
    if (studentGPA === "" || studentGPA < 0.0 || studentGPA > 4.0) {
        alert("Invalid GPA! Please enter a number between 0 and 4!");
        studentGPAInput.focus()
        return;
    }
    newListElement.innerHTML = `${studentName}, ID: ${studentID}, GPA: ${studentGPA}`

    newListElement.addEventListener("click", function () {
        this.classList.toggle("selected")
    })
    studentList.appendChild(newListElement)
    studentNameInput.value = ""
    studentIDInput.value = ""
    studentGPAInput.value = ""
    studentNameInput.focus()
})

let removeSelectedStudentsButton = document.querySelector("button#remove-selected-students")

removeSelectedStudentsButton.addEventListener("click", function () {
    let selectedStudents = document.querySelectorAll("li.selected")
    selectedStudents.forEach(function (student) {
    student.remove();
    })
})
