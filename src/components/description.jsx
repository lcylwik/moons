import React from 'react';

const Description = ({ dataCircle }) => {

    const { percentTablet,
        percentSmartphone,
        currency,
        total } = dataCircle;

    const partPercent = (percent) => {
        const cant = total * percent / 100;
        const tipoCurrency = currency ? '€' : '';
        return `${cant} ${tipoCurrency}`;
    }

    return (
        <div className="description">
            <div className="tablet">
                <p>Tablet</p>
                <div className="percentTablet">
                    <p>{percentTablet}%</p>
                    <div className="part">{partPercent(percentTablet)}</div>
                </div>
            </div>
            <div className="smartphone">
                <p>Smartphone</p>
                <div className="percentSmartphone">
                    <p>{percentSmartphone}%</p>
                    <div className="part">{partPercent(percentSmartphone)}</div>
                </div>
            </div>
        </div>
    );
}

export default Description;