import type { categoryColorsList } from './catagoryColorList';
import type { currencyList } from './currencyList';

export type MoneyCardType = {
  id: string;
  amount: number;
  currency: CurrencyCode | undefined; // refer to CurrencyCode
  date: CustomDate; // refer to CustomDate
  isIncome: boolean;
  category: Category;
  payingMethod: 'transfer' | 'cash' | 'creditCard';
  account: string; // refer to AccountList
  chargeState: 'oneTime' | 'recurrent' | 'installment';
  installmentData: InstallmentData; // refer to InstallmentData
  recurrentData: RecurrentData; // refer to RecurrentData
  note: string;
};

export type CurrencyCode = (typeof currencyList)[number]['code'];

export type CustomDate = {
  month: string;
  day: string;
  year: string;
};

export type Category = {
  id: string; // uuid
  text: string; // <= 5字元
  themeColor: CategoryColotList | undefined; // 顏色名稱
};

export type CategoryColotList = (typeof categoryColorsList)[number]['name'];

export type InstallmentData = {
  isInstallment: boolean;
  numberOfInstallment: number;
  interest: number; // digits only
  startDate: {
    month: string;
    day: string;
    year: string;
  };
};

export type RecurrentData = {
  isRecurrent: boolean;
  recurrentPeriod: string; // none | month | year
  recurrentState: string; // none | due | pause
  startDate: {
    month: string;
    day: string;
    year: string;
  };
};

export type PieChartItem = {
  title: string;
  value: number;
};
export type PieChartData = PieChartItem[];

export type LineChartItem = {
  month: string;
  income: number;
  expense: number;
};
export type LineChartData = LineChartItem[];
