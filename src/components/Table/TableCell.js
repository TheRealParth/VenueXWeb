import styled, { css } from 'styled-components';

const TableCell = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  color: ${props => (props.selected ? '#7d7d7d' : '#222222')};
  text-align: ${props => (props.center ? 'center' : '')};
  text-transform: capitalize;
  min-width: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${props =>
    props.emphasize === true &&
    css`
      font-weight: bold;
      color: #222222;
    `};
`;

export default TableCell;
