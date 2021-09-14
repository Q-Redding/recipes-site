

const mealList = document.getElementById('app');
// get meal list that matches with the ingredients
function getMealList(){
    fetch('http://localhost:3001/recipes')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let html = "";
        if(data){
            data.forEach(meal => {
                html += `
                <div id="meal">
                        <div class="meal-item" data-id="${meal.uuid}">
                    <div class="meal-img">
                        <img src="${meal.images.medium}" alt="${meal.title}"/>
                    </div>    
                    <div class="meal-name">
                        <h3>${meal.title}</h1>
                        <p id="info">${meal.description}</p>
                    </div>
                    <p><b>Cook time:</b> ${meal.cookTime} mins</p>
                    <p><b>Prep time:</b> ${meal.prepTime}</p>
                    <p><b>Serving size:</b> ${meal.servings}</p>
                    <button id="recipe-btn">Get Recipes</button>

                    <div class="modal-container">
                        <div class="modal">
                            <h3>${meal.title}</h3>
                            <h3>${JSON.stringify(Object.values(meal)[10])}</h3>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
                `;
                
            });
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }
        
        mealList.innerHTML = html;
    });
}
getMealList();


