import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { StyledBox } from './styles';
import useAuth from '../../utils/hooks/useAuth';
import { Link } from 'react-router-dom';

const Topbar: React.FC = () => {
  const { currentUser, signout } = useAuth();
  //const currentUser = { name: 'renan' };
  return (
    <StyledBox>
      {/* SEARCH BAR */}
      <Box className="search-box">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton className="icon-button" type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <ThemeSwitcher />
        <IconButton className="icon-button">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton className="icon-button">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton className="icon-button" onClick={() => signout()}>
          {currentUser && <span>{currentUser.name}</span>}
          {!currentUser && (
            <Link to={'/signup'}>
              Cadastre-se {/*<AddIcon className="icon-button" />*/}
            </Link>
          )}
        </IconButton>
        <IconButton className="icon-button" onClick={() => signout()}>
          {currentUser && <LogoutIcon className="icon-button" />}
          {!currentUser && (
            <Link to={'/login'}>
              Entre {/*<LoginIcon className="icon-button" />*/}
            </Link>
          )}
        </IconButton>
      </Box>
    </StyledBox>
  );
};

export default Topbar;
