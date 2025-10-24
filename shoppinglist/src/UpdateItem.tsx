import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { updateItems } from './api/Itemapi';
import { Item } from './types';

function UpdateItem(props) {
  const [ open, setOpen ] = useState(false);
  const [ item, setItem ] = useState<Item>({
    itemName: '',
    amount: ''
  })
  const queryClient = useQueryClient();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setItem({ itemName: '', amount: '' });
  }
  const { mutate } = useMutation(updateItems, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      handleClose();
    },
    onError: (err) => {
      console.log(err);
    }
  })
  return (
    <>
      <Button onClick={()=>handleOpen()}>Update</Button>
      <Dialog  open={open} >
        <DialogTitle>Update Item</DialogTitle>
        <DialogContent>
          <TextField value={item.itemName} margin="dense"
            onChange={e => setItem({...item, itemName: e.target.value})}
            label="Product/제품명" fullWidth />
          <TextField value={item.amount} margin="dense"
            onChange={e => setItem({...item, amount: e.target.value})}
            label="Amount/수량" fullWidth
          />
        </DialogContent>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button style={{width:'40%', marginBottom:'20px'}} variant='outlined' onClick={handleClose}>
            Cancel / 취소
          </Button>
          <Button style={{width:'40%', marginBottom:'20px'}} variant='outlined' onClick={() => mutate({id:props.id, item:{itemName:item.itemName, amount:item.amount}})}>
            Update / 수정
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default UpdateItem;