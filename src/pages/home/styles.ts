import styled from 'styled-components';


export const Form = styled.form`

  display: flex;
  margin: 0 auto;
  padding: 3rem 0;
  justify-content: center;
  align-items: center;
  max-width: 300px;
`;

export const Title = styled.h1`
  max-width: 200px;
  line-height: 100px;
  margin-left: 300px;
  font-size: 128px;
  color: brown;
  align-self:center;

`;

export const Perfil = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 20px;

    a {
      text-decoration: none;
    }
  }
`;
