import images from './images';

const menuItems = [
  {
    name: "Dish 1",
    price: "$10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/image1.jpg",
    position: { x: 6, y: 33 }, // Converted to percentages
  },
  {
    name: "Dish 2",
    price: "$12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/image2.jpg",
    position: { x: 27, y: 12 }, // Converted to percentages
  },
  {
    name: "Dish 3",
    price: "$8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/image3.jpg",
    position: { x: 47, y: 40 }, // Converted to percentages
  },
  {
    name: "Dish 4",
    price: "$15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/image4.jpg",
    position: { x: 14, y: 63 }, // Converted to percentages
  },
  {
    name: "Dish 5",
    price: "$9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/image5.jpg",
    position: { x: 77, y: 19 }, // Converted to percentages
  },
  {
    name: "Dish 6",
    price: "$11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/image6.jpg",
    position: { x: 82, y: 60 }, // Converted to percentages
  },
  // Add more menu items...
];



const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards, menuItems};
