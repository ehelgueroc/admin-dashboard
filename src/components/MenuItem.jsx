import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function Item({ item, selected, setSelected }) {
  const { title, icon, route } = item;
  return (
    <MenuItem active={selected === title} icon={icon}>
      <Link to={route} onClick={() => setSelected(title)}>
        {title}
      </Link>
    </MenuItem>
  );
}

export default Item;
