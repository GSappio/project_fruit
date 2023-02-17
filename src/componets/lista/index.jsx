import React, { useState, useEffect} from "react";
import './index.css'
import api from '../../api'

export default function List() {

    const [user, setUser] = useState();

    useEffect(() => {
      api
        .get("/fruits")
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
  
    return(
      <div className="tbody-form-list">
           <h1 className="h1-form-list">Tabela de Produtos</h1>
           <div className="container-botao">
           <a href="/"><button className="btn-list-voltar">VOLTAR</button></a>
           </div>
          <table>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
              </tr>
          
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
          
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
            
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
              
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>

              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
              
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
              <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
                <tr>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
                  <td>PARA CONSUMIR</td>
              </tr>
              
          </table>
      </div> 
    
    )
}

