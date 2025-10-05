interface SweetData {
  id: number;
  title: string;
  description: string;
  price: number;
}

const SWEET_DATA_LIST: SweetData[] = [
  {
    id: 0,
    title: "Powder Sugar Yellow Cake",
    description:
      "Soft, buttery cake topped with a gentle sprinkle of powdered sugar and a hint of vanilla.",
    price: 25.0,
  },
  {
    id: 1,
    title: "Blueberry Muffins",
    description:
      "Moist, golden muffins bursting with juicy blueberries-baked to perfection.",
    price: 20.0,
  },
  {
    id: 2,
    title: "Beignets",
    description:
      "Light, pillowy delights dusted with sugar-pure bliss in every bite! ",
    price: 15.0,
  },
];

export default SWEET_DATA_LIST;
