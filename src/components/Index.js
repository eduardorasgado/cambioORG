import React, { Component } from 'react'

//importando componentes
import Nombre from './Nombre'
import Vida from './Vida'
import Time from './Time'

//importar estilos
import './indexStyle.css'

class Index extends Component{
	render(){
		return(
			<div className='container'>
				<Nombre />
				<Vida />
				<Time />
			</div>
			)
	}
}

export default Index