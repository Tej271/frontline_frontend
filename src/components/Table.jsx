import { Space, Table, Tag } from 'antd';


const CustomTable = ({data, columns}) => <Table columns={columns} dataSource={data} />;
export default CustomTable;