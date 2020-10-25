import React,{useEffect,useState} from 'react';
import {StatusCodes} from 'http-status-codes';
import {Link, useHistory} from 'react-router-dom';

 
import http from '../../http'
import {IMotorista} from '../../estrutura'

 

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {    
  Container,
  Grid,
  Button, 
  Form,    
  Input,    
  InputText, 
  Label, 
  Table,
  TableIcons
} from '../../styles'

function Motoristas() {

  const router = useHistory()

  const  [items,setItems] = useState<IMotorista[]>([])
  const  [urlParams,setUrlParams] = useState({})

  const find = async (params:Object)=>{
    
      const response = await http.Motorista.Find(params)
      const items = await response.json()
      setItems(items)
  }

  useEffect(()=>{
    find({})
  },[])

  const handlerDelete = async (idMotorista:Number | undefined) => {

      if(!window.confirm("Deseja excluir?")){
          return ()=>{}
      }
      
      if(idMotorista != undefined){
        const response = await http.Motorista.Delete(idMotorista)
        
        if(response.status == StatusCodes.NO_CONTENT){             
          find({})
        }

      }
  }
 
  return (
     <div>
         <Container>
             <Grid>
               <h2>Motoristas</h2>                   
                   <div>
                      <Link to="/motoristas/form" className="ver-form">Novo Motorista</Link>
                   </div>
                   {items.length > 0 && (
                     <Table>
                     <table className="table">
                           <thead>
                               <tr>
                                 <th className="radius-left">#</th>
                                 <th>Nome</th>                                
                                 <th className="radius-right">Ação</th>   
                               </tr>                            
                           </thead>
                           <tbody>
                              {items.map((item,idx)=>{
                                  return (
                                   <tr key={idx}>
                                       <td>{item.id}</td>
                                       <td>{item.nome}</td>                               
                                       <td>     
                                         <TableIcons>
                                           <span onClick={()=> router.push(`/motoristas/form/${item.id}`)}><FontAwesomeIcon icon={faEdit} /></span>
                                           <span onClick={()=> handlerDelete(item.id)} className="trash"><FontAwesomeIcon icon={faTrash} /></span>
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

export default Motoristas;
