import { useState, useEffect } from "react";

const TextCode = ({ text = "", speed = 50, blinkSpeed = 80 }) => {
    const [shown, setShown] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const s = String(text);
        let i = 0;
        let typingTimer;
        let blinkTimer;

        setShown("");
        setCursorVisible(true);

        const typeStep = () => {
            // Vor jedem Buchstaben kurz Cursor anzeigen
            setCursorVisible(true);

            setTimeout(() => {
                setShown(prev => prev + s[i]);
                i++;
                if (i < s.length) {
                    typingTimer = setTimeout(typeStep, speed);
                } else {
                    blinkTimer = setInterval(() => {
                        setCursorVisible(prev => !prev);
                    }, 300);
                }
            }, blinkSpeed);
        };

        if (s.length > 0) {
            typingTimer = setTimeout(typeStep, speed);
        }

        return () => {
            clearTimeout(typingTimer);
            clearInterval(blinkTimer);
        };
    }, [text, speed, blinkSpeed]);

    return (
        <div style={containerSize}>
            <p style={{...style}}>
                {shown}
                <span style={{
                    opacity: cursorVisible ? 1 : 0,
                    transition: "opacity 0.2s ease",}}>
                    _
                </span>
            </p>
        </div>
    );
};
export default TextCode;

const style = {
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold',
    userSelect: 'none',
};

const containerSize = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '400px'
}