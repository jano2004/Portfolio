import {style} from "./style";
import img from '../../z-media/images/header-image.png';

const HeaderBar = ({children}) => {
    return (
        <div style={style.container}>
            <div style={style.content}>
                {/*<img src={img} alt={'header-image'} style={style.logo}/>*/}
                {children}
            </div>
        </div>
    )
}

export default HeaderBar;