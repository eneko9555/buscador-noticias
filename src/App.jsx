import { Container, Grid, Typography } from '@mui/material';
import Formulario from './Components/Formulario';
import { NoticiasProvider } from './Context/NoticiasProvider';
import Noticias from './Components/Noticias';



function App() {


  return (
    <NoticiasProvider>
      <Container >
        <header>
          <Typography align='center' marginY={5} component="h1" variant='h3'>
            Buscador de Noticias
          </Typography>
        </header>
        <Grid container justifyContent="center">
          <Grid item md={8} xs={12}>
            <Formulario />
          </Grid>
        </Grid>

        <Noticias />
      </Container>
    </NoticiasProvider>

  )
}

export default App
