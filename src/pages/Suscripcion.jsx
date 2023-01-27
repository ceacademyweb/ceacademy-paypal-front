import React from 'react';
import addClass from '../utils/addClass';

const Suscripcion = () => {
  addClass();
  alert('aler´t');
  const buttonAction = async () => {
    const loading = document.createElement('div');
    loading.className = 'Moldal-loading';
    loading.innerHTML = `
      <img src="/img/load.svg" alt="">
    `;
    document.body.appendChild(loading);
    const response = await fetch(
      'https://ceacademy-paypal-back-production.up.railway.app/create-order',
      {
        method: 'POST',
      }
    );
    const data = await response.json();
    window.location.href = data.links[1].href;
  };
  return (
    <section className="section Suscripcion">
      <div className="paypal-container" onClick={buttonAction}>
        <p>Pan de Suscripción Mensual</p>
        <p>USD $200.00</p>
        <img src="/img/paypalbuttons.png" alt="" />
      </div>
    </section>
  );
};

export default Suscripcion;
