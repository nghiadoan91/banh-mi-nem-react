import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Divider } from '@mui/material';
import { Section } from '../../organisms';
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    maxWidth: 1236,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  heroLeftSide: {
    padding: theme.spacing(3, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 8),
    },
  },
  heroRightSide: {
    maxWidth: '50%',
    flex: '0 0 50%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '300px',
    },
  },
  heroCover: {
    position: 'relative',
    width: '50vw',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroImageContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    left: '0%',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
    },
  },
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShaped = ({ leftSide, rightSide, className, ...rest }: HeroShapedProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
      <div className={clsx('hero-shaped__wrapper', classes.hero)}>
        <Section
          className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
        >
          {leftSide}
        </Section>
        <div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
          <div className={clsx('hero-shaped__cover', classes.heroCover)}>
            <div
              className={clsx(
                'hero-shaped__image-container',
                classes.heroImageContainer,
              )}
            >
              <div className={clsx('hero-shaped__image', classes.heroImage)}>
                {rightSide}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default HeroShaped;
