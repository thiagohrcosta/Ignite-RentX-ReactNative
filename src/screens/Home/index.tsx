import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native'
import {
 Container,
 Header,
 HeaderContent,
 TotalCars,
 CarList
} from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }

  const carDataTwo = {
    brand: 'Ferrari',
    name: 'Portofino',
    rent: {
      period: 'Ao dia',
      price: 320
    },
    thumbnail: 'https://images0.cardekho.com/images/car-images/large/Ferrari/Ferrari-Portofino/6172/047.jpg'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
        <Header>
          <HeaderContent>
            <Logo
              width={RFValue(108)}
              height={RFValue(12)}
            />
            <TotalCars>
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails} />}
      />
    </Container>
  );
}
