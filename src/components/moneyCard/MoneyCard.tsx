import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  // Icon,
  // IconButton,
  Paper,
  Typography,
} from '@mui/material';
import classes from './MoneyCard.module.scss';
import { color, size, variant } from '../../styles/muiVariables';
import type { MoneyCardType } from '../../utils/types';
import { orange, grey } from '@mui/material/colors';

type MoneyCardProps = {
  cardData: MoneyCardType;
};

export function MoneyCard({ cardData }: MoneyCardProps) {
  const handleIsIncome = () => (cardData.isIncome ? '收' : '支');

  const handleBgColor = () => {
    switch (cardData.recurrentData.recurrentState) {
      case 'due':
        return orange[100];
      case 'pause':
        return grey[300];
      default:
        return grey[100];
    }
  };

  return (
    <div className={classes.container}>
      <Card
        variant={variant.outlined}
        square>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: handleBgColor(),
          }}>
          <CardHeader
            className={classes.cardHeader}
            title={`${cardData.currency} ${cardData.amount.toLocaleString()}`}
            subheader={
              <Box>
                <Chip
                  size={size.small}
                  variant={variant.filled}
                  label={cardData.category.text}
                  sx={{
                    my: 0.5,
                    backgroundColor: cardData.category.themeColor,
                    color: '#FFF',
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary">
                  {`${cardData.date.month}/${cardData.date.day}/${cardData.date.year}`}
                </Typography>
              </Box>
            }
            // subheader={`${cardData.date.month}/${cardData.date.day}/${cardData.date.year}`}
            action={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '72px',
                  marginLeft: '-48px',
                }}>
                <Avatar variant={variant.circular}>{handleIsIncome()}</Avatar>
              </Box>
            }
          />
          <CardContent>備注：{cardData.note}</CardContent>
          <CardActions>
            <Chip
              size={size.small}
              color={color.info}
              variant={variant.outlined}
              label={`${cardData.payingMethod}`}
            />
            <Chip
              size={size.small}
              color={color.info}
              variant={variant.outlined}
              label={`${cardData.account}`}
            />
          </CardActions>
        </Paper>
      </Card>
    </div>
  );
}
