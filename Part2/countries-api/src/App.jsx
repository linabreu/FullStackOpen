import { useEffect, useState } from 'react';
import Search from './Search';
import countryServices from './Services/countryServices';


function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('search for a country')

  useEffect(() =>
    {
      countryServices.getCountry(searchTerm).then(initialData => setCountries(initialData))
    }, [searchTerm]);

    console.log(countries)

  return (
    <>
      <h1>Countries Search! </h1>
      <Search setSearchTerm = {setSearchTerm} searchTerm = {searchTerm}></Search>
     {!countries ? <div>No Results Match Your Search</div> : 
      <div>
        {countries.length > 10 ? <h2>Too Many Entries</h2>:
        <div>
          {countryServices.name}
        </div>
        }
      </div>
     
     
     }
     

    </>
  )
}

export default App
