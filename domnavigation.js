// задача 1
// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?


// console.log(document.body.children[0]);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].children[1]);

// задача 2

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    console.log(table.rows[i].cells[i])
}