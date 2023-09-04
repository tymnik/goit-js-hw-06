const categoryList = document.querySelectorAll('li.item');
let categoryCount = 0;
let totalElementCount = 0;
console.log(categoryList)

categoryList.forEach((category) => {
  const categoryName = category.querySelector('h2').innerText;
  const elementList = category.querySelectorAll('ul > li');
  const elementCount = elementList.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementCount}`);

  categoryCount++;
});

console.log(`Number of categories: ${categoryCount}`);
