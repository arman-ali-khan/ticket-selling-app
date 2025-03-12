"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 4000,
    users: 240,
  },
  {
    name: "Feb",
    total: 3000,
    users: 198,
  },
  {
    name: "Mar",
    total: 5000,
    users: 280,
  },
  {
    name: "Apr",
    total: 4000,
    users: 308,
  },
  {
    name: "May",
    total: 3000,
    users: 400,
  },
  {
    name: "Jun",
    total: 2000,
    users: 380,
  },
  {
    name: "Jul",
    total: 7000,
    users: 420,
  },
  {
    name: "Aug",
    total: 5000,
    users: 350,
  },
  {
    name: "Sep",
    total: 4000,
    users: 290,
  },
  {
    name: "Oct",
    total: 6000,
    users: 310,
  },
  {
    name: "Nov",
    total: 7000,
    users: 480,
  },
  {
    name: "Dec",
    total: 9000,
    users: 540,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
        <Bar
          dataKey="users"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-blue-400"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}