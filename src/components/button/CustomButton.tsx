import { Button } from '@mui/material';
import classes from './CustomButton.module.scss';
import { color, size, variant } from '../../styles/muiVariables';

type CustomButtonProps = {
  btnText: string;
  btnSizeProp: string;
  btnColorProp: string;
  btnAction: () => void; // no prop, no rt
};

export function CustomButton({
  btnText,
  btnSizeProp,
  btnColorProp,
  btnAction,
}: CustomButtonProps) {
  // const btnText = 'btnText';
  const handleBtnSizeString = () => {
    switch (btnSizeProp) {
      case 'l':
        return size.large;
      case 's':
        return size.small;

      default:
        return size.large;
    }
  };

  const handleBtnColorProp = () => {
    switch (btnColorProp) {
      case 'p':
        return color.primary;
      case 'if':
        return color.info;
      case 'ih':
        return color.inherit;

      default:
        return color.primary;
    }
  };
  return (
    <div className={classes.container}>
      <Button
        size={handleBtnSizeString()}
        color={handleBtnColorProp()}
        variant={variant.contained}
        onClick={btnAction}>
        {btnText}
      </Button>
    </div>
  );
}
