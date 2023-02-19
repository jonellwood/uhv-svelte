export default {
  name: 'workout',
  type: 'document',
  title: 'Workout',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Workout type',
      initialValue: 'running',
      options: {
        list: [
          {title: 'Walking', value: 'walking'},
          {title: 'Running', value: 'running'},
        ],
      },
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
    },
    {
      name: 'starttime',
      type: 'datetime',
      title: 'Starting Time',
    },
    {
      name: 'endtime',
      type: 'datetime',
      title: 'Ending Time',
    },
    {
      name: 'calories',
      type: 'number',
      title: 'Calories burned',
    },
    {
      name: 'distance',
      type: 'number',
      title: 'Distance',
    },
    {
      name: 'unit',
      type: 'string',
      title: 'Unit of Measure',
      initialValue: 'miles',
      options: {
        list: [
          {title: 'Miles', value: 'miles'},
          {title: 'Kilometers', value: 'kilometers'},
        ],
      },
    },
  ],
}
