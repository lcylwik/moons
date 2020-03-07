
const dataChartDonut = (data) =>{
    console.log(data)
    const arrayDonut = [
        { name: 'Smartphone', count: data.percentSmartphone, color: data.colorSmartphone },
        { name: 'Tablet', count: data.percentTablet, color: data.colorTable },
    ];
    return arrayDonut;
} 

module.exports = {
    dataChartDonut
};