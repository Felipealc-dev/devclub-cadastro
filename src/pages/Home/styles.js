import styled from 'styled-components'

export const Title = styled.h2`
color: #fff;
text-align: center;
font-size:30px;
font-style: normal;
font-weight: 600;
`

export const Conteiner = styled.div`
background-color: #181f36;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
height: 100vh;
padding: 20px;
`
export const ConteinerInputs = styled.div`
display: flex;
gap: 20px;

`
export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 12px 20px;
outline: none;
width: 100%;
`

export const InputLabel = styled.label`
color: #fff;
font-size: 12px;
font-weight: 500;


span{
    color: #ef4f45;
    font-weight: bold;
}
`
export const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;


`


