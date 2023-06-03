import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { useState } from 'react'


const Layout = () => {
    const [black, setBlack] = useState(false)
    const [font, setFont] = useState("inter")
    const [error, setError] = useState(false);
    const [definition, setDefinition] = useState({})
    return (
        <>
            <header style={{ backgroundColor: black ? "#050505" : "#FFFFFF" }}>
                <NavBar font={font}
                    setFont={setFont} black={black} setBlack={setBlack} />
                <SearchBar black={black} setError={setError} error={error} setDefinition={setDefinition} definition={definition} />
            </header>

            <main style={{ backgroundColor: black ? "#050505" : "#FFFFFF" }}>
                <Outlet context={[black, font, error, setError, definition]} />
            </main>

        </>
    )
}

export default Layout