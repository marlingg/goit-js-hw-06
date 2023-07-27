const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((categoryItem) => {

    const categoryTitle = categoryItem.firstElementChild.textContent;
    const elementsList = categoryItem.lastElementChild.children;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsList.length}`);

});