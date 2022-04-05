import { Category, Menu, Product, ProductFlag } from 'src/interfaces/app';

const categories = [
  'Бургеры',
  'Твистеры',
  'Курица',
  'Баскеты',
  'Снэки',
  'Соусы',
  'Напитки',
  'Кофе и чай',
  'Десерты',
  'Хиты по 50',
];
const productNames = [
  'Бургер',
  'Твистер',
  '3 Стрипса',
  'Баскет',
  'Снэк',
  'Соус',
  'Напиток',
  'Кофе и чай',
  'Десерт',
  'Хит за 50',
];
const categoriesImages = ['burger', 'boxmaster', 'stripes'];

export const generatorProductData = () => {
  const staticPath = 'https://rentateam-test-task-server.herokuapp.com';

  const menuData: Menu = {
    categories: [],
  };
  for (let i = 0; i < 10; i++) {
    const category: Category = {
      id: `Category${i}`,
      name: categories[i],
      products: [],
    };
    for (let j = 0; j < 7; j++) {
      const product: Product = {
        id: String(j + 10 * i),
        name: `${productNames[i]} ${j}`,
        flag:
          j === 0
            ? ProductFlag.new
            : Math.round(Math.random())
            ? ProductFlag.hit
            : ProductFlag.default,
        price: i === 9 ? 50 : (j + 1) * 10,
        delivery: j % 2 === 1,
        img: `${staticPath}/static/${categoriesImages[i % 3]}.png`,
      };
      category.products.push(product);
    }
    menuData.categories.push(category);
  }
  return menuData;
};
