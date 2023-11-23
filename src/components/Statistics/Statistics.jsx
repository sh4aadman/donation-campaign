import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { getDonation } from "../../utility/localStorage";

const yourDonation = getDonation();
const yourDonationValue = yourDonation.length;

const data = [
    { name: "Total Donations", value: 12 },
    { name: "Your Donations", value: yourDonationValue }
];

const COLORS = ["#FF444A", "#00C49F"]

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function Statistics() {
    return (
        <div className="flex flex-col items-center justify-center mb-32">
            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
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
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
            <div className="flex gap-12 text-lg">
                <div className="flex items-center gap-2">
                    <h2>Total Donation:</h2>
                    <div className="inline-block w-10 h-3 bg-[#FF444A]"></div>
                </div>
                <div className="flex items-center gap-2">
                    <h2>Your Donation:</h2>
                    <div className="inline-block w-10 h-3 bg-[#00C49F]"></div>
                </div>
            </div>
        </div>
    );
}