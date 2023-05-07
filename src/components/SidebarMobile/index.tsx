import { useContext, useState } from 'react';
import {
  Sidebar as ProSidebar,
  Menu,
  sidebarClasses,
  useProSidebar,
} from 'react-pro-sidebar';
import { Box, ListItem, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
//import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { StyledIcon, StyledNavBox } from './styled';
import { MItem as Item, ItemsTile } from './itens';
import PersistedThemeContext from '../../contexts/ThemeContext';
import { typography } from '../../styles/typography';

const Sidebar = () => {
  const { theme } = useContext(PersistedThemeContext);
  const [selected, setSelected] = useState('Dashboard');
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <StyledNavBox>
      {true && (
        <ProSidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              background: `${theme.palette.background.default}`,
            },
          }}
        >
          <Menu>
            {/* LOGO AND MENU ICON */}
            <ListItem
              onClick={() => {
                collapseSidebar(!collapsed);
              }}
              style={{
                margin: '10px 0 20px 0',
                color: theme.palette.neutral.light,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/*collapsed ? <MenuOutlinedIcon /> : undefined*/}
              {!collapsed && (
                <Box
                  sx={{
                    '.icon-button:hover': {
                      color: 'orange',
                    },
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant="h3"
                    color={theme.palette.neutral.light}
                    fontSize={typography.h3.fontSize}
                  >
                    ADMINIS
                  </Typography>
                  <StyledIcon
                    style={{ color: theme.palette.neutral.light }}
                    onClick={() => {
                      collapseSidebar(!collapsed);
                    }}
                  >
                    <CloseOutlinedIcon />
                  </StyledIcon>
                </Box>
              )}
            </ListItem>

            {!collapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="Logo engenharia de concursos"
                    width="100px"
                    height="100px"
                    src={'assets/favicon.svg'}
                    style={{ cursor: 'pointer', borderRadius: '20%' }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={theme.palette.neutral.light}
                    fontWeight="bold"
                    fontSize={typography.h2.fontSize}
                    sx={{ m: '10px 0 0 0' }}
                  >
                    Engenharia <br />
                    de Concursos
                  </Typography>
                  <Typography variant="h5" color={theme.palette.secondary.main}>
                    Simulador de provas
                  </Typography>
                </Box>
              </Box>
            )}

            {!collapsed && (
              <Box paddingLeft={collapsed ? '0' : '0'}>
                <Item
                  title="Página inicial"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                {!collapsed && <ItemsTile>Dados</ItemsTile>}
                <Item
                  title="Lista de Questões"
                  to="/questions-lists"
                  icon={<PeopleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Inserir Questões"
                  to="/add-questions"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Buscar Questions"
                  to="/find-questions"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                {!collapsed && <ItemsTile>Provas</ItemsTile>}
                <Item
                  title="Simular Novo Concurso"
                  to="/simulator"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Histórico"
                  to="/history"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="FAQ Page"
                  to="/faq"
                  icon={<HelpOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                {!collapsed && <ItemsTile>Sobre</ItemsTile>}
                <Item
                  title="Bar Chart"
                  to="/about"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Entre em contato"
                  to="/contact"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            )}
          </Menu>
        </ProSidebar>
      )}
    </StyledNavBox>
  );
};

export default Sidebar;
