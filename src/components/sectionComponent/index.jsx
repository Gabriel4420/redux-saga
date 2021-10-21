import React from 'react';

import { Container , Title} from './style';

function SectionComponent(props) {
  return (
  
  <Container backgroundColor={props.backgroundColor}>
      <Title title={props.title}>{props.title}</Title>
      {props.children}
  </Container>
  
  );
}

export default SectionComponent;