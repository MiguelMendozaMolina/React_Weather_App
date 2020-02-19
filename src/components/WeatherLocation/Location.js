import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = (props) => {

    // tambien se puede obtener el nombre del 
    // objeto que se recibe y se puede asignar de forma directa 

    // Destructuring ES6
 //  const {city} = props;

    // forma antigua de realizarlo 
     const city = props.city; 
    return (<div className="locationCont">
                <h1>
                    {city}
                </h1>
           </div>);
           
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;