import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4"
            alt="Marco Pinho"
          />
          <div>
            <strong>Marco Pinho</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4"
            alt="Marco Pinho"
          />
          <div>
            <strong>Marco Pinho</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4"
            alt="Marco Pinho"
          />
          <div>
            <strong>Marco Pinho</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
