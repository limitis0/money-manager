export type MoneyCard = {
  amount: string;
  date: {
    month: string;
    day: string;
    year: string;
  };
  isIncome: boolean;
  payingMethod: string;
  account: string;
};
