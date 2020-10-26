import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {useHistory,useParams} from 'react-router-dom';



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

import {IMotorista} from '../../estrutura'

interface IParams {
  id:Number | any, 
}

function MotoristaForm() {

  const router = useHistory()
  const urlParams = useParams<IParams>()

  const { register, handleSubmit,setValue, errors } = useForm<IMotorista>();
  
  const [idMotorista,setIdMotorista] = useState<Number | undefined>(undefined)

  useEffect(()=>{
         
          if(urlParams.id !== undefined){
            
                const findbyid = async () =>{
                    
                      const response = await http.Motorista.FindbyID(urlParams.id)
                      const data: IMotorista = await response.json()
                      
                      setIdMotorista(data.id)
                      setValue("nome",data.nome)
                       

                }
                findbyid()

          }
  },[urlParams,setValue])

  const onSubmit = async (payload:IMotorista) => {

            if(idMotorista !== undefined){
                payload.id = idMotorista
            }
            
            try {

              const response = await http.Motorista.Save(payload)
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
                            <Input name="nome" autoComplete="off" ref={register({required:true, minLength:3})} />
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