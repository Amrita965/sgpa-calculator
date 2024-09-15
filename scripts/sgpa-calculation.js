
function calculateSGPA() {
    const creditFields = document.querySelectorAll("#course-grades tr td input[type='number']");
    const gradeFields = document.getElementsByClassName("grade-selector");

    let totalGradePoints = 0;
    let totalCredits = 0

    for (let i = 0; i < creditFields.length; i++) {

        const credit = parseInt(creditFields[i].value);
        const grade = parseFloat(gradeFields[i].value);

        if (isNaN(credit) || isNaN(grade)) {
            alert("Please fill out both the credit and grade fields.");
            return;
        }

        totalGradePoints += credit * grade;
        totalCredits += credit;
    }

    const sgpa = (totalGradePoints / totalCredits).toFixed(2);

    setElementContentById('sgpa', sgpa);
    setElementContentById('total-credit', totalCredits);


}

document.getElementById('calculate-sgpa-btn').addEventListener('click', calculateSGPA);