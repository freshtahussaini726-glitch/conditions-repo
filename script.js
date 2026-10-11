// ===================================
// Task 1: Age Checker
// ===================================

const ageForm = document.getElementById("ageForm");

ageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageText = document.getElementById("age").value;
    const age = Number(ageText);
    const result = document.getElementById("ageResult");

    if (ageText === ""  age < 0  !Number.isInteger(age)) {
        result.textContent = "Please enter a valid age.";
    } else if (age >= 18) {
        result.textContent = "You are an adult.";
    } else {
        result.textContent = "You are a minor.";
    }

    console.log(result.textContent);
});


// ===================================
// Task 2: Number Checker
// ===================================

const numberForm = document.getElementById("numberForm");

numberForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const numberText = document.getElementById("numberInput").value;
    const number = Number(numberText);
    const result = document.getElementById("numberResult");

    if (numberText === "") {
        result.textContent = "Please enter a number.";
    } else if (number > 0) {
        result.textContent = "Positive number";
    } else if (number < 0) {
        result.textContent = "Negative number";
    } else {
        result.textContent = "Zero";
    }

    console.log(result.textContent);
});


// ===================================
// Task 3: Grade Checker
// ===================================

const gradeForm = document.getElementById("gradeForm");

gradeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const scoreText = document.getElementById("scoreInput").value;
    const score = Number(scoreText);
    const result = document.getElementById("gradeResult");

    if (
        scoreText === "" ||
        !Number.isInteger(score) ||
        score < 0 ||
        score > 100
    ) {
        result.textContent = "Invalid score. Enter a whole number from 0 to 100.";
    } else if (score >= 90) {
        result.textContent = "Grade: A";
    } else if (score >= 80) {
        result.textContent = "Grade: B";
    } else if (score >= 70) {
        result.textContent = "Grade: C";
    } else if (score >= 60) {
        result.textContent = "Grade: D";
    } else {
        result.textContent = "Grade: F";
    }

    console.log(result.textContent);
});


// ===================================
// Task 4: Even or Odd
// ===================================

const evenOddForm = document.getElementById("evenOddForm");

evenOddForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const numberText = document.getElementById("evenOddInput").value;
    const number = Number(numberText);
    const result = document.getElementById("evenOddResult");

    if (numberText === "" || !Number.isInteger(number)) {
        result.textContent = "Please enter a valid integer.";
    } else if (number % 2 === 0) {
        result.textContent = "Even number";
    } else {
        result.textContent = "Odd number";
    }

    console.log(result.textContent);
});


// ===================================
// Task 5: Login Checker
// ===================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("loginResult");

    if (username === "admin" && password === "12345") {
        result.textContent = "Login successful";
    } else {
        result.textContent = "Invalid username or password";
    }

    console.log(result.textContent);
});


// ===================================
// Task 6: Ternary Operator
// ===================================

const ternaryForm = document.getElementById("ternaryForm");
ternaryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageText = document.getElementById("ternaryAge").value;
    const age = Number(ageText);
    const result = document.getElementById("ternaryResult");

    if (ageText === ""  age < 0  !Number.isInteger(age)) {
        result.textContent = "Please enter a valid age.";
    } else {
        const message = age >= 18 ? "Adult" : "Minor";

        result.textContent = message;
    }

    console.log(result.textContent);
});


// ===================================
// Task 7: Access Checker
// ===================================

const accessForm = document.getElementById("accessForm");

accessForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageText = document.getElementById("accessAge").value;
    const age = Number(ageText);
    const hasID = document.getElementById("hasID").checked;
    const result = document.getElementById("accessResult");

    if (ageText === ""  age < 0  !Number.isInteger(age)) {
        result.textContent = "Please enter a valid age.";
    } else if (age >= 18 && hasID) {
        result.textContent = "Access granted";
    } else {
        result.textContent = "Access denied";
    }

    console.log(result.textContent);
});


// ===================================
// Bonus: Student Result Checker
// ===================================

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const scoreText = document.getElementById("studentScore").value;
    const score = Number(scoreText);
    const result = document.getElementById("studentResult");

    if (studentName === "") {
        result.textContent = "Please enter the student's name.";
    } else if (
        scoreText === "" ||
        !Number.isInteger(score) ||
        score < 0 ||
        score > 100
    ) {
        result.textContent = "Invalid score. Enter a whole number from 0 to 100.";
    } else {
        let grade;

        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        const status = score >= 60 ? "Passed" : "Failed";

        const finalResult =
            "Student: " + studentName +
            "\nScore: " + score +
            "\nGrade: " + grade +
            "\nStatus: " + status;

        result.textContent = finalResult;

        console.log(finalResult);
    }
});