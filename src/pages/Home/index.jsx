import { useRef } from 'react';
import api from '../../services/api'
import { useNavigate } from 'react-router-dom';

import {
  Title,
  Conteiner,
  ConteinerInputs,
  Input,
  Form,
  InputLabel
} from './styles';

import Button from '../../components/Button';
import TopBackgound from '../../components/topbackground';


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    console.log(data)
  }

  return (
    <Conteiner>
      <TopBackgound />
      <Form>
        <Title>Cadastrar Usuário</Title>
        <ConteinerInputs>

          <div>
            <InputLabel>
              Nome <span> *</span>
              <Input type='text' placeholder='Nome do Usuário' ref={inputName} />
            </InputLabel>
          </div>
          <div>
            <InputLabel>
              Idade <span> *</span>
              <Input type='number' placeholder='Idade do Usuário' ref={inputAge} />
            </InputLabel>
          </div>
        </ConteinerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail <span> *</span>
            <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail} />
          </InputLabel>
        </div>

        <Button type='button' onClick={registerNewUser} theme='primary'>
          Cadastrar Usuario

        </Button>
      </Form>
      <Button type='button' onClick={() =>navigate('/lista-de-usuarios')}>
         Ver Lista de Usuários
      </Button>
    </Conteiner>
  );
}

export default Home;