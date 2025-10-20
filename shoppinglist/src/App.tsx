import { Button, Container } from '@mui/material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import './App.css';
import { useState } from 'react';
import AddItem from './AddItem';

export type Item = {
  product: string
  amount: string
}

function App() {
  const [ items, setItems ] = useState<Item[]>([])
  const addItem = (item:Item) => setItems([item, ...items]);

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6'>
            쇼핑 리스트 Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
      <AddItem addItem={addItem} />
      <List>
        {
          items.map((item, index) => 
            <ListItem key={index} divider>
              <ListItemText primary={item.product} secondary={item.amount} />
              <Button onClick={()=>handleDelete(index)}>Delete</Button>
            </ListItem>
            )
        } 
      </List>
    </Container>
  );
}

export default App;