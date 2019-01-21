import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <samp className="extraInfoText">{`${humidity} % `}</samp>
        <samp className="extraInfoText">{`${wind} viento`}</samp>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;