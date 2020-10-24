import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import Autocomplete from 'react-autocomplete'

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

import {FormSaidaVeiculo,Motorista,Veiculo} from '../../estrutura'

function SaidasVeiculoForm() {

  const router = useHistory()

  const { register, handleSubmit, errors } = useForm<FormSaidaVeiculo>();

  const [motoristas,setMotoristas] = useState<Motorista[]>([])
  const [nomeMotorista,setNomeMotorista] = useState("")

  const [veiculos,setVeiculos] = useState<Veiculo[]>([])
  const [nomeVeiculo,setNomeVeiculo] = useState("")
 
  

  const onSubmit = async (payload:FormSaidaVeiculo) => {
    console.log(payload.idMotorista);
  };

  const voltarPagina = ()=>{
     router.push("/")
  }

  return (
     <div>
         <Container>
             <Grid>
               <h2>Saídas</h2>
                   <Form onSubmit={handleSubmit(onSubmit)}>                     
                        <InputText>
                            <Label>Motoristas</Label>
                            <Autocomplete            
                             inputProps={{className:"input-autocomplete", placeholder:"Buscar motoristas"}}                 
                             items={motoristas}
                             value={nomeMotorista}                             
                             getItemValue={item => item.label}
                             onChange={(e)=>{
                                 if(e.target.value !== undefined){
                                     setNomeMotorista(e.target.value)                                 
                                     console.log(nomeMotorista)
                                 }
                             }}
                             renderItem={(item, highlighted) =>
                                <div
                                  key={item.id}
                                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                >
                                  {item.label}
                                </div>
                              }
                            />
                            {errors.motorista && <TextError>Nome obrigatório</TextError>}
                        </InputText>  
                        <InputText>
                            <Label>Veículos</Label>
                            <Autocomplete            
                             inputProps={{className:"input-autocomplete", placeholder:"Buscar veículos"}}                   
                             items={veiculos}
                             value={nomeVeiculo}                             
                             getItemValue={item => item.label}
                             onChange={(e)=>{
                                 if(e.target.value !== undefined){
                                     setNomeVeiculo(e.target.value)                                 
                                     console.log(nomeVeiculo)
                                 }
                             }}
                             renderItem={(item, highlighted) =>
                                <div
                                  key={item.id}
                                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                >
                                  {item.label}
                                </div>
                              }
                            />
                            {errors.motorista && <TextError>Nome obrigatório</TextError>}
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

export default SaidasVeiculoForm;