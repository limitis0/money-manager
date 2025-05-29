import { Button } from '@mui/material';
import classes from './CustomButton.module.scss';
import { color, btnSize, btnVariant } from '../../styles/muiVariables';

type CustomButtonProps = {
  btnText: string;
  btnSizeProp: string;
  btnColorProp: string;
};

export function CustomButton({
  btnText,
  btnSizeProp,
  btnColorProp,
}: CustomButtonProps) {
  // const btnText = 'btnText';
  const handleBtnSizeString = () => {
    switch (btnSizeProp) {
      case 'l':
        return btnSize.large;
      case 's':
        return btnSize.small;

      default:
        return btnSize.large;
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
        variant={btnVariant.contained}>
        {btnText}
      </Button>
    </div>
  );
}
