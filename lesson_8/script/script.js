// Сетевые запросы.

// Цикл while
// Смысл команды - не будет работать сразу, имитировали сетевой запрос.

//const start = Date.now();
// while (true){
//     const current =  Date.now();
//     if (current - start > 5000){
//         break
//     }
// } // просто как пример, не вводить в консоль, все зависнет.


// Клиент и сервер. Мы можем делать запросы в: браузере и JS.
// Когда заскроллили до конца какую-либо страницу(допустим, истаграм), js делает запрос, обрабатывает и подгружает остальные данные.

// Асинхронные запросы - JS. Стандартные сетевые запросы - браузер

// Проблемы - джава скрипт отрабатывает сверху вниз.
// ------------------запрос сетевой---------------------> процесс обработки JS
// Пока отработает сетевой запрос,  JS ждет, на момент присвоения, ответа от сервера все еще нет. Он не моментальный. Если мы скажем  JS ждать, браузер не будет прорисовывать.
// date.now(); текущий момент времени. Этим процессом забили очередь.
// Стопорить JS не надо. 


// ------------------запрос сетевой---------------------> 
// Очередь - в основном потоке, в дополнительный поток можно повесить. Но мы не должны эти данные вносить в основной поток. 
// На момент, когда данные придут с дополнительного потока, в основном уже все отработает.
// Как решается? Мы на этом месте передаем callback функцию. Описывается вся логика, только потом отправляем запрос. Инструкция, которая выполнится, что должен будет сделать JS когда данные уже придут.

// htpp 100 - Проверка свзяи
// htpp 200 - ?
// htpp 300 - ошибка доступа
// htpp 400 - ошибка пользователя
// htpp 500 - ошибка сервера


// resp.json() // возвращает результат

// cетевые запросы. Работают в паре.
// setInterval - 

// const root = document.querySelector('#root');

// function render({name, lastname, age}){
//     const p = document.createElement('p');
//     p.innerText = `${name} ${lastname} (${age})`;
//     root.append(p);
// }



// fetch('http://127.0.0.1:5500/data/user.json') // fetch функция, чтобы отправить запрос
//     .then(function(resp){
//         return resp.json()
//     }) 
//     .then(function(data){
//         render(data);
//     })

    // console.log(fetchData);



    // .then(function(resp){
    //     return resp.json() // возвращает результат
    // })  // коллбек функция
    
    // .then(function(data){
    //     console.log(data)
    // }) 



    // Промисы. Необходим для обработки процессов( типа сетевой запрос.) Где надо время. Описываем логику, что мы должны будем сделать. Что хорошо, что плохо. Описали такую логику. 
    // Resolve - функция, которая должна отработать, когда все хорошо
    // Reject - функция, которая должна отработать, когда все плохо

    // const promise = new Promise(function(result, reject){
    //     const result = Math.random();
    //     if (result < 0.5){
    //         resolve()
    //     }else{
    //         reject();
    //     }
    // })

    // когда функция отработает, тогда

    // promise.then(
    //     () => console.log('все хорошо'),
    //     () => console.log('все плохо')
    // )
    // мы передаем два аргумента.
    // () => console.log('все хорошо') - Resolve
    // () => console.log('все плохо') - Reject
    // это тоже самое что function(){console.log('все плохо')}



    // API - интерфейс взаимодействия приложений.
    // Спец программа, с которой можно связать приложение и данные конкретные. 



    // реализовать скрипт, который выводит данные пользователя в консоль

    // fetch('https://jsonplaceholder.typicode.com/users/3')
    // .then(function(resp){
    //     return resp.json() 
    // }) 
    
    // .then(function(data){
    //     console.log(data)
    // }) 




    //  описать функцию getUser, которая получает id пользователя и выводит его данные в консоль

//    function getUser(id){
//     fetch('https://jsonplaceholder.typicode.com/users/' + id)
//         .then(resp => resp.json())
//         .then(data => console.log(data))
//    }

//    getUser(4);




// создать функцию render, которая получает в качестве аргумента объект со свойствами
// name, email и добавляет в #root следующую структуру

// const rootElement = document.querySelector('#root');

// function render({name, email}) {
//     const nameEl = document.createElement('p');
//     const emailEl = document.createElement('p');
//     const container = document.createElement('div');
 
//     nameEl.innerText = name;
//     emailEl.innerText = email;

//     container.append(nameEl, emailEl);
//     rootElement.append(container);
//   }

//   render({name: 'Darya', email: 'lalalla@inbox.lv'});




// при вызове getUser сделать так, чтобы данные о пользователе отрисовались в интерфейсе


// const rootElement = document.querySelector('#root');

// function render({name, email}) {
//     const nameEl = document.createElement('p');
//     const emailEl = document.createElement('p');
//     const container = document.createElement('div');
 
//     nameEl.innerText = name;
//     emailEl.innerText = email;

//     container.append(nameEl, emailEl);
//     rootElement.append(container);
//   }

// function getUser(id) {
//   fetch('https://jsonplaceholder.typicode.com/users/' + id)
//     .then(resp => resp.json())
//     .then(data => render(data));
// }

// getUser(9);
