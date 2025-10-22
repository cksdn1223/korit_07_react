import axios from "axios";
import { Car, CarResponse, CarEntity } from "../Types";

export const getCars = async (): Promise<CarResponse[]> => {
  const token = sessionStorage.getItem('jwt');
  if (!token) throw new Error("인증 토큰이 없습니다.");

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`, {
    headers: { 'Authorization': `${token}` }
  })
  return response.data._embedded.cars;
}

export const deleteCars = async (link: string): Promise<CarResponse> => {
  const token = sessionStorage.getItem('jwt');
  if (!token) throw new Error("인증 토큰이 없습니다.");
  const response = await axios.delete(link, {
    headers: { 'Authorization': `${token}` }
  });
  return response.data;
}

export const addCar = async (car: Car): Promise<CarResponse> => {
  const token = sessionStorage.getItem('jwt');
  if (!token) throw new Error("인증 토큰이 없습니다.");
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  });
  return response.data;
}

export const updateCar = async (carEntity: CarEntity): Promise<CarResponse> => {
  const token = sessionStorage.getItem('jwt');
  if (!token) throw new Error("인증 토큰이 없습니다.");
  const response = await axios.put(carEntity.url, carEntity.car, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  });
  return response.data;
}