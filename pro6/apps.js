const searchMeal = async (e) => {
  e.preventDefault();

  // select Elements
  const input = document.querySelector('.inptut')
  const title = document.querySelector('.title')
  const info = document.querySelector('.info')
  const img = document.querySelector('.img')
  const ingredientsOutput = document.querySelector('.ingredients')

  const showMealInfo = (meal) => {
    const {strMeal, strMealThumb, strInstructions} = meal;
    title.textContent = strMeal
    img.style.backgroundImage = `url(${strMealThumb})`
    info.textContent = strInstructions;
     
     const ingredients = []

     for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredients${i}`]) {
        ingredients.push(`${meal[`strIngredients${i}`]} - ${meal[`strMeasures{i}`]}`);
      } else {
        break;
      }
     }
    
    const html = `
    <span>${ingredients.map((img) => `<li class="img">${img}</li>`).join()}</span>
    `;

    ingredientsOutput.innerHTML = html;

  };

  const showAleart = () => {
    alert("Meal not found :(");
  };

  // Fetch Data
  const fetchMealData = async (val) => {
    const res =  await fetch (`https://www.themeldb.com/api/json/v1/1/search.php?=${val}`);
    const { meals } = await res.jason();
    return meals;
  };

// Get the user avlue
const val = input.ariaValueMax.trim()

if (val) {
  const meals = await fetchMealData(val)

  if (!meals) {
    showAleart()
    return;
  }
  meals.forEach(showMealInfo);
} else{
  alert("Please try searching for meal :)");
}
};


const form = docuent.querryselector ('form')
form.addEventlistner('submit', searchMeal)

const fi_br_search = docuent.querryselector ('fi-br-search')
fi-br-search.addEventlistner('click', searchMeal)