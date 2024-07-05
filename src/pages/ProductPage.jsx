import { useState } from 'react';
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import styles from './ProductPage.module.css';

const products = [
  { id: 1, name: 'Wemby One', description: 'Chaussure pour homme', price: '99.99', colors: 'Noir', sex: 'Homme', sport: 'Basket', image: '/Paire1.png' },
  { id: 2, name: 'Wemby Air', description: 'Chaussure pour homme', price: '79.99', colors: 'Blanc', sex: 'Homme', sport: 'Running', image: '/Paire2.png' },
  { id: 3, name: 'Wemby Elv', description: 'Chaussure pour homme', price: '59.99', colors: 'Blanc', sex: 'Homme', sport: 'Running', image: '/Paire3.png' },
  { id: 4, name: 'Wemby Panda', description: 'Chaussure pour homme & femme', price: '79.99', colors: 'Noir', sex: 'Femme', sport: 'Basket', image: '/Paire4.png' },
  { id: 5, name: 'Wemby Dash', description: 'Chaussure pour homme', price: '79.99', colors: 'Noir', sex: 'Homme', sport: 'Running', image: '/Paire5.png' },
  { id: 6, name: 'Wemby Vagar', description: 'Chaussure pour homme', price: '69.99', colors: 'Vert', sex: 'Femme', sport: 'Basket', image: '/Paire6.png' },
];

function ProductPage() {
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState({});
  const [priceFilter, setPriceFilter] = useState(false);
  const [sexFilter, setSexFilter] = useState(false);
  const [colorFilter, setColorFilter] = useState(false);
  const [sportFilter, setSportFilter] = useState(false);

  const handleSortChange = (sortCriteria) => {
    setSortBy(sortCriteria);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({});
    setSortBy('');
  };

  let filteredProducts = products;

  if (filters.sex) {
    filteredProducts = filteredProducts.filter(product => product.sex === filters.sex);
  }
  if (filters.color) {
    filteredProducts = filteredProducts.filter(product => product.colors === filters.color);
  }
  if (filters.sport) {
    filteredProducts = filteredProducts.filter(product => product.sport === filters.sport);
  }

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    } else if (sortBy === 'price-desc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <section className={styles.productPage}>
      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.filterHeader}>
            
          </div>
          <div className={`${styles.filterGroup} ${sexFilter ? styles.open : ''}`}>
            <h3 className={styles.h3} onClick={() => setSexFilter(!sexFilter)}>Sexe <IoIosArrowDown className={sexFilter ? styles.rotated : ''} /></h3>
            {sexFilter && (
              <>
                <button className={styles.buttonFilter} onClick={() => handleFilterChange('sex', 'Homme')}>Homme</button>
                <button className={styles.buttonFilter} onClick={() => handleFilterChange('sex', 'Femme')}>Femme</button>
              </>
            )}
          </div>
          <div className={`${styles.filterGroup} ${priceFilter ? styles.open : ''}`}>
            <h3 className={styles.h3} onClick={() => setPriceFilter(!priceFilter)}>Prix <IoIosArrowDown className={priceFilter ? styles.rotated : ''} /></h3>
            {priceFilter && (
              <>
                <button className={styles.buttonFilter} onClick={() => handleSortChange('price-asc')}>Prix Croissant</button>
                <button className={styles.buttonFilter}onClick={() => handleSortChange('price-desc')}>Prix Décroissant</button>
              </>
            )}
          </div>
          <div className={`${styles.filterGroup} ${colorFilter ? styles.open : ''}`}>
            <h3 className={styles.h3} onClick={() => setColorFilter(!colorFilter)}>Couleurs <IoIosArrowDown className={colorFilter ? styles.rotated : ''} /></h3>
            {colorFilter && (
              <>
                <button className={styles.buttonFilter} onClick={() => handleFilterChange('color', 'Noir')}> Noir</button>
                <button className={styles.buttonFilter} onClick={() => handleFilterChange('color', 'Blanc')}>Blanc</button>
                <button className={styles.buttonFilter} onClick={() => handleFilterChange('color', 'Vert')}>Vert</button>
              </>
            )}
          </div>
          <div className={`${styles.filterGroup} ${sportFilter ? styles.open : ''}`}>
            <h3 className={styles.h3} onClick={() => setSportFilter(!sportFilter)}>Sports <IoIosArrowDown className={sportFilter ? styles.rotated : ''} /></h3>
            {sportFilter && (
              <>
                <button className={styles.buttonFilter} onClick={() => handleFilterChange('sport', 'Basket')}>Basket</button>
                <button className={styles.buttonFilter} onClick={() => handleFilterChange('sport', 'Running')}>Running</button>
              </>
            )}
          </div>
          <a className={styles.closeFiltre}onClick={handleResetFilters}><IoIosClose/> Réinitialiser les filtres</a>
        </aside>
        <div className={styles.productList}>
          {sortedProducts.map(product => (
            <a href='/produit' key={product.id} className={styles.productCard}>
              <img className={styles.productImage}src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.colors}</p>
              <p className={styles.price}>{product.price} €</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
