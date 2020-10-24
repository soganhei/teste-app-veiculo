

export interface Motorista{
    idMotorista?: Number, 
    nome?: String,
    dataCriacao?: String, 
}

export interface Veiculo{
    idVeiculo: Number, 
    marca: String, 
    placa: String, 
    cor: String, 
    dataCriacao?: String
}

export interface SaidaVeiculos{
    idSaida: Number, 
    idMotorista: Number, 
    idVeiculo:  Number, 
    dataSaida: String, 
    dataEntrada: String, 
    motivoSaida: String, 
    nomeMotorista:String, 
    dataCriacao: String, 

}

export interface FormSaidaVeiculo{
    idMotorista: Number, 
    idVeiculo:  Number, 
    DataSaida: String, 
    DataEntrada: String, 
    MovitoSaida: String, 
    DataCriacao: String, 
    motorista: String, 
}