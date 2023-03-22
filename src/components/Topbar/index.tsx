import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { StyledBox } from './styles';
//import useAuth from '../../utils/hooks/useAuth';

const Topbar: React.FC = () => {
  //const { currentUser, loading, signin, signout } = useAuth();
  const currentUser = { name: 'renan' };
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
        <IconButton
          className="icon-button"
          onClick={() => /*signout()*/ console.log('saiu')}
        >
          {currentUser && <span>{currentUser.name}</span>}
          {currentUser && <LogoutIcon className="icon-button" />}
          {!currentUser && (
            <a href={'/login'}>
              <LoginIcon className="icon-button" />
            </a>
          )}
        </IconButton>
      </Box>
    </StyledBox>
  );
};

export default Topbar;
