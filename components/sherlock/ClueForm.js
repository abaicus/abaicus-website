import {PlusIcon, LockClosedIcon} from "@heroicons/react/outline";
import {useState} from 'react';

export const ClueForm = ({onAdd, location, initialValue, empty}) => {
    const [val, setVal] = useState(initialValue || null);

    const updateInput = (e) => {
        setVal(e.target.value);
    }

    const addClue = (e) => {
        e.preventDefault();
        if (!empty) {
            onAdd(location, null);
            return false;
        }
        onAdd(location, parseInt(val));
    }

    return (
        <form onSubmit={addClue}>
            <label htmlFor={location}><h5>{location}</h5></label>
            <span className='input-btn'>
                <input
                    disabled={! empty}
                    id={location}
                    name={location}
                    type="number"
                    value={parseInt(val)}
                    max={1050}
                    min={1}
                    placeholder={'Clue #'}
                    onChange={updateInput}
                />

                <button type="submit" onClick={addClue}>
                    {empty ? <PlusIcon/> : <LockClosedIcon/>}
                </button>
            </span>
        </form>
    )
}
