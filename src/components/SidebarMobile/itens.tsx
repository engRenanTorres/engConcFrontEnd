import { typography } from '../../styles/typography';
import PersistedThemeContext from '../../contexts/ThemeContext';
import { ListItem, ListItemButton, Typography } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction, useContext } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { shade } from 'polished';

type PropsItem = {
  title: string;
  to?: string;
  icon: ReactNode;
  selected?: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const MItem: React.FC<PropsItem> = ({
  title,
  icon,
  selected,
  setSelected,
}: PropsItem) => {
  const { collapsed } = useProSidebar();
  const { theme } = useContext(PersistedThemeContext);
  return (
    <ListItem
      style={{
        borderRadius: '15px',
      }}
      onClick={() => setSelected(title)}
    >
      <ListItemButton
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: collapsed ? 'center' : 'flex-start',
          color: theme.palette.neutral.light,
          background:
            selected === title
              ? shade(0.2, theme.palette.background.default)
              : theme.palette.background.default,
          borderRadius: '15px',
        }}
      >
        {/*icon*/}
        {!collapsed && (
          <Typography
            style={{
              marginLeft: '1rem',
              fontSize: typography.fontSize.medium,
            }}
          >
            {title}
          </Typography>
        )}
        {/*<Link href={to} />*/}
      </ListItemButton>
    </ListItem>
  );
};
type Props = {
  children: string;
};

export const ItemsTile: React.FC<Props> = ({ children }: Props) => {
  const { theme } = useContext(PersistedThemeContext);
  return (
    <Typography
      variant="h6"
      color={theme.palette.secondary.light}
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        m: '15px 0 5px 20px',
      }}
    >
      {children}
    </Typography>
  );
};
