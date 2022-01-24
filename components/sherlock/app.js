// import './scss/style.scss';
import {useEffect, useState} from 'react';
import {clues} from "./clues";
import {ClueForm} from "./ClueForm";
import {LocalStorageKey, Locations} from "./constants";

const App = () => {
        const [saved, setSaved] = useState(Locations);
        const [err, setError] = useState(null);

        useEffect(() => {
            const local = JSON.parse(window.localStorage.getItem(LocalStorageKey) || '{}');
            setSaved({...Locations, ...local})
        }, [])

        const addClue = (location, value) => {
            if (!value) {
                const next = {...saved, [location]: null};
                setSaved(next);
                window.localStorage.setItem(LocalStorageKey, JSON.stringify(next));
                return false;
            }

            const nextVal = parseInt(value);

            if (nextVal < 0 || nextVal > 1050) {
                setError('Invalid Clue Number');
                return false;
            }

            if (typeof nextVal !== 'number') {
                setError('Not a Number');
                return false;
            }

            const next = {...saved, [location]: nextVal};
            setSaved(next);
            window.localStorage.setItem(LocalStorageKey, JSON.stringify(next));
        }

        const reset = () => {
            window.localStorage.removeItem(LocalStorageKey);
            window.location.reload();
        }

        useEffect(() => {
            if (err === null) return;
            setTimeout(() => {
                setError(null);
            }, 10000)
        }, err)

        return <div>
            {err &&
                <div className='sl-error'><span>{err}</span>
                    <button onClick={() => {
                        setError(null)
                    }}/>
                </div>
            }
            <ul className="sherlock-list">
                {Object.keys(Locations).map(l => {
                    return (
                        <li>
                            <ClueForm
                                onAdd={addClue}
                                location={l}
                                initialValue={saved[l]}
                                empty={saved[l] === null}/>
                            {saved[l] &&
                                <p className='clue-text' dangerouslySetInnerHTML={{__html: clues[saved[l]].text}}/>
                            }
                            <hr/>
                        </li>
                    )
                })}
            </ul>
            <button className='sl-reset' onClick={reset}>Reset All</button>
        </div>
    }
;

export default App;
