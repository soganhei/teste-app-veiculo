import React from 'react';
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

function Veiculos() {
  return (
     <div>
         <Container>
             <Grid>
               <h2>Veículos</h2>
                   <Form>                     
                        <InputText>
                            <Label>Placa</Label>
                            <Input />
                        </InputText> 
                        <InputText>
                            <Label>Cor</Label>
                            <Input />
                        </InputText> 
                        <InputText>
                            <Label>Marca</Label>
                            <Input />
                        </InputText>                         
                        <Button  className="btn">Buscar</Button>
                   </Form>
                   <div>
                      <Link to="/veiculos/form" className="ver-form">Novo Veículo</Link>
                   </div>
                   <Table>
                    <table className="table">
                          <thead>
                             <tr>
                                <th className="radius-left">#</th>
                                <th>Placa</th>
                                <th>Cor</th>
                                <th>Marca</th>
                                <th className="radius-right">Ação</th> 
                              </tr>                            
                          </thead>
                          <tbody>
                              <tr>
                                <td>1</td>
                                <td>XXX-432</td>
                                <td>Palio</td>
                                <td>Azul</td>
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

export default Veiculos;
