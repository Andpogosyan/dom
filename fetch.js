// Создайте асинхронную функцию getUsers(names), которая получает на 
// вход массив логинов пользователей GitHub, запрашивает у GitHub 
// информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME 
// доступна по ссылке: https://api.github.com/users/USERNAME.

// В песочнице есть тестовый пример.


// let users = ['Andpogosyan', 'denisnegodyaevexceed','viktor','fdhgdhdfh'];
// let promiseUsers = [];

// async function getUsers(user) {
//     let response = await fetch(`https://api.github.com/users/${user}`);
//     let promise = await response.json();
//     if(!(promise.message === 'Not Found')){
//     promiseUsers.push(promise);} else{
//         promiseUsers.push('null');
//     }

// }

// for(let i=0; i<users.length; i++){
//     getUsers(users[i])
//     console.log(promiseUsers)
// }