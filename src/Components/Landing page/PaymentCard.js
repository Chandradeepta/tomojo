import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
 
const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 310,
        maxWidth: 310,
        maxHeight: 412,
        minHeight: 412,
        margin: 'auto',
        marginTop: 50,
        borderRadius: 28,
        boxShadow: '0px 10px 120px 10px rgba(16,42,67,0.1);',
        position: 'relative',
        overflow: 'visible',
        paddingLeft: '1%',
        paddingRight: '2%'
    },
    priceTag: {
        width: 68,
        height: 95,
        position: 'relative',
        top: -16,
        background: "linear-gradient(80deg, rgba(0,91,255,1) 0%, rgba(0,158,252,1) 100%)",
        marginLeft: 'auto',
        borderBottomColor: '#fff',
        fontSize: 22,
        padding: 'auto',
        '&::before': {
            content: '""',
            width: 14,
            height: 16,
            background: '#0f52ba',
            position: 'absolute',
            left: -13,
            clipPath: 'polygon(100% 0, 0% 100%, 100% 100%);'
        },
        '&::after': {
            content: '"/month"',
            display: 'block',
            whiteSpace: 'break-spaces',
            fontSize: 12,
            color: grey[100]
        },
    },
    currency: {
        '&::before': {
            content: "",
            color: grey[100]
        },
    },
    triangle: {
        width: 68,
        height: 25,
        position: 'absolute',
        bottom: 0,
        background: 'white',
        clipPath: 'polygon(50% 0%, 0% 102%, 100% 102%);',
        borderBottomColor: '#fff'
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingTop: '10%'
    },
    title: {
        textAlign: 'left',
        fontWeight: theme.typography.fontWeightBold
    },
    cardContent: {
    },
    pos: {
        marginBottom: 12,
    },
}));
 
const plans = ["Unlock all features from our site", "24/7 priority support", "Access to pro group", "Cancel anytime you want"]
 
export default function PaymentCard() {
    const classes = useStyles();
 
    return (
        <>
            <Card className={classes.root}>
                <div style={{ position: 'relative' }}>
                    <div className={classes.priceTag}>
                        <div className={classes.priceContainer}>
                            <div className={classes.currency}>
                                <Typography variant="h6">&#36;19</Typography>
                            </div>
                        </div>
                        <div className={classes.triangle}></div>
                    </div>
                </div>
                <CardHeader
                    title={
                        <div className={classes.headerContainer}>
                            <Typography variant="subtitle1" align="left" color="textSecondary">
                                Most Popular
                            </Typography>
                            <Typography variant="h3" className={classes.title}>
                                Professional
                            </Typography>
                        </div>
                    }
                />
                <CardContent className={classes.cardContent}>
                    {
                        plans.map(plan => {
                            return <Typography variant="h6" align="left" display="flex">
                                <Typography variant="subtitle1" display="inline">&#9989;</Typography>&nbsp;{plan}
                            </Typography>
                        })
                    }
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button variant="contained" color="primary" fullWidth>Choose this plan</Button>
                </CardActions>
            </Card>
        </>
    );
}
