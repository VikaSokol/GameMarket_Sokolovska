//Визначення масиву об'єктів
//let itemsArray = [
    //{
    //    firstName: "Віталій",
    //    lastName: "Шатківський",
    //   age: 43,
    //     subject: "CS",
    //     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    //     url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    // },

    // {
    //     firstName: "Наталія",
    //     lastName:"Венцель",
    //     age: 18,
    //     subject: "Адміністратор",
    //     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
    //     url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName:"Кучер",
    //     age: 18,
    //     subject: "Фізика",
    //     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
    //     url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    // },
    // {
    //     firstName: "Олена",
    //     lastName: "Геча",
    //     age: 18,
    //     subject: "Історія",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    // },
    // {
    //     firstName: "Вікторія",
    //     lastName: "Нелипович",
    //     age: 18,
    //     subject: "Математика",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    // },
    // {
    //     firstName: "Василь",
    //     lastName: "Бабій",
    //     age: 18,
    //     subject: "Фізкультура",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    // },
    // {
    //     firstName: "Тарас",
    //     lastName: "Савінков",
    //     age: 18,
    //     subject: "Англійська мова",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    // },
    // {
    //     firstName: "Анжела",
    //     lastName: "Лознюк",
    //     age: 18,
    //     subject: "Українська мова, література",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    // },
    // {
    //     firstName: "Ірина",
    //     lastName: "Боровська-Карандюк",
    //     age: 18,
    //     subject: "Українська мова, література, зарубіжна література",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    // },
//]

let itemsArray = [
  {
    email: "23b_lam@liceum.ztu.edu.ua",
    class: "10-Б 2",
    name: "Лещенко Настя",
    nickname: "dude настюшкі",
    author_photo: "Лещенко.jpg",
    game_photo: "Лещенко_game.jpg",
    github_project1: "https://github.com/Leschenko1001/Phaser2ndGame1?authuser=0",
    project1_demo: "https://leschenko1001.github.io/Phaser2ndGame1/?authuser=0",
    google_drive: "https://drive.google.com/drive/folders/1CqBXUS5Rk1u8nhEq3_l7LYMjDalYqPgW?usp=classroom_web&authuser=0",
    google_form: "https://forms.gle/aLmXJ7nEnjo6PGuZ8?authuser=0",
    github_project2: "https://github.com/Leschenko1001/GameMarket_Leschenko",
    project2_demo: "https://leschenko1001.github.io/GameMarket_Leschenko/?authuser=0",
    project2_market: "https://leschenko1001.github.io/GameMarket_Leschenko/market.html?authuser=0",
    project2_final: "https://leschenko1001.github.io/GameMarket_Leschenko/final/final.html?authuser=0"
  }
]

//отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//перевірка існування знайденого блоку
if (itemsDiv) {
    //створення блоків по кількості елементів 
    itemsArray.forEach((item, index) =>{
        // console.log(item)
        itemsDiv.innerHTML += 
        `
        <div class="item"> 

        <!-- блок назва товару  -->
        <div class="item-title">${item.nickname}</div>
        <div class="item-title">${item.class}</div>
        <div class="item-title">${item.email}</div>

        <!-- блок зображення товару  -->
        <div class="item-image">
          <img src="img/${item.author_photo}" class="image" />
          <img src="img/${item.game_photo}" class="image" />
        </div>

        <!-- блок з оплатою частинами -->
        <div class="parts-pay">
          <div><img src="photo/mono.png" alt="">${item.mono}</div>
          <div><img src="photo/pb.jpg" alt="">${item.pb}</div>
        </div>
        <!-- блок ціни -->
        <div class="price">
          <div><span>${item.prise_standart}</span> <sup>грн</sup></div>
          <div><span>${item.prise_discount}</span> <sup>грн</sup></div>
        </div>

        <!-- блок бонусної ціни  -->
        <div class="price bonus">
          <div>ціна за купоном</div>
          <div><span>${item.prise_coupon}</span> <sup>грн</sup></div>
        </div>
      </div>
      
        `
})
} else {
    //вивід повідомлення про не знайдений блок
    console.log('блок товарів не знайдено')
}
