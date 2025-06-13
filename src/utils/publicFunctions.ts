import { categoryColorsList } from './catagoryColorList';
import { currencyList } from './currencyList';

/**
 * 由幣別代碼取得幣別符號（見 currencyList）
 * @param code currency code
 * @returns currency symbol
 */
export function getCurrencySymbol(code: string): string | undefined {
  const currency = currencyList.find((c) => c.code === code.toUpperCase());
  return currency?.symbol;
} // getCurrencySymbol

/**
 * 由顏色名稱取得對應hex code（見 categoryColorsList
 * @param name color name
 * @returns color hex
 */
export function getCategoryColor(name: string): string | undefined {
  const colorItem = categoryColorsList.find((v) => v.name === name);
  return colorItem?.hex;
}
