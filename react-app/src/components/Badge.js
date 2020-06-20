import React from 'react';
import logo from '../images/logo.png';
import '../styles/Badge.css';

class Badge extends React.Component {
render(){
    return  (
    <div className="Badge">
        <div className="Badge_header">
            <img src={logo} alt="Logo de la conferencia"></img>
        </div>
        
        <div className="Badge_section-name">
            <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
            <h1>{this.props.firstName}<br/> {this.props.lastName}</h1>
        </div>

        <div className="Badge_section-info">
            <p>{this.props.jobTittle}</p>
            <p>@{this.props.twitter}</p>
        </div>
        <div className="Badge__footer">
            #MadeSant
        </div>
    </div>
    )
}

}

export default Badge