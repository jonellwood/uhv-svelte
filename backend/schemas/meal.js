export default {
  name: 'meal',
  type: 'document',
  title: 'Meal',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Meal name',
      initialValue: 'breakfast',
      options: {
        list: [
          {title: 'Breakfast', value: 'breakfast'},
          {title: 'Lunch', value: 'lunch'},
          {title: 'Dinner', value: 'dinner'},
          {title: 'Snack', value: 'snack'},
        ],
      },
    },
    {
      name: 'calories',
      type: 'string',
      title: 'Calories',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description of meal',
    },
  ],
}
