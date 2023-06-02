import useNoticias from "../Hooks/useNoticias"
import Noticia from "./Noticia"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Noticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 6)

    return (
        <>
            <Typography
                textAlign="center"
                marginY={5}
                variant="h3"
                component="h2"
            >Últimas Noticias
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {noticias?.map(noticia => <Noticia noticia={noticia} key={noticia.url} />)}
            </Grid>

            <Stack spacing={2} marginY={5} width="100%" alignItems={"center"} >
                <Pagination count={totalPaginas} color="primary"  onChange={handleChangePagina} page={pagina}/>
            </Stack>
        </>
    )
}

export default Noticias