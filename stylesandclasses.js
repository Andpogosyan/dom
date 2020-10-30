// Напишите функцию showNotification(options),
//     которая создаёт уведомление: < div class = "notification" >
//     с заданным содержимым.Уведомление должно автоматически исчезнуть через 1, 5 секунды.


let showNotification = (obj) => {
    let div = document.createElement('div');
    let body = document.querySelector('body');
    body.append(div);

    div.position = 'absolute';
    div.style.top = `${obj['top']}px`;
    div.style.righ = `${obj['right']}px`;
    div.innerText = `${obj['html']}`;
    setTimeout(() => div.remove(), 1500)
}


showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "welcome"
});