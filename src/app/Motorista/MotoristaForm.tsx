import React from 'react';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import {    
  Container,
  Grid,
  Button, 
  Form,    
  Input,    
  InputText, 
  Label, 
  TextError, 
  Buttons, 
} from '../../styles'

import {Motorista} from '../../estrutura'

function MotoristaForm() {

  const router = useHistory()

  const { register, handleSubmit, errors } = useForm<Motorista>();

  const onSubmit = async (payload:Motorista) => {
    console.log(payload.nome);
  };

  const voltarPagina = ()=>{
     router.push("/motoristas")
  }

  return (
     <div>
         <Container>
             <Grid>
               <h2>Motoristas</h2>
                   <Form onSubmit={handleSubmit(onSubmit)}>                     
                        <InputText>
                            <Label>Nome</Label>
                            <Input name="nome" autoComplete="off" ref={register({required:true})} />
                            {errors.nome && <TextError>Nome obrigatório</TextError>}
                        </InputText>  
                        <Buttons>
                            <Button type="button" onClick={voltarPagina}  className="btn prev">Voltar</Button>
                            <Button type="submit"  className="btn">Salvar</Button>
                        </Buttons> 
                   </Form>                   
             </Grid>
        </Container>
     </div>
  );
}

export default MotoristaForm;