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
    Table, 
  } from '../../styles'

function SaidasVeiculo() {
  return (
     <div>
         <Container>
             <Grid>
               <h2>Saídas de Veículos</h2>
                   <Form>                     
                        <InputText>
                            <Label>Motorista</Label>
                            <Input />
                        </InputText>
                        <InputText>
                            <Label>Data Saída</Label>
                            <Input />
                        </InputText>
                        <InputText>
                            <Label>Data Entrada</Label>
                            <Input />
                        </InputText>
                        <Button  className="btn">Buscar</Button>
                   </Form>
                   <div>
                      <Link to="/saidas" className="ver-form">Nova Saída</Link>
                   </div>
                   <Table>
                   <table className="table">
                        <thead>
                            <tr>
                                <th className="radius-left">#</th>
                                <th>Motorista</th>
                                <th>Veículo</th>
                                <th>Placa</th>
                                <th>Modelo</th>
                                <th>Cor</th>
                                <th>Saída</th>
                                <th className="radius-right">Entrada</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <td>1</td>       
                               <td>xxx</td>
                               <td>xxx</td>
                               <td>xxx</td>
                               <td>xxx</td>
                               <td>xxx</td>
                               <td>xxx</td>
                               <td>xxx</td>
                            </tr>                             
                        </tbody>
                   </table>
                   </Table>                   
             </Grid>
        </Container>
     </div>
  );
}

export default SaidasVeiculo;
