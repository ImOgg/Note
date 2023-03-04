// 狀態
// Promise 的關鍵在處理非同步的事件，而非同步的過程中也包含著不同的進度狀態，在 Promise 的執行過程中，可以看到以下狀態。

// pending：事件已經運行中，尚未取得結果
// resolved：事件已經執行完畢且成功操作，回傳 resolve 的結果（該承諾已經被實現 fulfilled）
// rejected：事件已經執行完畢但操作失敗，回傳 rejected 的結果
// let p =new Promise(() =>{})
// console.log(p);

// function creatPromise(success) {
//     return new Promise((resolve, reject) => {
//         // 處理資料

//         if (success) {
//             resolve('成功');
//         }
//         else {
//             reject('失敗');
//         }

//     })
// }
// let p1 =creatPromise(true);
// console.log(p1);
// let p2 =creatPromise(false);
// console.log(p2);

// 使用回傳的資料 使用 .then() .catch()就可以了
// then 是成功的時候回傳的 catch是失敗時回傳的
// p1 =creatPromise(true)
// .then(data =>console.log(data))
// .catch(data =>console.log(err));

// p2 =creatPromise(false)
// .then(data =>console.log(data))
// .catch(err =>console.log(err));

// -----------------------範例------------------
// function getData(name) {
//     if (name == "Wilson") {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({ name: "Wilson", age: Math.floor(Math.random() * 10) });
//             });
//         })
//     }
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject(new Error("QQQ 烙賽"));
//             });
//         })
//     }
// }

// function getMovie(age) {
//     if (age < 12) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({ text: "cartoon" });
//             }, 1500)
//         });
//     }
//     else if (age < 18) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({ text: "teen" });
//             }, 1500)
//         });
//     }
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject({ text: "老輝阿" });
//             }, 1500)
//         });
//     }
// }
// ------------------------------------------------------

// 顯示方法一
// getData("Wilson").then(obj => {
//     // 這邊的return要記得加上
//     return getMovie(obj.age);})
//     .then(meg => {
//     console.log(meg.text)})
//     .catch(e => {
//         console.log(e);
//     });

// 顯示方法二
// async await try catch 
// try catch使用方法 把可能會出錯的東西都丟進try裡 出問題用catch接住

// async function showMovie() {
//     try {
//         const obj = await getData("Wilson");
//         const movie = await getMovie(obj.age);
//         console.log(movie.text);
//     }
//     catch (e) {
//         console.log(e);
//     }

// }
// showMovie();

// --------------Fetch-------------------------------------------------

// async function getJoke(){
//     let joke= await fetch("https://v2.jokeapi.dev/joke/Any")
//     // 這邊可以串then catch去看他的狀態
//     // .then((d)=>{
//     //     console.log(d);
//     // })
//     // .catch((e)=>{
//     //     console.log(e);
//     // })
//     // 要多做這個他才會顯示喔!
//     let parseDate=await joke.json();
//     console.log(parseDate);
// }

// getJoke();



// let myKey= "2edda353d6100b3ce77073650194f836";
// let City = "Taipei";
// let url =`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${myKey}`;

// async function getWeather(){
//     let d= await fetch(url);
//     let dj=await d.json();
//     console.log(dj);
// }

// getWeather();

async function getData(){
    let d= await fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-FB338017-AA11-4A76-9FA1-6E4AEAE092A4&format=JSON");
    let dj=await d.json();
    console.log(dj);
};

getData();
