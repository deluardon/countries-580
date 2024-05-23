import './countries.css'
const Countrie = ({countrie}) => {
    console.log(countrie);
    const {name, capital, region, population, coatOfArms,flags} = countrie;
    return (
        <div className='box'>
            <h3>Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <div className='img-box'>
            <img className='contry-photo' src={flags.png} alt="" />
            <img className='contry-logo' src={coatOfArms.png} alt="" />
            </div>
        </div>
    );
};

export default Countrie;