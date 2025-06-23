import { Cell, Pie, PieChart } from 'recharts';
import classes from './CustomPieChart.module.scss';
import type { PieChartData } from '../../../utils/types';
import { categoryColorsList } from '../../../utils/catagoryColorList';
import { Box, Typography } from '@mui/material';

type PieChartProps = {
  chartData: PieChartData;
  isText: boolean;
};
export function CustomPieChart({ chartData, isText }: PieChartProps) {
  const COLORS = categoryColorsList.map((value) => value.hex);
  return (
    <div className={classes.container}>
      <Box sx={{ position: 'relative', display: 'inline-block', mt: 2 }}>
        <PieChart
          width={200}
          height={200}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value">
            {chartData.map((entry, index) => (
              <Cell
                key={entry.title}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        {isText && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              lineHeight: 1.6,
            }}>
            {chartData.map((value, index) => (
              <Typography key={index}>
                {value.title} ${value.value.toLocaleString()}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
}
