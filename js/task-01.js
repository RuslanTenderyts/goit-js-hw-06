// const categoryCount = document.querySelectorAll("#categories .item").length;
// console.log("Кількість категорій в ul#categories :", categoryCount , "од.")

// const liTitle = document.querySelectorAll("#categories .item h2");
// const elLiCat = document.querySelectorAll("#categories .item ul ")

// for (let i = 0; i < categoryCount; i += 1) {
    
//     console.log(`Категорія ${liTitle[i].textContent}`)
//     console.log(`Елементи ${elLiCat[i].childElementCount}`)
    
// }


const categoryEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryEl.length}`);

categoryEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
    
});









