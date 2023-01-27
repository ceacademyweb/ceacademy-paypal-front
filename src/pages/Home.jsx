import React from 'react';
import addClass from '../utils/addClass';
import { Link } from 'react-router-dom';

const Home = () => {
  addClass();
  return (
    <section class="section HomePage">
      <aside className="btn-suscripcion">
        <Link to="/suscripcion">
          <p>Suscribete a </p>
          <img src="/img/logo.svg" alt="" />
        </Link>
      </aside>
    </section>
  );
};

export default Home;
