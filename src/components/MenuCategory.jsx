import { Typography } from '@mui/material';
import React from 'react';
import Item from './MenuItem';

function MenuCategory({ category, selected, setSelected }) {
  return (
    <div>
      {category.showName && (
        <Typography sx={{ padding: '5px 35px 5px 20px' }}>{category.name}</Typography>
      )}
      {category.items.map((item) => (
        <Item key={item.title} item={item} selected={selected} setSelected={setSelected} />
      ))}
    </div>
  );
}

export default MenuCategory;
