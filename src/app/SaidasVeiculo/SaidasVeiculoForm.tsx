import React,{useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';

import { useForm } from 'react-hook-form';

import moment from 'moment'

import DatePicker,{registerLocale} from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
 
import Autocomplete from 'react-autocomplete'

import {    
  Container,
  Grid,
  Button, 
  Form,    
  Input,    
  InputText, 
  Label, 
  TextError, 
  Buttons, 
} from '../../styles'

import http from '../../http'

import {IFormSaidaVeiculo,IMotorista,IVeiculo} from '../../estrutura'

import {FormatDate} from '../../lib'

interface IParams {
  id:Number | any, 
}

function SaidasVeiculoForm() {
  
  const router = useHistory()
  const urlParams = useParams<IParams>()
  
  registerLocale("ptBR",ptBr)

  const { register, handleSubmit,   errors } = useForm<IFormSaidaVeiculo>();
  const [data,setData] = useState<IFormSaidaVeiculo>({})
  
  const [entradaVeiculo, setEntradaVeiculo] = useState(false)
  const [dataEntrada, setDataEntrada] = useState(new Date())

  const [motoristas,setMotoristas] = useState<IMotorista[]>([])
  const [veiculos,setVeiculos] = useState<IVeiculo[]>([])
  

  const [idSaida,setIdSaida] = useState<Number | undefined>(undefined)
 
  useEffect(()=>{

        const findMotoristas= async ()=>{

              const response = await http.Motorista.Find({})
              const items: IMotorista[] = await response.json()
              setMotoristas(items)

         }
         findMotoristas()

        const findVeiculos= async ()=>{

          const response = await http.Veiculo.Find({})
          const data: IVeiculo[] = await response.json()

          const items  = data.map((item)=>{

            item.label = `${item.placa} | ${item.marca} | ${item.cor}`
            return item 

          })
          setVeiculos(items)

        }
        findVeiculos()

  },[])

  useEffect(()=>{

    if(urlParams.id != undefined){
      
      const findbyid = async () =>{
          
            const response = await http.Saida.FindbyID(urlParams.id)
            const data: IFormSaidaVeiculo = await response.json()
            
            setIdSaida(data.id)
            setEntradaVeiculo(true)

            const {veiculo} = data
 
            setData({
              ...data, 
              veiculo:{
                label: `${veiculo?.placa} | ${veiculo?.marca} | ${veiculo?.cor}`, 
                id: veiculo?.id, 
              }
            })    

            if(data.dataEntrada == undefined){
              setDataEntrada(new Date())              
           }else{

              const d = moment(data.dataEntrada.toString()).format()
              setDataEntrada(new Date(d))  

           }
          

      }
      findbyid()
}

  },[])

  const onSubmit = async (payload:IFormSaidaVeiculo) => {
    
    payload.idMotorista = data.motorista?.id
    payload.idVeiculo = data.veiculo?.id

     if(idSaida != undefined){
      payload.id = idSaida
      payload.dataEntrada = FormatDate(dataEntrada)
    }

    console.log(payload)

    try {
      
      const response = await http.Saida.Save(payload)
      const item  = await response.json()

      if(item.id){
          alert("Salvo com sucesso")
          voltarPagina()
      }
    } catch (error) {

      const err = await error.json()
      alert(err.message)

    }

  };

  const voltarPagina = ()=>{
     router.push("/")
  }

  const handlerDataEntrada = (date:Date) =>{
       setDataEntrada(date)
  }
  

  return (
     <div>
         <Container>
             <Grid>
               <h2>Saídas</h2>
                   <Form onSubmit={handleSubmit(onSubmit)}>                     
                        <InputText>
                            <Label>Motoristas</Label>
                            <Autocomplete            
                             inputProps={{className:"input-autocomplete", placeholder:"Buscar motoristas"}}                 
                             items={motoristas}
                             value={data.motorista?.nome}                             
                             getItemValue={item => item.nome }
                             onChange={ async (e)=>{
                                 if(e.target.value !== undefined){
                                  setData({...data,motorista:{nome:e.target.value}})
                                 }
                             }}
                             onSelect={(value,item)=>{
                                setData({...data,motorista:{id:item.id, nome: value}})                               
                             }}
                             renderItem={(item, highlighted) =>
                                <div
                                  key={item.id}
                                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                >
                                  {item.nome}
                                </div>
                              }
                            />                            
                        </InputText>  
                        <InputText>
                            <Label>Veículos</Label>
                            <Autocomplete            
                             inputProps={{className:"input-autocomplete", placeholder:"Buscar veículos"}}                   
                             items={veiculos}
                             value={data.veiculo?.label}                             
                             getItemValue={item => item.label}
                             onChange={(e)=>{
                                 if(e.target.value !== undefined){
                                    setData({...data,veiculo:{label:e.target.value}})                                      
                                 }
                             }}
                             onSelect={(value,item)=>{
                                setData({...data,veiculo:{id:item.id, label: value}})                                
                             }}
                             renderItem={(item, highlighted) =>
                                <div
                                  key={item.id}
                                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                >
                                  {item.label}
                                </div>
                              }
                            />                            
                        </InputText>  
                        {entradaVeiculo && (
                          <div>
                              <InputText>
                                <Label>Data entrada</Label>
                                <DatePicker locale="ptBR" dateFormat="dd/MM/yyyy" selected={dataEntrada} onChange={ handlerDataEntrada } className="input-autocomplete" />                             
                            </InputText>                             
                          </div>
                        )} 

                        {!entradaVeiculo && (
                          <InputText>
                            <Label>Motivo Saída</Label>
                            <Input name="motivoSaida" autoComplete="off" ref={register({required:true})} />
                            {errors.motivoSaida && <TextError>Informe o motivo da saída</TextError>}                             
                          </InputText>
                        )}                        
                         
                        <Buttons>
                            <Button type="button" onClick={voltarPagina}  className="btn prev">Voltar</Button>
                            <Button type="submit"  className="btn">Salvar</Button>
                        </Buttons> 
                   </Form>                   
             </Grid>
        </Container>
     </div>
  );
}

export default SaidasVeiculoForm;