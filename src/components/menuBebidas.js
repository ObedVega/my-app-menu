import React, {useState} from "react";

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
        <h1> Bebidas Tradicionales</h1>
        <form>
          <input onChange={handleChange} type="text" placeholder="Buscar"/>
          <button onClick={onSubmit}>Buscar tu Bebida</button>
          <ul>
              {
                  bebidas.map((valor) => (
                    <li key={valor}>{valor}</li>  
                  ))
              }
          </ul>
        </form>
        </>
    )
};