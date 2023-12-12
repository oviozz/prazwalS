
import Tooltip from '@mui/joy/Tooltip';
import "./NavBarButton.css";
import {Link} from "react-router-dom";

function NavBarButton({ icon: IconComponent, title, path, target }) {
    return (
        <Tooltip
            sx={{
                backgroundColor: 'rgba(13,13,18,0.70)',
                color: 'white',
                border: 'none',
                fontWeight: '400'
            }}
            title={title}
            followCursor={true}
            placement="top"
            size="sm"
            variant="outlined"
        >
            <Link target={`${target || ''}`} to={path || '/'} className="relative rounded-full bg-black p-2 transform transition-transform hover:scale-110">
                {IconComponent && <IconComponent size={30} color={'#d2c6c6'} />}
            </Link>

        </Tooltip>

    );
}

export default NavBarButton;
