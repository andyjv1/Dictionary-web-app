import React from 'react'
import NotFound from './NotFound'
import Found from './Found'
import Error from './Error';
import { useOutletContext } from "react-router-dom";
import Loading from './Loading';
const Body = () => {
    const [black, font, error, setError, definition, loading] = useOutletContext();
    const content = error ?
        (<> <Error setError={setError} /></>) : loading ? (<><Loading /> </>) : definition.title === "No Definitions Found" ?
            (<> <NotFound black={black} font={font} /> </>) :
            (<> <Found black={black} font={font} definition={definition} /> </>)

    return content
}

export default Body