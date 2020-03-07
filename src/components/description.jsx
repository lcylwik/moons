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

    const colorDescriptión = () => {
        const colorTable = `label color-${dataCircle.id}-1`;
        const colorSmartphone = `label color-${dataCircle.id}-2`;
        return { colorTable, colorSmartphone}
    }

    return (
        <div className="description col-md-12">
            <div className="row">
                <div className="description-left col-md-6">
                    <div className={colorDescriptión().colorTable}>
                        <span>Tablet</span>
                    </div>
                    <div className="quantity">
                        <span className="percentage">{percentTablet}%</span>
                        <span className="total">{partPercent(percentTablet)}</span>
                    </div>
                </div>
                <div className="description-right col-md-6">
                    <div className={colorDescriptión().colorSmartphone}>
                        <span>Smartphone</span>
                    </div>
                    <div className="quantity">
                        <span className="percentage">{percentSmartphone}%</span>
                        <span className="total">{partPercent(percentSmartphone)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;