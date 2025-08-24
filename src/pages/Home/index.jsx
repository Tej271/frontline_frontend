import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { columns } from './columns';
function Home() {
    const [companies, setCompanies] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:5000/api/v1/companies');
        const jsonData = await response.json();
        setCompanies(jsonData);
        console.log(jsonData);
    }

    useEffect(() => {
        getData();
    },[])


  return (
    <div> 
        <Table data={companies} columns={columns} />
    </div>
  )
}

export default Home