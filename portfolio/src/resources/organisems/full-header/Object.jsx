import HeaderRefLink from "../../atoms/header_ref_link/Object";
import HeaderBar from "../../molecules/header_bar/Object";

const FullHeader = () => {
    return (
        <HeaderBar>
            <HeaderRefLink content='Home'/>
            <HeaderRefLink content='My Projects'/>
            <HeaderRefLink content='About Me'/>
            <HeaderRefLink content='Contact'/>
        </HeaderBar>
    )
}

export default FullHeader;