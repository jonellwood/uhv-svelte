export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Post Title',
    },
    {
      name: 'sample',
      type: 'string',
      title: 'Sample',
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
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotpot: true,
      },
    },
  ],
}
