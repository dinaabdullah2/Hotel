import { Container, Overlay, Text, Title, createStyles, rem } from '@mantine/core';
import React from 'react'


type Banner_TP = {
    label?: string;
    placeholder?: string;
    description?: string;
    error?: string;
    bannerImg?: any;
    className?:string;
    descriptionBoolean:boolean;
  };

export const HeaderBanner = ({
    label,
    placeholder,
    description,
    error,
    bannerImg,
    className,
    descriptionBoolean
  }:Banner_TP) => {
    
    const useStyles = createStyles((theme) => ({
        wrapper: {
          position: "relative",
          paddingTop: rem(150),
          paddingBottom: rem(150),
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
    
          [theme.fn.smallerThan("xs")]: {
            paddingTop: rem(100),
            paddingBottom: rem(100),
          },
        },
    
        inner: {
          position: "relative",
          zIndex: 1,
        },
    
        title: {
          fontWeight: 200,
          fontSize: rem(70),
          letterSpacing: rem(-1),
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
          color: theme.white,
          marginBottom: theme.spacing.xs,
          textAlign: "center",
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    
          [theme.fn.smallerThan("xs")]: {
            fontSize: rem(40),
            textAlign: "left",
          },
        },
    
        highlight: {
          color: theme.colors[theme.primaryColor][4],
        },
    
        description: {
          color: theme.colors.gray[0],
          textAlign: "center",
    
          [theme.fn.smallerThan("lg")]: {
            fontSize: theme.fontSizes.md,
            textAlign: "left",
          },
        },
    
        controls: {
          marginTop: `calc(${theme.spacing.xl} * 1.5)`,
          display: "flex",
          justifyContent: "center",
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md,
    
          [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
          },
        },
    
        control: {
          height: rem(42),
          fontSize: theme.fontSizes.md,
    
          "&:not(:first-of-type)": {
            marginLeft: theme.spacing.md,
          },
    
          [theme.fn.smallerThan("xs")]: {
            "&:not(:first-of-type)": {
              marginTop: theme.spacing.md,
              marginLeft: 0,
            },
          },
        },
    
        secondaryControl: {
          color: theme.white,
          backgroundColor: "rgba(255, 255, 255, .4)",
    
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, .45) !important",
          },
        },
      }));
    
      const { classes, cx } = useStyles();
    
  return (
    <div className={`${classes.wrapper}`}>
    <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
           {label}
        </Title>
        {descriptionBoolean? 
        <Container className='mt-5'>
          <Text size="lg" className={classes.description}>
             {description}
          </Text>
        </Container>
        :
        null
        }
    </div>
  </div>
  )
}
export default HeaderBanner