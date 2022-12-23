
import React from 'react';

import { BarChart,  PieChart, Pie,Bar, XAxis,Cell, YAxis ,Tooltip, CartesianGrid,  Legend, ResponsiveContainer } from 'recharts';
import { ErrorFetch } from '../../components/error-fetch';
import { Loading } from '../../components/laoding';
import useFetch from '../../hooks/useFetch';
import useFetch3 from '../../hooks/useFetch3';



const AdminHomePage = () => {

const {loading,error,data}=useFetch("/productcount")
const {loading3,error3,data3}=useFetch3("/totalprices")


//data name:createdAt 



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
if(data && data3){
  const data2=[{name:data3[0]._id,value:data3[0].total},
              {name:data3[1]._id,value:data3[1].total},
              {name:data3[2]._id,value:data3[2].total},
              {name:data3[3]._id,value:data3[3].total},];

  const data1 = [{name: "Men",quantity: data[0],amt: 2400,},
                {name: "Women",quantity: data[1],amt: 2210,},
                {name: 'Electronics',quantity: data[2],amt: 2290,},
                {name: 'Jewelery',quantity: data[3],amt: 2000,}];
  return (
    <>
    <div className='grid grid-cols-2 gap-4 py-10'>
        <div className='text-center'>
          <ResponsiveContainer width={500} height={500}>
        <BarChart
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
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#8884d8" label={renderCustomizedLabel}/>
        </BarChart>
      </ResponsiveContainer>
      <h1 className='font-semibold'>category quantity bar chart</h1>
        </div>
        {loading && <Loading />}
        {error && <ErrorFetch message="Error while fetchin productCount " /> }
        {!error && !loading && data && (
        <div className='text-center'>
          <div className=''>
          <PieChart width={500} height={500}>
          <Pie
            data={data2}
            cx="55%"
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
                <h1 className='font-semibold'>percentage of total prices per category</h1>
        </div>
        </div>
        )}
    </div>
    </>
  )
  }
}

export default AdminHomePage