const categoriesItems = document.querySelectorAll(".item");
const categoriesNumbers = categoriesItems.length;

console.log(`Number of categories: ${categoriesNumbers}`);

categoriesItems.forEach((element) => {
    
    const nameCategory = element.firstElementChild.textContent;
    const numbersItems = element.lastElementChild.children.length;

    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${numbersItems}`);
})
