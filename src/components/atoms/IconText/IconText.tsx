import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

import { Icon } from '../../atoms';
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginLeft: theme.spacing(1),
  },
}));

/**
 * Component to display the icon text
 *
 * @param {Object} props
 */
const IconText = ({
  title,
  color,
  fontIconClass,
  className,
  iconProps = {},
  typographyProps = {},
  ...rest
}: IconTextProps): JSX.Element => {

  const classes = useStyles();

  return (
    <div className={clsx('icon-text', classes.root, className)} {...rest}>
      <Icon
        className="icon-text__icon"
        size="small"
        fontIconClass={fontIconClass}
        fontIconColor={color}
        {...iconProps}
      />
      <Typography
        noWrap
        variant="subtitle1"
        color="textPrimary"
        className={clsx('icon-text__typography', classes.title)}
        {...typographyProps}
      >
        {title}
      </Typography>
    </div>
  );
};

export default IconText;
