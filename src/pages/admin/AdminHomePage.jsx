
import React from 'react';

import { LineChart,  PieChart, Pie,Line, XAxis,Cell, YAxis ,Tooltip, CartesianGrid,  Legend, ResponsiveContainer } from 'recharts';
import { ErrorFetch } from '../../components/error-fetch';
import { Loading } from '../../components/laoding';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { useState } from 'react';



const AdminHomePage = () => {

const {loading,error,data}=useFetch("/productcount")

const [data2, setdata2] = useState([{name:"men's clothes",value:3},
      {name:"women's clothes",value:2},
      {name:"jewelery",value:3},
      {name:"electronics",value:2},]);

  const onload=()=>{
      setdata2([
            {name:"men's clothes",value:data[0]},
            {name:"women's clothes",value:data[1]},
            {name:"jewelery",value:[2]},
            {name:"electronics",value:data[3]},
          ])
  }

const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
   return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
    <>
    <h1 className='p-3 font-semibold text-4xl w-full text-center block'>Administrator</h1>
    <div className='grid grid-cols-2 gap-4 py-20'>
        
        <div>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
        </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="Error while fetchin productCount " /> }
        {!error && !loading && data && (
        <div onLoad={()=>onload()}>
          <PieChart width={400} height={400}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip/>
        </PieChart>
        </div>
        )}
    </div>
    </>
  )
}

export default AdminHomePage