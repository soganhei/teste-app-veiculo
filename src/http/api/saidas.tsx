import api,{response} from './config'

import {IFormSaidaVeiculo} from '../../estrutura';
 
const http = {
     
    Save: async (payload:IFormSaidaVeiculo)=>{

        let method = "POST"
        let url = `${api}/saidas`
          
        if(payload.id !== undefined){
            method = "PUT"
            url = `${url}/${payload.id}`
        }

        return fetch(url,{
            method, 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            }, 
            body: JSON.stringify(payload) 
        }).then(response)

    },
    Find: async (params:any)=>{

        const url = `${api}/saidas?`+ new URLSearchParams(params)

        return fetch(url,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    },
    FindbyID: async (idSaida:Number)=>{

        return fetch(`${api}/saidas/${idSaida}`,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    }, 
    Delete: async (idSaida:Number)=>{

        return fetch(`${api}/saidas/${idSaida}`,{
            method:"DELETE", 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    }, 
}
export default  http