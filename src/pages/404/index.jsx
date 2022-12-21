import { Typography,Stack,Grid } from "@mui/material"



const ErrorPage=()=>{
    return(
        <Stack>
            <Grid container  justifyContent='center' spacing={0}>
            <Grid>      
            <Typography variant="h3" component='h1'  color="error">Error 404 Page Not Foundd</Typography>
            </Grid>
            </Grid>

        </Stack>
    )
}

export default ErrorPage