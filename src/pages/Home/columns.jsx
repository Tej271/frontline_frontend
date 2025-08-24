import { Tag } from "antd";

export const columns = [
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, row) => <a href={row.website} target="_blank">{text}</a>,
  },
  {
    title: 'Established Year',
    dataIndex: 'foundedYear',
    key: 'foundedYear',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Industry',
    dataIndex: 'industry',
    key: 'industry',
  },
  {
    title: 'Status',
    key: 'isActive',
    dataIndex: 'isActive',
    render: (_, { isActive }) => (
        <Tag color={isActive ? 'green' : 'red'} key={_}>
            {isActive ? 'Active' : 'Inactive'}
        </Tag>
    ),
  },
  {
    title: 'City',
    dataIndex: 'location',
    key: 'location',
    render: (_, { location }) => (
       <p>{location.city}</p>
    ),
  },
  {
    title: 'Country',
    dataIndex: 'location',
    key: 'location',
    render: (_, { location }) => (
       <p>{location.country}</p>
    ),
  },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
];