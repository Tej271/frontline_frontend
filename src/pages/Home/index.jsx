import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { columns } from './columns';
import { Input } from 'antd';
const { Search } = Input;
function Home() {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/v1/companies');
      const jsonData = await response.json();
      setCompanies(jsonData);
      setIsLoading(false);
      console.log(jsonData);
    }

    const handleSearch = async (value) => {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/api/v1/companies/search?q=${value}`);
      const jsonData = await response.json();
      setCompanies(jsonData);
      setIsLoading(false);
      console.log(jsonData);
    }

    useEffect(() => {
        getData();
    },[])


  return (
    <div> 
        <Search placeholder="Search by company name, size, city, or any detail..." enterButton="Search" size="large" loading={isLoading} onSearch={handleSearch} />
        <Table data={companies} columns={columns} />
    </div>
  )
}

export default Home