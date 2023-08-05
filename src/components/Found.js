import React from 'react'
import { ReactComponent as Window } from "../images/icon-new-window.svg";
import { ReactComponent as Play } from "../images/icon-play.svg";

const Found = ({ black, font, definition }) => {
    let word
    let url

    const wordsDefinition = {
        verb: [],
        noun: [],
        adjective: [],
        adverb: [],
        preposition: [],
        interjection: [],
        conjunction: []
    }

    const wordsSynonyms = {
        verb: [],
        noun: [],
        adjective: [],
        adverb: [],
        preposition: [],
        interjection: [],
        conjunction: []
    }

    Object.keys(definition).forEach(function (key) {
        word = definition[0].word
        url = definition[0].sourceUrls[0]
        definition[key].meanings.forEach(x => {
            if (x.partOfSpeech === "verb") {
                x.definitions.map(x => wordsDefinition.verb.push(x))
                x.synonyms.map(x => wordsSynonyms.verb.push(x))
            } else if (x.partOfSpeech === "noun") {
                x.definitions.map(x => wordsDefinition.noun.push(x))
              x.synonyms.map(x => wordsSynonyms.noun.push(x))
            } else if (x.partOfSpeech === "adjective") {
                x.definitions.map(x => wordsDefinition.adjective.push(x))
              x.synonyms.map(x => wordsSynonyms.adjective.push(x))
            } else if (x.partOfSpeech === "adverb") {
                x.definitions.map(x => wordsDefinition.adverb.push(x))
              x.synonyms.map(x => wordsSynonyms.adverb.push(x))
            } else if (x.partOfSpeech === "preposition") {
                x.definitions.map(x => wordsDefinition.preposition.push(x))
               x.synonyms.map(x => wordsSynonyms.preposition.push(x))
            } else if (x.partOfSpeech === "interjection") {
                x.definitions.map(x => wordsDefinition.interjection.push(x))
                x.synonyms.map(x => wordsSynonyms.interjection.push(x))
            } else {
                x.definitions.map(x => wordsDefinition.conjunction.push(x))
               x.synonyms.map(x => wordsSynonyms.conjunction.push(x))
            }
        })
    });

    function play() {
        if (Object.values(definition)[0]?.phonetics[1]?.audio) {
            new Audio(Object.values(definition)[0]?.phonetics[1]?.audio).play()
        }
    }
    const content = (
        Object.values(wordsDefinition).map((x, index) =>
            x.length !== 0 ?
                <div key={index}>
                    <div className="word-class">
                        <h2 style={{
                            color: black ? "#FFFFFF" : "#2D2D2D",
                            fontStyle: font === "lora" || font === "Mono" ? "normal" : "italic",
                            fontWeight: font === "lora" ? "400" : "700",
                            fontFamily: font === "Mono" ? "inconsolata" : "inter"
                        }}
                        >{Object.keys(wordsDefinition)[index]}</h2>
                    </div>
                    <h3 className="meaning">Meaning</h3>
                    <ul className='definition'>
                        {x.map((x, index) =>
                            <li
                                key={index}
                            >
                                <span style={{ color: black ? "#FFFFFF" : "#2D2D2D" }}>{x.definition}</span>
                                <span>{x.example}</span>
                            </li>
                        )}
                    </ul>
                    
                    {Object.values(wordsSynonyms)[index].length !== 0 ? <h3 className="synonyms">Synonyms 
                        {
                            Object.values(wordsSynonyms)[index].map((y, index) => {
                                return <span key={index}>{(index ? ', ' : '') + y}</span>
                            })
                        }    
                    </h3> : null}
                </div>
                :
                null
        )


    )

    return (
        <>
            <div className="main-word">
                <div className="main-word__text">
                    <h1
                        style={{ color: black ? "#FFFFFF" : "#2D2D2D" }}
                    >{word}</h1>
                    <p>{definition[0]?.phonetic}</p>
                </div>
                <Play
                    className={(Object.values(definition)[0]?.phonetics[1]?.audio ? 'main-word__play' : 'main-word__play--disabled')}
                    onClick={play}
                    style={{ color: black ? "#FFFFFF" : "#2D2D2D" }}
                />
            </div>
            {content}
            <hr />
            <div className="source">
                <p>Source</p>
                <div>
                    <a href={url}
                        style={{ color: black ? "#FFFFFF" : "#2D2D2D" }}
                    >{url}</a>
                    <Window/>

                </div>
            </div>

        </>)
}

export default Found