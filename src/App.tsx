// import { CustomButton } from './components/button/CustomButton';
import { MoneyCard } from './components/moneyCard/MoneyCard';

import { getCategoryColor, getCurrencySymbol } from './utils/publicFunctions';
import type { MoneyCardType } from './utils/types';

function App() {
  const sampleCardData: MoneyCardType = {
    id: '12345',
    amount: 12345,
    currency: getCurrencySymbol('NTD'),
    date: {
      month: '01',
      day: '11',
      year: '1234',
    },
    isIncome: false,
    category: {
      id: 'food',
      text: '食',
      themeColor: getCategoryColor('yellow'),
    },
    payingMethod: 'transfer',
    account: 'first bank',
    chargeState: 'recurrent',
    installmentData: {
      isInstallment: false,
      numberOfInstallment: 12,
      interest: 3,
      startDate: {
        month: '01',
        day: '11',
        year: '1234',
      },
    },
    recurrentData: {
      isRecurrent: true,
      recurrentPeriod: 'none',
      recurrentState: 'none',
      startDate: {
        month: '01',
        day: '11',
        year: '1234',
      },
    },
    note: '******',
  };
  return (
    <>
      {/* <CustomButton
        btnText="test btn"
        btnSizeProp="l"
        btnColorProp="p"
      /> */}
      <MoneyCard cardData={sampleCardData} />
    </>
  );
}

export default App;
