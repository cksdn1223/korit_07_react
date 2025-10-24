import axios, { AxiosRequestConfig } from "axios";
import { Car, CarResponse, CarEntity } from "../Types";

const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem('jwt')
  if (!token) throw new Error("인증 토큰이 없습니다.");
  return {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
  }
}

export const getCars = async (): Promise<CarResponse[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`, getAxiosConfig());
  return response.data._embedded.cars;
}

export const deleteCars = async (link: string): Promise<CarResponse> => {
  const response = await axios.delete(link, getAxiosConfig());
  return response.data;
}

export const addCar = async (car: Car): Promise<CarResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, getAxiosConfig());
  return response.data;
}

export const updateCar = async (carEntity: CarEntity): Promise<CarResponse> => {
  const response = await axios.put(carEntity.url, carEntity.car, getAxiosConfig());
  return response.data;
}