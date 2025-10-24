import { Button, Container } from '@mui/material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import './App.css';
import AddItem from './AddItem';
import { deleteItems, getItems } from './api/Itemapi';
import CircularProgress from '@mui/material/CircularProgress';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UpdateItem from './UpdateItem';


function App({ setAuth }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteItems, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
    onError: (err) => {
      console.log(err);
    }
  })
  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ["items"],
    queryFn: getItems
  })

  if (isLoading) {
    return <CircularProgress />
  }
  if (!isSuccess) {
    return <span>
      아이템들을 불러오는 데 실패했습니다. <br />
      {error instanceof Error ? error.message : "?Error"} <br />
      <Button onClick={() => {
        localStorage.removeItem('jwt');
        const re = () =>setAuth(false);
        re();
      }}>돌아가기</Button>
    </span>
  }
  else return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6'>
            쇼핑 리스트 Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
      <AddItem />
      <List>
        {
          data.map((item) => 
            <ListItem key={item.id} divider>
              <ListItemText primary={item.itemName} secondary={item.amount} />
              <UpdateItem id={item.id}/>
              <Button onClick={()=>mutate(item.id)}>Delete</Button>
            </ListItem>
            )
        } 
      </List>
    </Container>
  );
}

export default App;