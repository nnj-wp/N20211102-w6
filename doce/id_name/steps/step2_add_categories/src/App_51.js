import logo from './logo.svg';
import './App.css';
import Menu_51 from './component/Menu_51';
import items from './data';
import { useState } from 'react';
import Category_51 from './component/Category_51';

const allCategories = [`all`, ...new Set(items.map((item) => item.category))];
console.log('allCategories', allCategories);

function App_51() {
  const [menuItems, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Category_51 categories={categories} />
          <Menu_51 items={items} />
        </section>
      </main>
    </div>
  );
}

export default App_51;
