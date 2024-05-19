//Визначення масиву об'єктів
let itemsArray = [
    {
        firstName: "Віталій",
        lastName: "Щатківський",
        age: 43,
        subject: "CS",
        photo:"",
        url:"",
    },

    {
        firstName: "Наталія",
        lastName:"Венцель",
        age: 18,
        subject: "Адміністратор",
        photo:"",
        url:"",
    },
    {
        firstName: "Наталія",
        lastName:"Кучер",
        age: 18,
        subject: "Фізика",
        photo:"",
        url:"",
    },
]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Створення блоків по кількості елементів масиву
    itemsArray
    //Сортування за прізвищем
    //.sort((a,b)=> a.lastName.localeCompare(b.lastName))
    .forEach((item, index) => {
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML +=
            `
            <div class = "item">
                <h2>Вчитель № ${index + 1} з  ${itemsArray.length}</h2>
                <p>${item.firstName} ${item.lastName}</p>
                <p>Предмет: ${item.subject}</p>
                <p><img src = "${item.photo}" class = "item-image"></p>
                <p><a href = "${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
                <p><a href= "malito:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"
                class = "price"> Написати </a></p>
            </div>
            `
    })

}else{
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}