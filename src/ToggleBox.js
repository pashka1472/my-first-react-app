import { useState } from "react";

function TuggleBox() {
    const [isVisible, setIsVisible] = useState(true);

    function toggle() {
        setIsVisible(!isVisible);
    }

    return (
        <div style={{ margin: '20px' }}>
            <button onClick={toggle}>
                {isVisible ? 'Скрыть' : 'Показать'} Текст
            </button>
            {isVisible && (
                <div style={{ marginTop: '10px', padding: '20px', backgroundColor: '#f0f0f0' }}>
                    Привет! Этот текст можно скрыть или показать по нажатию кнопки.
                </div>
            )}
        </div>
    )
}
export default TuggleBox;