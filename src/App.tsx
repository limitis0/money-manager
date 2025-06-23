// import { CustomButton } from './components/button/CustomButton';
// import { MoneyCard } from './components/moneyCard/MoneyCard';

import { CustomLineChart } from './components/chart/lineChart/CustomLineChart';
import type { LineChartData } from './utils/types';

// import { getCategoryColor, getCurrencySymbol } from './utils/publicFunctions';
// import type { MoneyCardType } from './utils/types';

function App() {
  const sampleLineChartData = [
    { month: '1月', income: 10000, expense: 8000 },
    { month: '2月', income: 12000, expense: 9500 },
    { month: '3月', income: 15000, expense: 12000 },
    { month: '4月', income: 13000, expense: 14000 },
    { month: '5月', income: 16000, expense: 11000 },
    { month: '6月', income: 17000, expense: 12500 },
  ] as LineChartData;

  return (
    <>
      {/* <CustomButton
        btnText="test btn"
        btnSizeProp="l"
        btnColorProp="p"
      /> */}
      {/* <MoneyCard cardData={sampleCardData} /> */}
      {/* <CustomPieChart
        chartData={samplePieChartData}
        isText
      /> */}
      <CustomLineChart chartData={sampleLineChartData} />
    </>
  );
}

export default App;
