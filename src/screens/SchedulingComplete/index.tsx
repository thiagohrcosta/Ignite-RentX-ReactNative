import React from 'react';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { useWindowDimensions } from 'react-native';

import {
 Container,
  Content,
  Title,
  Message,
} from './styles';

export function SchedulingComplete() {
  const width = useWindowDimensions().width;
  return (
    <Container>
      <LogoSvg
        width={width}
      />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

    </Container>
  );
}
