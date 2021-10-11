import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { IconNames } from '../Icon/IconNames';
import ItemCard from './ItemCard';

interface ItemProps {
  label: string;
  enframedLabel: string;
  value: string;
  selected?: boolean;
  margin?: string;
  border?: string;
  onAction: () => void;
}

interface Props {
  header: {
    iconName: IconNames;
    title: string;
    onAction?: () => void;
  };
  items: ItemProps[];
  margin?: string;
}

const CollateralsCard = ({
  header: { iconName, title, onAction },
  items,
  margin = '',
}: Props) => (
  <CollateralsContainer margin={margin}>
    <Header>
      <div>
        <Span>
          <Icon width={40} height={40} name={iconName} />
          <Label>{title}</Label>
        </Span>
      </div>
      <div>
        <Span>
          <Button onClick={onAction}>
            <Icon width={15} height={15} name="openInNewIcon" fill="white" />
          </Button>
        </Span>
      </div>
    </Header>
    <div>
      {items.map((item) => (
        <ItemCard {...item} />
      ))}
    </div>
  </CollateralsContainer>
);

const Header = styled.div`
  padding: 15px 20px 8px 20px;
  background: #d1eeeb;
  border-radius: 10px 10px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CollateralsContainer = styled.div`
  margin: ${({ margin }: Partial<Props>) => margin};
  border: 1px solid red;
  border-radius: 10px 10px 10px 10px;
  min-height: 300px;
  width: 100%;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-left: 10px;
`;

const Button = styled.button`
  background: none;
  border: none;
`;

export default CollateralsCard;