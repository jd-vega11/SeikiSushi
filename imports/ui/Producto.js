import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Menu} from "../api/menu.js";

class Producto extends Component {

 constructor(props){
    super(props);
    this.state = { 
      productos: []
    };

}

agregarProducto(){
  const name = document.getElementById("nombreProd").value;
  const descrp = document.getElementById("descrpProd").value;
  const valor = document.getElementById("nombreProd").value;
  const tipo = document.getElementById("tipoProd").value;
  Meteor.call("producto.add",name,descrp,"a",valor);
}

eliminarProducto(){

  const name = document.getElementById("nombreProd").value;

  Meteor.call("producto.del",name);

}

editarProducto(){
  const name = document.getElementById("nombreProd").value;
  const descrp = document.getElementById("descrpProd").value;
  const valor = document.getElementById("nombreProd").value;
  const tipo = document.getElementById("tipoProd").value;

   Meteor.call("producto.add",name,descrp,"a",valor);
}

  render() {
    return (
    <div className="container"> 
      <br/>
      {Meteor.user() && Meteor.user().username === "Admin" ? (
           
              <div className="input-group mb-3">
              {/*Aca van las opciones*/}
                <div className="row">
                 <div className="col-sm">
                   <br/>
                   <button className="btn btn-outline-danger btn-block" type="button" onClick={this.agregarProducto}>Agregar producto</button>
                   <br/>
                   <button className="btn btn-outline-danger btn-block" type="button" onClick={this.eliminarProducto}>Eliminar producto</button>
                 </div>
                 <div className="col">
                    <label >¡Agregar o Eliminar productos del menu!</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Nombre:</span>
                      </div>
                      <input type="text" className="form-control" id="nombreProd" aria-describedby="basic-addon3"/>
                    </div>  
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Desripcion del producto:</span>
                      </div>
                      <textarea rows="4" cols="50" name="comment" form="usrform"/>
                    </div> 
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Valor:</span>
                      </div>
                      <input type="text" className="form-control" id="nombreProd" aria-describedby="basic-addon3"/>
                    </div> 
                 </div>
        
              </div>
            <div className="col">
            </div>
          </div>

        ): (<br/>)}
  
            
         
        
    
    </div>
      );
  }
}

Producto.propTypes ={
 productos: PropTypes.array.isRequired
};


export default withTracker(() =>{
  
  Meteor.subscribe("menu");
  return{
    productos: Menu.find({}).fetch()
  };

}
)(Producto);