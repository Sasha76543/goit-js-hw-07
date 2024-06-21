const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.getElementById('ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    fragment.appendChild(li);
});

ingredientsList.appendChild(fragment);