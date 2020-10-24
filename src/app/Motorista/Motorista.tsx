import React,{useEffect,useState} from 'react';

 
import http from '../../http'
import {Motorista} from '../../estrutura'

import { Link } from "react-router-dom";

import {    
  Container,
  Grid,
  Button, 
  Form,    
  Input,    
  InputText, 
  Label, 
  Table
} from '../../styles'

function Motoristas() {

  const  [items,setItems] = useState<Motorista[]>([])
  const  [urlParams,setUrlParams] = useState({})

  useEffect(()=>{
       
        const motoristas = async ()=>{
            const response = await http.Motorista.ListarTodos({})
            console.log(response)
        }
        motoristas()

  },[])

  return (
     <div>
         <Container>
             <Grid>
               <h2>Motoristas</h2>
                   <Form>                     
                        <InputText>
                            <Label>Nome</Label>
                            <Input />
                        </InputText>                         
                        <Button type="button"  className="btn">Buscar</Button>
                   </Form>
                   <div>
                      <Link to="/motoristas/form" className="ver-form">Novo Motorista</Link>
                   </div>
                   <Table>
                    <table className="table">
                          <thead>
                              <tr>
                                <th className="radius-left">#</th>
                                <th>Motorista</th>
                                <th>Data Criação</th>
                                <th className="radius-right">Ação</th>   
                              </tr>                            
                          </thead>
                          <tbody>
                              <tr>
                                <td>1</td>
                                <td>Marcus Antonio</td>
                                <td>20/08/1992</td>
                                <td>                                  
                                </td>                                
                              </tr>                             
                          </tbody>
                    </table>
                   </Table>
             </Grid>
        </Container>
     </div>
  );
}

export default Motoristas;
