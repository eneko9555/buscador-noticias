import { useContext } from "react";
import NoticiasContext from "../Context/NoticiasProvider";

const useNoticias  = () => {
    return useContext(NoticiasContext)
}

export default useNoticias