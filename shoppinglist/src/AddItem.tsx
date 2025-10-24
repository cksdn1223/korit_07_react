import { Button, TextField, Dialog, DialogContent, DialogTitle  } from "@mui/material";
import { useState } from "react";
import { createItem } from "./api/Itemapi";
import { Item } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AddItem() {
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
  const { mutate } = useMutation(createItem, {
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
      <Button onClick={handleOpen} variant="outlined">
        Add Item
      </Button>
      <Dialog open={open} /*onClose={handleClose}*/>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField value={item.itemName} margin="dense"
            onChange={e => setItem({...item, itemName: e.target.value})}
            label="Product/제품명" fullWidth />
          <TextField value={item.amount} margin="dense"
            onChange={e => setItem({...item, amount: e.target.value})}
            label="Amount/수량" fullWidth
          />
        </DialogContent>
        <Button onClick={handleClose}>
          Cancel / 취소
        </Button>
        <Button onClick={() => mutate(item)}>
          Add / 저장
        </Button>
      </Dialog>
    </>
  );
}

export default AddItem;