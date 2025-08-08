import { useState } from "react";  

function NameSubmitForm() {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
        setSubmittedName(false);
    }
    function handleSubmit(event) {
        event.preventDefault();
        setSubmittedName(name);
    }

    return (
        <div style={{ margin: '20px' }}>
            <h2> enter name</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleChange} 
                    placeholder="Имя"
                    style={{ padding: '10px', marginRight: '10px' }} 
                />
                <button type="submit"> Send</button>
                {submittedName && (
                    <p style={{ color: 'blue' }}>
                        ✅ You submitted: <strong>{submittedName}</strong>
                    </p>
                )}
            </form>
        </div>
    );
}
export default NameSubmitForm;
