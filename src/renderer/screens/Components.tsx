import { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'assets/images/stop.svg';
import { useAppSelector } from 'renderer/redux';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  svg:hover path {
    fill: var(--primary);
  }
`;
const Heading1 = styled.h1`
  color: var(--primary);
`;

export const Components: FC = () => {
  const auth = useAppSelector((state) => state.auth);
  console.log('default auth:', auth);

  return (
    <Wrapper>
      <Heading1>Hello world!</Heading1>
      <Icon />
    </Wrapper>
  );
};
