

function createCourseRow() {
    const courseRow = document.createElement('tr');
    courseRow.setAttribute('class', 'row');
    courseRow.innerHTML = `
        <td class="col-4">
            <select
                class="grade-selector form-select fw-medium"
                aria-label="Default select example"
                style="border: 2px solid #9c73f8"
            >
                <option disabled selected>Grade</option>
                <option value="4.00">A+ (4.00)</option>
                <option value="3.75">A (3.75)</option>
                <option value="3.50">A- (3.50)</option>
                <option value="3.25">B+ (3.25)</option>
                <option value="3.00">B (3.00)</option>
                <option value="2.75">B- (2.75)</option>
                <option value="2.50">C+ (2.50)</option>
                <option value="2.25">C (2.25)</option>
                <option value="2.00">D (2.00)</option>
                <option value="0.00">F (0.00)</option>
            </select>
        </td>
        <td class="col-4">
            <input
                min="1"
                type="number"
                class="form-control fw-medium"
                aria-describedby="creditsHelpBlock"
                style="border: 2px solid #9c73f8"
            />
        </td>
        <td class="col-4">
            <button type="button" class="btn btn-danger w-100 fw-medium">
                <i class="fa-regular fa-trash-can"></i>
                Delete
            </button>
        </td>
    `;

    return courseRow;
}

function addCourseRow() {
    const courseTableBody = document.getElementById('course-grades');
    const newCourseRow = createCourseRow();
    courseTableBody.appendChild(newCourseRow);
    console.dir(courseTableBody)
}

document.getElementById('course-grades').addEventListener('click', function(e) {
    const clickedElement = e.target;

    if (clickedElement.tagName === 'BUTTON') {
        console.log('Delete button clicked:', clickedElement);
        const rowToRemove = clickedElement.closest('tr');
        const courseTableBody = document.getElementById('course-grades');
        courseTableBody.removeChild(rowToRemove);
       
    }
});
