//Визначення масиву об'єктів
let itemsArray = [
    {
        firstName: "Віталій",
        lastName: "Шатківський",
        age: 43,
        subject: "CS",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },

    {
        firstName: "Наталія",
        lastName:"Венцель",
        age: 18,
        subject: "Адміністратор",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    },
    {
        firstName: "Наталія",
        lastName:"Кучер",
        age: 18,
        subject: "Фізика",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
    {
        firstName: "Олена",
        lastName: "Геча",
        age: 18,
        subject: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    },
    {
        firstName: "Вікторія",
        lastName: "Нелипович",
        age: 18,
        subject: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    },
    {
        firstName: "Василь",
        lastName: "Бабій",
        age: 18,
        subject: "Фізкультура",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },
    {
        firstName: "Тарас",
        lastName: "Савінков",
        age: 18,
        subject: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    },
    {
        firstName: "Анжела",
        lastName: "Лознюк",
        age: 18,
        subject: "Українська мова, література",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    },
    {
        firstName: "Ірина",
        lastName: "Боровська-Карандюк",
        age: 18,
        subject: "Українська мова, література, зарубіжна література",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    },
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
        <div class = "item">
        <h2>Вчитель № ${index+1} з ${itemsArray.length}</h2>
        <p>${item.firstName} ${item.lastName}</p>
        <p>Предмет: ${item.subject}</p>
        <p><img src = "${item.photo}" class = "item-image"></p>
        <p><a href = ${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
        <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"
        class = "price"> Написати </a></p>
        
        </div>
        `
})
} else {
    //вивід повідомлення про не знайдений блок
    console.log('блок товарів не знайдено')
}