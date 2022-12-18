import React, { useState, useEffect } from 'react';

import {
 Container
} from './styles';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';


export function MyCars() {
  const [cars, secCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars(){
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        console.log(response.data)
        secCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [])

  return (
    <Container>

    </Container>
  );
}
