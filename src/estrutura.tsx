

export interface IMotorista{
    id?: Number, 
    nome?: String,
    dataCriacao?: String, 
}

export interface IVeiculo{
    id?: Number, 
    marca?: String, 
    placa?: String, 
    cor?: String, 
    dataCriacao?: String, 
    label?: String, 
}

export interface ISaidaVeiculos{
    id:Number,
    idSaida: Number, 
    idMotorista: Number, 
    idVeiculo:  Number, 
    dataSaida: String, 
    dataEntrada: String, 
    motivoSaida: String, 
    motorista: IMotorista,
    veiculo: IVeiculo,
    dataCriacao: String, 

}

export interface IFormSaidaVeiculo{
    id?:Number, 
    idMotorista?: Number, 
    idVeiculo?:  Number,    
    dataEntrada?: String, 
    motivoSaida?: String,     
    motorista?: IMotorista,
    veiculo?: IVeiculo, 

}

export interface ILogs{
    id?:Number, 
    key?:String, 
    method?:String, 
    error?: Boolean, 
    errorMessage?: String, 
    payload?: any, 
    dataCriacao?: Date, 
    table:String, 
}