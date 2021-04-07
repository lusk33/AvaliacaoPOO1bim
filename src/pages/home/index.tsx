/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Form, Perfil } from './styles';

interface User {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;

}

const Home: React.FC = () => {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setPhone] = useState('');

  const [profiles, setProfiles] = useState<User[]>(() => {
    const repoLC = localStorage.getItem('@ProfilesExplorer:profiles');
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@ProfilesExplorer:profiles',
      JSON.stringify(profiles),
    );
  }, [profiles]);

  function submitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const profileSubmit: User = {
      id: String(Math.random() * 10000).substring(0, 4),
      nome,
      email,
      cpf,
      telefone,
    };
    setProfiles([...profiles, profileSubmit]);
  }

  return (
    <>
      <h1>CadastroUsuários.com</h1>

      <Form onSubmit={submitForm}>
        <div className="form-input">
          <label>Nome:</label>
          <input
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>email:</label>
          <input
            placeholder="Digite seu email"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>CPF:</label>
          <input
            placeholder="Digite seu cpf"
            value={cpf}
            onChange={(e: any) => {
              setCpf(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>Phone:</label>
          <input
            placeholder="Digite seu telefone"
            value={telefone}
            onChange={(e: any) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <button type="submit">Cadastre</button>
        </div>
      </Form>

      <Perfil>
        {profiles.map((prof: User, index: number) => (
          <li key={prof.id}>
            <Link to={`/profile/${index}`}>{prof.nome}</Link>
          </li>
        ))}
      </Perfil>

    </>
  );
};

export default Home;
