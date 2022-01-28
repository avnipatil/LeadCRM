import React from "react";
import './Charts.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Charts (){
    
const data = [
    {
      name: 'Jan',
      "Active User": 5000
    },
    {
      name: 'Feb',
      "Active User": 7000
    },
    {
      name: 'Mar',
      "Active User": 4000
    },
    {
      name: 'Apr',
      "Active User": 2080,
    },
    {
      name: 'May',
      "Active User": 4000
    },
    {
      name: 'June',
      "Active User": 2000
    },
    {
      name: 'July',
      "Active User": 3000
    },
    {
        name: 'Aug',
        "Active User": 5000
      },
      {
        name: 'Sep',
        "Active User": 2000
      },
      {
        name: 'Act',
        "Active User": 1000
      },
      {
        name: 'Nov',
        "Active User": 3000
      },
      {
        name: 'Dec',
        "Active User": 4000
      },
  ];
    return(
        <>
        <div className="chart">
            <h6 className="charttitle">Lead Analytics</h6>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'></XAxis>
                <Line type="monotone" dataKey="Active User" stroke='#5550bd'/>
                <Tooltip/>
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5.5"/>
            </LineChart>
            </ResponsiveContainer>
        </div>
        </>
    )
}
export default Charts;