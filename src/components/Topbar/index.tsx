import { Box, IconButton, InputBase, useMediaQuery } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { StyledBox } from './styles';
import useAuth from '../../utils/hooks/useAuth';
import { Link } from 'react-router-dom';
import { useProSidebar } from 'react-pro-sidebar';

const Topbar: React.FC = () => {
  const { currentUser, signout } = useAuth();
  const { collapseSidebar, collapsed } = useProSidebar();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  //const currentUser = { name: 'renan' };
  return (
    <StyledBox>
      {/* SEARCH BAR */}
      {isNonMobile && (
        <Box className="search-box">
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton className="icon-button" type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      )}
      {!isNonMobile && collapsed && (
        <IconButton className="icon-button">
          <MenuOutlinedIcon
            onClick={() => {
              collapseSidebar(!collapsed);
            }}
          />
        </IconButton>
      )}

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
