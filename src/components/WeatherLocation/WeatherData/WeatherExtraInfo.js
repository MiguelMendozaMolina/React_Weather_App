import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    // utilizacion de template string
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % - `}</span>
        <span className="extraInfoText">{`Viento: ${wind}`}</span>
    </div>
);

// snippet ptsr
WeatherExtraInfo.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;