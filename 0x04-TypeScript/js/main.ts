interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'youssef',
    lastName: 'ait',
    age: 12,
    location: 'bejaad',
};

const student2: Student = {
    firstName: 'hajar',
    lastName: 'ait',
    age: 12,
    location: 'khouribga',
};

const studentsList: Array<Student> = [student1, student2];

// Create table
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableHeadElement = document.createElement('thead');
const tr: HTMLTableRowElement = document.createElement('tr');

// Add table headers
['First name', 'Location'].forEach((element: string) => {
    const th = document.createElement('th');
    th.textContent = element;
    tr.append(th);
});
thead.append(tr);
table.append(thead);

// Add table body
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const tdFirstname: HTMLTableCellElement = document.createElement('td');
    const tdLocation: HTMLTableCellElement = document.createElement('td');

    tdFirstname.textContent = student.firstName;
    tdLocation.textContent = student.location;

    tr.append(tdFirstname, tdLocation);
    tbody.append(tr);
});
table.append(tbody);

// Append the table to the document body
document.body.append(table);
