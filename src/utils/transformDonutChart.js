
const dataChartDonut = (data) =>{
    console.log(data)
    const arrayDonut = [
        { name: 'Smartphone', count: data.percentSmartphone, color: '#E89F74' },
        { name: 'Tablet', count: data.percentTablet, color: '#00A99D' },
    ];
    return arrayDonut;
} 

module.exports = {
    dataChartDonut
};