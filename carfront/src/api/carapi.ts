import axios from "axios";
import { Car, CarResponse } from "../Types";

export const getCars = async (): Promise<CarResponse[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`)
  return response.data._embedded.cars;
}

export const deleteCars = async (link: string): Promise<CarResponse> => {
  const response = await axios.delete(link);
  return response.data;
}

export const addCar = async (car: Car): Promise<CarResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, {
    headers:
    {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}