import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input } from "@mui/material"
import { Car } from "../Types"
import { ChangeEvent, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addCar } from "../api/carapi"

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
        <DialogContent>
          <Input type="text" name="brand" value={car.brand} placeholder="Brand" onChange={handleChange} /><br />
          <Input type="text" name="model" value={car.model} placeholder="Model" onChange={handleChange} /><br />
          <Input type="text" name="color" value={car.color} placeholder="Color" onChange={handleChange} /><br />
          <Input type="text" name="registrationNumber" value={car.registrationNumber} placeholder="Reg.No" onChange={handleChange} /><br />
          <Input type="number" name="modelYear" value={car.modelYear} placeholder="Year" onChange={handleChange} /><br />
          <Input type="number" name="price" value={car.price} placeholder="Price" onChange={handleChange} /><br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save | 저장</Button>
          <Button onClick={handleClickClose}>Cancel | 취소</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;