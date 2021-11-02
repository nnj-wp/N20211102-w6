import logo from './logo.svg';
import './App.css';
import Menu_51 from './component/Menu_51';
import items from './data';
import { useState } from 'react';

function App_51() {
  const [menuItems, setMenuItem] = useState(items);
  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn">
              all
            </button>
            <button type="button" className="filter-btn">
              breakfast
            </button>
            <button type="button" className="filter-btn">
              lunch
            </button>
            <button type="button" className="filter-btn">
              shakes
            </button>
          </div>
          <Menu_51 items={items}/>
        </section>
      </main>
    </div>
  );
}

export default App_51;
