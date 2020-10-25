import {IFormSaidaVeiculo} from '../estrutura';


export default (api:String) => {
    return {
        Save: async (payload:IFormSaidaVeiculo)=>{

            let method = "POST"
            let url = `${api}/saidas`
              
            if(payload.id != undefined){
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
            })
    
        },
        Find: async (params:Object)=>{
    
            return fetch(`${api}/saidas`,{                 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            })
    
        },
        FindbyID: async (idSaida:Number)=>{
    
            return fetch(`${api}/saidas/${idSaida}`,{                 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            })
    
        }, 
        Delete: async (idSaida:Number)=>{
    
            return fetch(`${api}/saidas/${idSaida}`,{
                method:"DELETE", 
                headers:{                   
                    "Content-Type":"application/json", 
                    "Accept":"application/json", 
                },                  
            })
    
        }, 
    }
}