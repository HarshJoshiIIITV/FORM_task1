import React from 'react'
import { Grid, Paper, Container, Typography, AppBar, Toolbar, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { green, purple } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        h5: {
            fontSize: '80px'
        }
    }
});
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        // 8*2px=16px
    },
    title: {
        flexGrow: 1,
    },
}));
function Layout() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root} >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} >
                            News
                    </Typography>
                        <Button color="secondary">Login</Button>
                    </Toolbar>
                </AppBar>
                {/* 4*8=32px spacing between 2 grids hence 32/2=16px margin */}
                <Grid container spacing={4} style={{ margin: '0px', width: '100%' }}>
                    {/* spacing is basically padding in its nested grids */}
                    <Grid item xs={12} sm={6} md={4}>
                        {/* properties(variant) are of h6 but element(component) is h1 */}
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=12</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=6</Typography>
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=6</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=6</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=3</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=3</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=3</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography variant="h6" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=3</Typography>
                    </Grid>
                </Grid>
                <br />
                <Container>
                    <Typography variant="h5" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=3</Typography>
                    <Typography variant="h5" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=3</Typography>
                    <Typography variant="h5" component="h1" style={{ backgroundColor: 'blue  ' }} >xs=3</Typography>
                </Container>
            </div>
        </ThemeProvider>

    )
}

export default Layout
