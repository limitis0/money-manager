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
} from '@mui/material';
import classes from './MoneyCard.module.scss';
import { color, size, variant } from '../../styles/muiVariables';
import type { MoneyCard } from '../../utils/types';

type MoneyCardProps = {
  cardData: MoneyCard;
};

export function MoneyCard({ cardData }: MoneyCardProps) {
  return (
    <div className={classes.container}>
      <Card
        variant={variant.outlined}
        square>
        <Paper elevation={0}>
          <CardHeader
            className={classes.cardHeader}
            title={`${cardData.amount}`}
            subheader={`${cardData.date.month}/${cardData.date.day}/${cardData.date.year}`}
            action={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '72px',
                  marginLeft: '-48px',
                }}>
                <Avatar variant={variant.circular}>{cardData.isIncome}</Avatar>
              </Box>
            }
          />
          <CardContent>備注：******</CardContent>
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
