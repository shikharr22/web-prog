import React from "react";
import "./placement.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Placements = () => {
  const data = [
    {
      Year: '2019',
      placement_percentage:60,
      amt: 2400,
    },
    {
      Year: '2020',
      placement_percentage:70,
      amt: 2400,
    },
    {
      Year: '2021',
      placement_percentage:75,
      amt: 2400,
    },
    {
      Year: '2022',
      placement_percentage:80,
      amt: 2400,
    },
    {
      Year: '2023',
      placement_percentage:85,
      amt: 2400,
    },
  
  ]
  return (
    <>
      <div className="placement-container">
        <div className="stats">
          <p
            style={{ fontSize: "1.5rem", color: "#D6AD60", fontWeight: "bold" }}
          >
            Placement 2023{" "}
          </p>
          <p>
            Total no. of Students sitting for Placements:{" "}
            <span style={{ color: "#D6AD60" }}>A</span>
          </p>
          <p>
            Total no. of offers: <span style={{ color: "#D6AD60" }}>B</span>
          </p>
          <p>
            Total no. of Students Placed:{" "}
            <span style={{ color: "#D6AD60" }}>C</span>
          </p>
          <p>
            Placements % for 2023 passing out batch:{" "}
            <span style={{ color: "#D6AD60" }}>D</span>
          </p>
          <p>
            Highest package offered:{" "}
            <span style={{ color: "#D6AD60" }}>X ctc</span>
          </p>
          <p>
            Median package:{" "}
            <span style={{ color: "#D6AD60" }}>Y ctc</span>
          </p>
        </div>
        <div className="placement-graph">
          <LineChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Line type="monotone" dataKey="placement_percentage" stroke="#000C66" />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default Placements;
