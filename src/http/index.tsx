import {Motorista} from '../estrutura';

const http = {
    Motorista:{
        Novo: async (payload:Motorista)=>{
            console.log(payload)
        },
        ListarTodos: async (params:Object)=>{
    
        },
        Listar: async (idMotorista:Number)=>{
    
        }, 
    }
}

export default http