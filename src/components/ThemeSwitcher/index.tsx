import { SwitchThemeStyled } from './styled';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import PersistedThemeContext from '../../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(PersistedThemeContext);
  return (
    <SwitchThemeStyled>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={theme.title === 'Dark'}
              onChange={() => toggleTheme(theme.title as 'Default' | 'Dark')}
            />
          }
          label={theme.title === 'Dark' ? <DarkModeIcon /> : <LightModeIcon />}
        />
      </FormGroup>
    </SwitchThemeStyled>
  );
};
