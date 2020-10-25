import React,{useEffect,useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import {StatusCodes} from 'http-status-codes'

import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {    
    Container,
    Grid,
    Button, 
    Form,    
    Input,    
    InputText, 
    Label, 
    Table, 
    TableIcons, 
  } from '../../styles'

import http from '../../http'
import {ISaidaVeiculos} from '../../estrutura'

function SaidasVeiculo() {

    const router = useHistory()

    const  [items,setItems] = useState<ISaidaVeiculos[]>([])
    const  [urlParams,setUrlParams] = useState({})
  
    const find = async (params:Object)=>{
  
        const response = await http.Saida.Find(params)
        const items = await response.json()
        setItems(items)
    }
  
    useEffect(()=>{
        find({})
    },[])
  
  return (
     <div>
         <Container>
             <Grid>
               <h2>Saídas de Veículos</h2>                   
                   <div>
                      <Link to="/saidas/form" className="ver-form">Nova Saída</Link>
                   </div>
                   {items.length > 0 && (
                       <Table>
                       <table className="table">
                            <thead>
                                <tr>
                                    <th className="radius-left">#</th>
                                    <th>Motorista</th>
                                    <th>Placa</th>                                
                                    <th>Marca</th>
                                    <th>Cor</th>
                                    <th>Saída</th>
                                    <th>Entrada</th>
                                    <th className="radius-right">Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item,idx)=>{
                                    return (
                                        <tr key={idx}>
                                            <td>{item.id}</td>
                                            <td>{item.motorista.nome}</td>       
                                            <td>{item.veiculo.placa}</td>
                                            <td>{item.veiculo.marca}</td>
                                            <td>{item.veiculo.cor}</td>                               
                                            <td>{item.dataSaida}</td>                                            
                                            <td>{item.dataEntrada}</td>
                                            <td>
                                            <TableIcons>
                                                <span onClick={()=> router.push(`/saidas/form/${item.id}`)}><FontAwesomeIcon icon={faEdit} /></span>                                     
                                            </TableIcons>
                                            </td>
                                        </tr>
                                    )
                                })}                             
                            </tbody>
                       </table>
                       </Table> 
                   )}                  
             </Grid>
        </Container>
     </div>
  );
}

export default SaidasVeiculo;
