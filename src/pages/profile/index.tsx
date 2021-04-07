import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Form, Title} from './styles';

interface User{
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
}
interface Params {
  id: string;
}



const Profile: React.FC = () => {
  const { params } = useRouteMatch<Params>();

  const [profiles, setProfiles] = useState<User[]>(() => {
    const repoLC = localStorage.getItem('@ProfilesExplorer:profiles');
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  const profile: User = profiles[Number(params.id)];

  return (
    <>
    <Form>
      <Title>Bem Vindo!</Title>
      <p>Nome: {profile.nome}</p>
      <p>email: {profile.email}</p>
      <p>Telefone: {profile.telefone}</p>
      <p>CPF: {profile.cpf}</p>

    </Form>
    <Link to="/">Voltar</Link>
    </>
  );
};

export default Profile;
