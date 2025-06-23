import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import classes from './CustomLineChart.module.scss';
import type { LineChartData } from '../../../utils/types';
import { categoryColorsList } from '../../../utils/catagoryColorList';

type LineChartProps = {
  chartData: LineChartData;
};

export function CustomLineChart({ chartData }: LineChartProps) {
  return (
    <div className={classes.container}>
      <ResponsiveContainer
        width="100%"
        height={300}>
        <LineChart
          data={chartData}
          margin={{ left: 20, right: 20, top: 10 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke={
              categoryColorsList.find(({ name }) => name === 'orange')?.hex
            }
            strokeWidth={3}
            dot={{ r: 6, fill: '#fff', strokeWidth: 3 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke={categoryColorsList.find(({ name }) => name === 'blue')?.hex}
            strokeWidth={3}
            dot={{ r: 6, fill: '#fff', strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
