/* eslint-disable no-confusing-arrow */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

interface Props {
  column?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  alignCenter?: boolean;
  alignBetween?: boolean;
  full?: boolean;
  flexWrap?: string;
}

const Flex = styled.div`
  display: flex;
  width: ${({ full }: Props) => (full ? '100%' : '')};
  flex-direction: ${({ column }: Props) => (column ? 'column' : 'row')};
  justify-content: ${({ justifyCenter, justifyBetween }) =>
    justifyCenter ? 'center' : justifyBetween ? 'space-between' : 'init'};
  align-items: ${({ alignCenter, alignBetween }) =>
    alignCenter ? 'center' : alignBetween ? 'space-between' : 'init'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'no-wrap'};
`;
export default Flex;
