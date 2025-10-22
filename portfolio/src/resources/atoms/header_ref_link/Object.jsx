import {style} from './style';
import {useState} from 'react';

const HeaderRefLink = ({color, content}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            style={{
                ...style,
                color: color || 'white',
                position: 'relative',
                textDecoration: 'none',
                display: 'inline-block',
                overflow: 'hidden',}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {content}
            <span
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '1px',
                    width: hovered ? '100%' : '0%',
                    backgroundColor: color || 'white',
                    transition: 'width 0.2s ease',}}/>
        </a>
    )
}

export default HeaderRefLink;