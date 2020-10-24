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

import {Veiculo} from '../../estrutura'


function VeiculoForm() {

  const router = useHistory()

  const { register, handleSubmit, errors } = useForm<Veiculo>();

  const onSubmit = async (payload:Veiculo) => {
    console.log(payload.cor);
  };

  const voltarPagina = ()=>{
     router.push("/veiculos")
  }

  return (
     <div>
         <Container>
             <Grid>
               <h2>Veículos</h2>
                   <Form onSubmit={handleSubmit(onSubmit)}>                     
                        <InputText>
                            <Label>Placa</Label>
                            <Input name="placa" autoComplete="off" ref={register({required:true})} />
                            {errors.placa && <TextError>Placa obrigatória</TextError>}
                        </InputText> 
                        <InputText>
                            <Label>Cor</Label>
                            <Input name="cor" ref={register({required:true})} />
                            {errors.cor && <TextError>Cor obrigatória</TextError>}
                        </InputText> 
                        <InputText>
                            <Label>Marca</Label>
                            <Input name="marca" autoComplete="off" ref={register({required:true})} />
                            {errors.marca && <TextError>Marca obrigatória</TextError>}
                        </InputText>  
                        <Buttons>
                            <Button type="button" onClick={voltarPagina} className="btn prev">Voltar</Button>
                            <Button type="submit" className="btn">Salvar</Button>
                        </Buttons> 
                   </Form>                   
             </Grid>
        </Container>
     </div>
  );
}

export default VeiculoForm;