import React, { Component } from 'react'
import './nombreStyle.css'

var isTheCountry = false

class Nombre extends Component{
	//ESTO es un objeto JSON
	state = {
		user: 'Eduardo Rasgado Ruiz',
		school: 'ITIstmo',
		email: 'eduardo.rasgado@outlook.com',
		country: 'Mexico',
		age: 24
	}
	
	//fucntion que se trae el pais del json state
	showCountry = () => {
		//si esto es verdadero entonces mexico
		if (isTheCountry){
				this.setState({
				country: 'México'
			})
			isTheCountry = false
			return
		}
		this.setState({
			country: 'Francia'
		})
		isTheCountry = true

	}

	//h1 es el nombre
	//return va a regresar al view lo que tiene internamente
	//render va a traernos los cambios en tiempo real sin que
	//recarguemos la pagina
	render(){
		return(
			<div className='nombreContainer'>
				<h1>{this.state.user}</h1>
				<p>Estudio en: {this.state.school}</p>
				<p>Mi pais es: {this.state.country}</p>

				<input className='button'
						type='submit'
						value='Cambiar país'
						onClick={this.showCountry}/>
			</div>
			)
	}
}

export default Nombre