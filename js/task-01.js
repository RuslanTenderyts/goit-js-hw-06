const categoryCount = document.querySelectorAll("#categories .item").length;
console.log("Кількість категорій в ul#categories :", categoryCount , "од.")

const liTitle = document.querySelectorAll("#categories .item h2");
const elLiCat = document.querySelectorAll("#categories .item ul ")

for (let i = 0; i < categoryCount; i += 1) {
    
    console.log(`Категорія ${liTitle[i].textContent}`)
    console.log(`Елементи ${elLiCat[i].childElementCount}`)
    
}











