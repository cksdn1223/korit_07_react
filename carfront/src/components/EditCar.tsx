import { ChangeEvent, useState } from "react";
import { Car, CarResponse } from "../Types";
import { Button, IconButton, Dialog, DialogActions, DialogTitle, Tooltip } from "@mui/material";
import CarDialogContent from "./CarDialogContent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar } from "../api/carapi";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

type FormProps = {
  cardata: CarResponse;
}

function EditCar({cardata}: FormProps) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false)
  const [car, setCar] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0,
  })
  const { mutate } = useMutation(updateCar, {
      onSuccess: () => {
        queryClient.invalidateQueries(["cars"]);
      },
      onError: err => console.log(err)
  })
  const handleClickOpen = () => {
    setCar({...cardata})
    setOpen(true)
  };
  const handleClickClose = () => setOpen(false);
  const handleSave = () => {
    mutate({
      car: car,
      url: cardata._links.self.href
    });
    setCar({
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 0,
      price: 0,
    });
    setOpen(false);
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Tooltip title="Edit Car" arrow>
        <IconButton onClick={handleClickOpen} aria-label="edit" size="small">
          <EditRoundedIcon fontSize="small"/>
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleSave}>Save | 저장</Button>
          <Button onClick={handleClickClose}>Cancel | 취소</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditCar;