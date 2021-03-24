// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    let addEmployee = document.getElementById('btnAddEmployee');
    addEmployee.addEventListener('click', e => {

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    window.open('add-employee.html', 'Add Employee', 'width=600, height=600');
    });
});