import React from 'react';
import { transformNumber } from '../utils/transformData';

const Description = ({ dataCircle }) => {

    const { percentTablet,
        percentSmartphone,
        currency,
        total,
        colorTable,
        colorSmartphone } = dataCircle;

    const partPercent = (percent) => {
        const cant = total * percent / 100;
        const part = transformNumber(cant, currency);
        return part;
    }

    return (
        <div className="description col-md-12">
            <div className="row">
                <div className="description-left col-md-6">
                    <div className={colorTable}>
                        <span>Tablet</span>
                    </div>
                    <div className="quantity">
                        <span className="percentage">{percentTablet}%</span>
                        <span className="total">{partPercent(percentTablet)}</span>
                    </div>
                </div>
                <div className="description-right col-md-6">
                    <div className={colorSmartphone}>
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