import React,{useEffect,useState} from 'react';
 
 
import http from '../../http'
import {ILogs} from '../../estrutura'

 
import { faBook } from '@fortawesome/free-solid-svg-icons';
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

   

  const  [items,setItems] = useState<ILogs[]>([])
   

  const find = async (params:Object)=>{
    
      const response = await http.Log.Find(params)
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
               <h2> Logs</h2>                   
                  
                   {items.length > 0 && (
                     <Table>
                     <table className="table">
                           <thead>
                               <tr>
                                 <th className="radius-left">#</th>
                                 <th>Metodo</th>
                                 <th>Table</th>   
                                 <th>Data</th>                             
                                 <th className="radius-right"></th>   
                               </tr>                            
                           </thead>
                           <tbody>
                              {items.map((item,idx)=>{
                                  return (
                                   <tr key={idx}>
                                       <td>{item.id}</td>
                                       <td>{item.method}</td>
                                       <td>{item.table}</td>   
                                       <td>{item.dataCriacao}</td>                            
                                       <td></td>                                
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
