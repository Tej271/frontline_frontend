import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { columns } from './columns';
import { Button, Form, Input, Modal, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const { Search } = Input;

function Home() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchCompanies = async (query = "") => {
    setIsLoading(true);
    const response = await fetch(`http://localhost:5000/api/v1/companies${query}`);
    const jsonData = await response.json();
    setCompanies(jsonData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleSearch = (value) => {
    if (value) {
      fetchCompanies(`/search?q=${value}`);
    } else {
      fetchCompanies();
    }
  };

  const handleFilter = (values) => {
    console.log("Filter values:", values);
    const query = "?" + new URLSearchParams(values).toString();
    fetchCompanies(query);
    setIsModalOpen(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Search
          placeholder="Search by company name, size, city, or any detail..."
          enterButton="Search"
          size="large"
          loading={isLoading}
          onSearch={handleSearch}
        />
        <Button type="link" icon={<FilterOutlined />} size="large" onClick={showModal}>
          Filter
        </Button>
      </div>
      <Table data={companies} columns={columns} />

      <Modal title="Filters" open={isModalOpen} onCancel={handleCancel} onOk={() => form.submit()}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={handleFilter}
        >
          <Form.Item name="isActive" label="Status">
            <Select>
              <Select.Option value="true">Active</Select.Option>
              <Select.Option value="false">Inactive</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="size" label="Size">
            <Select>
              {["1-10", "11-50", "51-200", "201-500", "500+"].map((size) => (
                <Select.Option key={size} value={size}>
                  {size}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Home;
