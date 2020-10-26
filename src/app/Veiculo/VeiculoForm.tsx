import React,{useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';

import { useForm } from 'react-hook-form';



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

import http from '../../http'

import {IVeiculo} from '../../estrutura'

interface IParams {
  id:Number | any, 
}

function VeiculoForm() {

  const router = useHistory()
  const urlParams = useParams<IParams>()

  const { register, handleSubmit,setValue,  errors } = useForm<IVeiculo>();

  const [idVeiculo,setIdVeiculo] = useState<Number | undefined>(undefined)

  useEffect(()=>{
         
    if(urlParams.id !== undefined){
      
          const findbyid = async () =>{
              
                const response = await http.Veiculo.FindbyID(urlParams.id)
                const data: IVeiculo = await response.json()
                
                setIdVeiculo(data.id)
                setValue("placa",data.placa)
                setValue("marca",data.marca)
                setValue("cor",data.cor)                 

          }
          findbyid()
    }
},[urlParams,setValue])

  const onSubmit = async (payload:IVeiculo) => {
    
    if(idVeiculo !== undefined){
        payload.id = idVeiculo
    }
    
    try {

      const response = await http.Veiculo.Save(payload)
      const item  = await response.json()

      if(item.id){
          alert("Salvo com sucesso")
          voltarPagina()
      }
      
    } catch (error) {
      const err = await error.json()
      alert(err.message)
    }

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
                            <Input name="marca" ref={register({required:true})} />
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