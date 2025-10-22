import { ChangeEvent } from "react";
import { Car } from "../Types"
import { DialogContent, Input } from "@mui/material";

type DialogFormProps = {
  car: Car;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}

function CarDialogContent({car, handleChange}: DialogFormProps) {

  return (
    <>
      <DialogContent>
        <Input type="text" name="brand" value={car.brand} placeholder="Brand" onChange={handleChange} /><br />
        <Input type="text" name="model" value={car.model} placeholder="Model" onChange={handleChange} /><br />
        <Input type="text" name="color" value={car.color} placeholder="Color" onChange={handleChange} /><br />
        <Input type="text" name="registrationNumber" value={car.registrationNumber} placeholder="Reg.No" onChange={handleChange} /><br />
        <Input type="number" name="modelYear" value={car.modelYear} placeholder="Year" onChange={handleChange} /><br />
        <Input type="number" name="price" value={car.price} placeholder="Price" onChange={handleChange} /><br />
      </DialogContent>
    </>
  );
}

export default CarDialogContent;