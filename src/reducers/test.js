const initialCalendarState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
}

function mapStateToProps(calendar) {

    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    return {
        calendar: dayOrder.map((day) => ({
            day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {

                meals[meal] = calendar[day][meal]
                    ? calendar[day][meal]
                    : null

                return meals
            }, {})
        })),
    }
}

//mapStateToProps(initialCalendarState)

let arrayOf = Object.keys(initialCalendarState['monday'])

console.log(arrayOf)