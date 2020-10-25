import api,{response} from './config'

export default {    
    Find: async (params:any)=>{

        const url = `${api}/logs?`+ new URLSearchParams(params)

        return fetch(url,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    },
    FindbyID: async (idLog:Number)=>{

        return fetch(`${api}/logs/${idLog}`,{                 
            headers:{                   
                "Content-Type":"application/json", 
                "Accept":"application/json", 
            },                  
        }).then(response)

    }, 
    
}