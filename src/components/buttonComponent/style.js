import styled from 'styled-components'

export const ButtonTyped = styled.button`
  background-color: ${(props) =>
    (props.theme === 'primary' && '#00bbbb') ||
    (props.theme === 'secondary' && '#BA4500')};
  color: white;
  outline: 0;
  padding: 15px;
  font-size: 20px;
  font-family: 'Helvetica';
  border: ${(props) =>
    (props.bordered === 'little rounded' &&
      props.theme === 'primary' &&
      '1px solid #006E6E') ||
    (props.bordered === 'little rounded' &&
      props.theme === 'secondary' &&
      '1px solid #6E2900') ||
    (props.bordered === 'none' && 'none')};
  border-radius: ${(props) =>
    props.bordered === 'little rounded' ||
    '10px' ||
    props.bordered === 'rounded' ||
    '30px'};
  cursor: pointer;
  font-weight: bold;
  :hover {
    text-decoration: underline;
    background-color: ${(props) =>
      (props.theme === 'primary' && '#19FFFF') ||
      (props.theme === 'secondary' && '#F54500')};
  }
`
