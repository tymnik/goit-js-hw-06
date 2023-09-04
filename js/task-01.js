const categoryList = document.querySelector("#categories");
console.log(`Number of categories: ${categoryList.childElementCount}`);

const newArr = [...categoryList.children];
newArr.forEach((child) => {
  console.log(`Category: ${child.firstElementChild.textContent}`);
  console.log(`Elements: ${child.lastElementChild.childElementCount}`);
  return;
});
