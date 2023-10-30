export default {
  title: "Arcana",
  name: "arcana",
  type: "document",
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    {
      title: "Arcana Name",
      name: "name",
      type: "string",
    },
    { title: "Content", name: "content", type: "string" },

    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "timestamp",
      name: "createAt",
      type: "datetime",
    },

    {
      title: "Arcana Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true // <-- Defaults to false
      }
    },
    {
      title: "Image URL",
      name: "imageUrl",
      type: "url",
     
    },
  
  ],
};
