// задача 2
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:

// Её href содержит ://
// Но не начинается с http://internal.com.


// let collection = document.querySelectorAll("a");

// for (let a of collection) {
//     if (!String(a.getAttribute("href")).includes("http://internal.com") &&
//         String(a.getAttribute("href")).includes("://")
//     ) {
//         a.style.color = "orange";
//     }
// }