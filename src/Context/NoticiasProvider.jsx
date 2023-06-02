import { useState, useEffect, createContext, useContext } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoriaElegida, setCategoriaElegida]= useState("general")
    const [noticias, setNoticas] = useState([])
    const categoria = (categoria) => {
        setCategoriaElegida(categoria)
    }
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    // Consultar API
    useEffect(() => {
        const consultarAPI = async () => {
            
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoriaElegida}&pageSize=6&apiKey=${import.meta.env.VITE_API_KEY}`
            const respuesta = await fetch(url)
            const resultado =  await respuesta.json()
            setNoticas(resultado.articles);    
            setTotalNoticias(resultado.totalResults)   
           
        }
        consultarAPI()
    }, [categoriaElegida])

      // Consultar API page
      useEffect(() => {
         const consultarAPI = async () => {
            
             const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoriaElegida}&page=${pagina}&pageSize=6&apiKey=${import.meta.env.VITE_API_KEY}`
             const respuesta = await fetch(url)
             const resultado =  await respuesta.json()
             setNoticas(resultado.articles);    
          setTotalNoticias(resultado.totalResults) 
           
         }
         consultarAPI()
     }, [ pagina])

   
    const handleChangePagina = (e, valor) => {
        setPagina(valor)      
    }
   
    return(
        <NoticiasContext.Provider
            value={{
                categoria,
                categoriaElegida,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}
export {
    NoticiasProvider
}
export default NoticiasContext