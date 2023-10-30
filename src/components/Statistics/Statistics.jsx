// import { LineChart, Line } from 'recharts';

// const Statistics = () => {

//     const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

//     return (
//         <div>
//             <LineChart width={400} height={400} data={data}>
//                 <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//             </LineChart>
//         </div>
//     );
// };

// export default Statistics;

import { PieChart, Pie, Tooltip } from "recharts";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];

export default function Statistics() {
    return (
        <div className="flex justify-center">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                </Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
}