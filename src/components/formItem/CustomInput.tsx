import { TextField } from '@mui/material';
import classes from './FormItem.module.scss';
import { variant } from '../../styles/muiVariables';
type CustomInputProps = {
  inputTitle: string;
  inputPlaceholder: string;
  defaultValue: string;
};
export function CustomInput({
  inputTitle,
  inputPlaceholder,
  defaultValue: inputValue,
}: CustomInputProps) {
  return (
    <div className={classes.container}>
      <TextField
        variant={variant.standard}
        label={inputTitle}
        placeholder={inputPlaceholder}
        defaultValue={inputValue}
      />
    </div>
  );
}
