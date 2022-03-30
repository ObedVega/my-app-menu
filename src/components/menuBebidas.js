import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
 

export const MenuBebidas = () => {
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
    
  listaDeBebidas = [
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
        setBebidas(filtrarBebidas);
    }
    return (
        <>
        <p></p>
        <h1> Bebidas Tradicionales</h1>
        <form>
            <div className="form-group">
                <input className="form-control" onChange={handleChange} type="text" placeholder="Buscar"/>
            </div>
            <p></p>
            <Button onClick={onSubmit}>Buscar tu Bebida</Button>
        </form>
        <p></p>
        <ul>
              {
                  bebidas.map((valor) => (
                    <li key={valor}>{valor}</li>  
                  ))
              }
          </ul>
        </>
    )
};