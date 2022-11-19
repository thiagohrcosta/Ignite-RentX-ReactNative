import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
 Container,
 Header,
 Title,
 RentalPeriod,
 DateInfo,
 DateTitle,
 DateValue
} from './styles';
import { StatusBar } from 'react-native';

export function Scheduling() {
  const theme = useTheme();

 return (
 <Container>
  <Header>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
    <BackButton
      onPress={() => {}}
      color={theme.colors.shape}
    />

    <Title>
      Escolha uma {'\n'}
      data de início e {'\n'}
      fim do aluguel
    </Title>

    <RentalPeriod>
      <DateInfo>
        <DateTitle>DE</DateTitle>
        <DateValue selected={false}>
          18/06/2021
        </DateValue>
      </DateInfo>

      <ArrowSvg />

      <DateInfo>
        <DateTitle>ATÉ</DateTitle>
        <DateValue selected={false}>
          18/06/2021
        </DateValue>
      </DateInfo>

    </RentalPeriod>

  </Header>

 </Container>
 );
}
