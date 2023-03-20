import { Typography } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction, useContext } from 'react';
import { MenuItem } from 'react-pro-sidebar';
import PersistedThemeContext from '../../context/ThemeContext';
import { typography } from '../../styles/typography';

type PropsItem = {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const Item: React.FC<PropsItem> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: PropsItem) => {
  const { theme } = useContext(PersistedThemeContext);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: theme.palette.neutral.light,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography style={{ fontSize: typography.fontSize.medium }}>
        {title}
      </Typography>
      <a href={to} />
    </MenuItem>
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
      className="x"
      color={theme.palette.secondary.light}
      sx={{ m: '15px 0 5px 20px' }}
    >
      {children}
    </Typography>
  );
};
