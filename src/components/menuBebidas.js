import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
//import { Button } from "react-bootstrap";

 

export const MenuBebidas = () => {
    /*
    let listaDeBebidas = [
        {
            "BebidasTradicionales": [{
                    "Cafe": "Espresso",
                    "Precio": 50
                },
                {
                    "Cafe": "Espresso Americano",
                    "Precio": 50
                }
            ]
        }, {
            "LattesSaborizados": [{
                    "Cafe": "Menta",
                    "Precio": 50
                },
                {
                    "Cafe": "Toronja",
                    "Precio": 50
                }
            ]
        }
    ]
    */
  
  const listaDeBebidas = [
            "Espresso",
            "Espresso Americano",
            "Cortado",
            "Capuccino",
            "Latte",
            "Menta",
            "Toronja",
            "Lavanda",
            "Frambuesa",
            "Miel con Romero",
            "Rompope",
            "Salvia",
            "Caramelo",
            "Pistache",
            "Vainilla",
            "Chocolate",
            "Horchata",
            "Chai Especias"
        ]
/*
    const listaDeBebidas_2 = [
            {
                "id":1,
                "bebida":"Espresso",
                "precio":50
            },
            {
                "id":2,
                "bebida":"Espresso Americano",
                "precio":50
            },
            {
                "id":1,
                "bebida":"Cortado",
                "precio":50
            }
        ]
    */
   /*
    const listaDeBebidas_2 = [
        {
            "categoria":"Bebidas Tradicionales",
            "bebidas":[
                {
                    "tipo":"Espresso"
                },
                {
                    "tipo":"Espresso Americano"
                },
                {
                    "tipo":"cortado"
                }
            ]
        },
        {
            "categoria":"Lattes Saborizados",
            "bebidas":[{"tipo":"Capuccino"},{"tipo":"Latte"},{"tipo":"Menta"}]
        }
    ]
    */
    const data = {"results": [
        {
            "data":{
                "id":1,
                "categoria":"Bebidas Tradicionales",
                "imagen":"https://raw.githubusercontent.com/ovvake/my-app-menu/dev/src/img/DirtyChaiEspecias.png",
                "bebidas":[{
                    "tipo": "Espresso",
                    "precio": "50"
                },
                {
                    "tipo":"Espresso Americano"
                },
                {
                    "tipo":"cortado"
                }]
            }
        },
        {
            "data":{
                "id":2,
                "categoria":"Lattes Saborizados",
                "imagen":"https://raw.githubusercontent.com/ovvake/my-app-menu/dev/src/img/late.png",
                "bebidas":[{
                    "tipo": "Capuccino",
                    "precio": "50"
                },{"tipo":"Latte"},{"tipo":"Menta"}]
            }
        }
    ]
};
    //console.log(data.results);
    //const [bebidas2, setBebidas2] = useState(listaDeBebidas_2);
    
    const [bebidas, setBebidas] = useState(listaDeBebidas);    
    const [buscarTexto, setbuscarTexto] = useState("");  
    const handleChange = (event) => {
        console.log(event.target.value);
        setbuscarTexto(event.target.value);
    };
    
    const onSubmit = (event) =>{
      event.preventDefault();
      const filtrarBebidas = listaDeBebidas.filter(bebida => 
        bebida.toLocaleLowerCase().includes(buscarTexto.toLocaleLowerCase()));
        console.log(filtrarBebidas);
        setBebidas(filtrarBebidas);
        
    }
    return (
        <>
        <p></p>
        

        <form>
            <div className="form-group">
                <input className="form-control" onChange={handleChange} onInput={onSubmit} type="text" placeholder="Buscar"/>
            </div>
            <p></p>
            {/*<Button onClick={onSubmit}>Buscar tu Bebida</Button>*/} 
        </form>
        <p></p>
        <div className="card">
            <div className="card-header">
                <h1> Bebidas Tradicionales</h1>
            </div>
            <ul className="list-group list-group-flush">
            {
                bebidas.map((valor) => (
                    <li className="list-group-item" key={valor}>{valor}</li>  
                ))
            }
            </ul>
        </div>
        
        {
            data.results.map((valor)=>(
                <><p ></p>
                <div className="card" key={valor.data.id}>
                    <div className="card-header" >
                        <h1>{valor.data.categoria}</h1>
                    </div>
                    <img className="card-img-top" src={valor.data.imagen} alt="" />
                    <ul className="list-group list-group-flush">
                        {valor.data.bebidas.map((value) => (
                            <li className="list-group-item" key={value.tipo}>{value.tipo}</li>
                        ))}
                    </ul>
                </div></>
            
            ))
        }
        </>
    )
};