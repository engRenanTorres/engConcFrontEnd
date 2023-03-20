import { SwitchThemeStyled } from './styled';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme?: () => void;
}

export const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <SwitchThemeStyled>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={theme.title === 'Dark'} onChange={toggleTheme} />
          }
          label={theme.title === 'Dark' ? <DarkModeIcon /> : <LightModeIcon />}
        />
      </FormGroup>
    </SwitchThemeStyled>
  );
};
