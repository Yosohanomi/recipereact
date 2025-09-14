const data = require('../recipes.json')

export const Recipe = (data) => {
    console.log(data)
    return <ul>  {
        data.data.map(recipe => {
            return <li>
                                <p>{recipe.name}</p>
                                <p>{recipe.time}</p>
                                <p>{recipe.servings}</p>
                                <p>{recipe.calories}</p>
                                <p>{recipe.difficulty}</p>
                                <img src={recipe.image}></img>
            </li>
        })
    }
    </ul>
}