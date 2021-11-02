import logo from './logo.svg';
import './App.css';
import Menu_51 from './component/Menu_51';
import items from './data';
import { useState } from 'react';
import Category_51 from './component/Category_51';

const allCategories = [`all`, ...new Set(items.map((item) => item.category))];
console.log('allCategories', allCategories);

function App_51() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == `all`) {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Category_51 categories={categories} filterItems={filterItems} />
          <Menu_51 items={menuItems} />
        </section>
      </main>
    </div>
  );
}

export default App_51;
