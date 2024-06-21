const categories = document.querySelectorAll('.item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul li').length;
    console.log(`Категорія: ${categoryName} Кількість елементів: ${categoryItems}`);
});