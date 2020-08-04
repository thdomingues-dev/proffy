import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/55956799?s=460&u=48f1deaf5346122eb1fbe89e18f45324363becef&v=4" alt="Thales Domingues" />
        <div>
          <strong>Thales Domingues</strong>
          <span>Algoritmos</span>
        </div>
      </header>

      <p>
        Descriação.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
              </button>
      </footer>
    </article>
  );
}

export default TeacherItem;