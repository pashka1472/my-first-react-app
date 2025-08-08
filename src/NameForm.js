import { useState } from "react";   

function NameForm() {
    const [name, setName] = useState("");
    const [savedName, setSavedName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSavedName(name);
    }

    return (
        <div style ={{ margin: '20px' }}>
            <h2>enter Your name</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} />
                <button type="submit">Submit</button> 
            </form>
            {savedName && (
                <p style={{ color: 'green' }}>
                    ✅ You saved: <strong>{savedName}</strong>
                </p>
            )}
        </div>
    );

}

export default NameForm;