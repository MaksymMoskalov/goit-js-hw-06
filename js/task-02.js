const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

const ingredientItems = ingredients.map((element) => {
  const elementOfIngreds = document.createElement("li");
  elementOfIngreds.textContent = element;
  elementOfIngreds.classList.add("item");
  return elementOfIngreds;
});

listEl.append(...ingredientItems);
