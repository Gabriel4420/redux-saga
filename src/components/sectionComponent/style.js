import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  height: 300px;
  width: 98.8%;
  border: 1px solid ${(props) => props.backgroundColor};
  background-color: ${(props) =>
    props.backgroundColor === 'Primary' && '#BA4500'};
`

export const Title = styled.h1`
  font-size: 43px;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  color: white;
`
