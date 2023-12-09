import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import NoSsr from '@mui/material/NoSsr';

const useStyles = makeStyles(() => ({
  extraSmall: {
    fontSize: 10,
  },
  small: {
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
}));

/**
 * Component to display the icon
 *
 * @param {Object} props 
 */
const Icon = ({ fontIconClass, size = 'small', fontIconColor, className, ...rest }: IconProps): JSX.Element => {
  const classes = useStyles();

  return (
    <NoSsr>
      <i
        className={clsx(
          'icon',
          fontIconClass,
          classes[size],
          className,
        )}
        style={{ color: fontIconColor }}
        {...rest}
      />
    </NoSsr>
  );
};

export default Icon;
