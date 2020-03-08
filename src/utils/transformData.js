
const dataChartDonut = (data) =>{
    console.log(data)
    const arrayDonut = [
        { name: 'Smartphone', count: data.percentSmartphone, color: data.colorSmartphone },
        { name: 'Tablet', count: data.percentTablet, color: data.colorTable },
    ];
    return arrayDonut;
} 

const transformNumber = (cant, currency = false) => {
    const part = currency 
    ? cant.toLocaleString('de-DE', {style: 'currency', currency: "EUR"}) 
    : cant.toLocaleString('de-DE');
    return part;
}

module.exports = {
    dataChartDonut,
    transformNumber
};