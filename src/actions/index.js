export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export const addRecipe = ({day, recipe, meal}) => ({
    type: ADD_RECIPE,
    day,
    recipe,
    meal
});


export const removeFromCalendar = ({day, meal}) => ({
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
});