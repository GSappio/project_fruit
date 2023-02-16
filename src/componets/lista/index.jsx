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
        <div className="tbody-form">
            <table class="table">
  <thead className="thead-lista">
    <tr>
      <th scope="col" className="th-lista">#</th>
      <th scope="col" className="th-lista">name</th>
      <th scope="col" className="th-lista">price</th>
      <th scope="col" className="th-lista">image</th>
    </tr>
  </thead>
  <tbody className="thead-lista">
             {/* {data.map((fruit) => (
                <tr key={fruit.id}> 
                  <td>{fruit.id}</td>
                  <td>{fruit.name}</td>
                  <td>{fruit.profession}</td>
                  <td>{fruit.wage}</td>
                </tr>
              ))} */}
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div> 
    
    )
}

