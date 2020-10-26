//1. Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

let myArr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];

console.log(Math.max(...myArr));

//2. Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

let datas = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];

let strArray = datas.filter(data => {
  return typeof(data) === 'string';
})
console.log(strArray);

//3. Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);

let people = [
    {
    name: "Yura",
    age: 55,
    hobby: ["football", "ski", "hiking"],
    type: "Admin"
  },

    {
    name: "Yulian",
    age: 28,
    hobby: ["films", "games", "hiking"],
    type: "user"
  }, 

    {
    name: "Taras",
    age: 38,
    hobby: ["hunting", "TV", "javascript"],
    type: "user"
  }
]


showUsers = function () {
  for (i = 0; i < people.length; i++) {
    if (people[i].type === 'user') {
      console.log(people[i].name);
    }
  }
}
showUsers();

// showHikingHobby = function () {
//   for (i = 0; i < people.length; i++) {
//     if (people[i].hasOwnProperty('hobby') && people.hobby.includes('hiking') {
//     console.log(people[i].name);
//     }
//   }
// }
// showHikingHobby();

let toHirePeople = confirm(`Do you want to hire users?`);
if (toHirePeople === true) {
  alert('Users got a new job!')
} else {
  alert("Users didn't geta new job, they need to improve their skills =(");
}

//4. Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.
