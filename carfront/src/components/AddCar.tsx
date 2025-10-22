import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input } from "@mui/material"
import { Car } from "../Types"
import { ChangeEvent, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addCar } from "../api/carapi"
import CarDialogContent from "./CarDialogContent"

function AddCar() {
  const [open, setOpen] = useState(false)
  const [car, setCar] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0,
  })

  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => {
    setOpen(false)
    setCar({
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 0,
      price: 0,
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value })
  }

  const queryClient = useQueryClient();
  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: err => console.log(err)
  })

  const handleSave = () => {
    mutate(car);
    setCar({
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 0,
      price: 0,
    });
    handleClickClose();
  }

  return (
    <>
      <Button onClick={handleClickOpen}>New Car</Button>
      <Dialog open={open}>
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange}/>
        <DialogActions>
          <Button onClick={handleSave}>Save | 저장</Button>
          <Button onClick={handleClickClose}>Cancel | 취소</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;