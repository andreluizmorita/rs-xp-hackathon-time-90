import React from 'react';

import { Container, Scroll } from './styles';

export default function ScreenWithScrollView({ children }) {
  return (
    <Container>
      <Scroll vertical showsVerticalScrollIndicator={false}>
        {children}
      </Scroll>
    </Container>
  );
}
