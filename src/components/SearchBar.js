import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import { ReactComponent as Search } from "../images/icon-search.svg";
import { useParams } from 'react-router-dom';

const SearchBar = ({ black, setError, setDefinition }) => {
    const [name, setName] = useState("")
    const [empty, setEmpty] = useState(false)
    const navigate = useNavigate();
    const { id } = useParams()

    const fetchAdvice = useCallback(async () => {
        let API_LINK
        if (id !== undefined && name === "") {
            API_LINK = `https://api.dictionaryapi.dev/api/v2/entries/en/${id}`;
            setName(id)
        } else {
            API_LINK = `https://api.dictionaryapi.dev/api/v2/entries/en/${name}`;
        }

        try {
            const response = await fetch(API_LINK);
            const text = await response.json();
            setDefinition(text)
        } catch (ex) {
            setError(true);
        }
    }, [id, name, setDefinition, setError]);

    useEffect(() => {
        if (id !== undefined) {
            fetchAdvice()
        }
    }, []);

    useEffect(() => {
        if (name !== "") {
            setEmpty(false)
        }
    }, [name]);

    function handleSubmit(e) {
        if (name === "") {
            e.preventDefault();
            setEmpty(true)
        } else {
            e.preventDefault();
            fetchAdvice()
            navigate(`/${name}`)
        }
    }

    return (
        <>
            <form
                className={` search-bar ${empty ? "search-bar--empty" : null}`}
                role="search"
                id="form"
                onSubmit={handleSubmit}
                style={{ background: black ? "#3A3A3A" : "#F4F4F4", marginBottom: empty ? "8px" : "1.5em" }}
            >
                <input
                    type="text"
                    placeholder="Search for any word…"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={{ color: black ? "#FFFFFF" : "#2D2D2D" }}
                />
                <button>
                    <Search/>
                </button>
            </form>
            <p
                className='empty-text'
                style={{ display: empty ? "inline" : "none" }}
            >Whoops, can’t be empty…</p>
        </>
    )
}

export default SearchBar