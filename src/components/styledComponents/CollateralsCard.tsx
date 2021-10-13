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
  sections: {
    title: string;
    items: ItemProps[];
  }[];
  margin?: string;
}

const CollateralsCard = ({
  header: { iconName, title, onAction },
  sections,
  margin = '',
}: Props) => (
  <CollateralsContainer margin={margin}>
    <Header>
      <div>
        <Span height="35px">
          <Icon width={30} height={30} name={iconName} />
          <Label>{title}</Label>
        </Span>
      </div>
      <div>
        <Span>
          <Button onClick={onAction}>
            <Icon width={15} height={15} name="openInNewIcon" fill="#2F80ED" />
          </Button>
        </Span>
      </div>
    </Header>
    <div>
      {sections.map(({ title: titleSection, items }) => (
        <div key={Math.random()}>
          <ItemCard isTitleSection label={titleSection} />
          {items.map((item) => (
            <ItemCard key={Math.random()} {...item} />
          ))}
        </div>
      ))}
    </div>
  </CollateralsContainer>
);

const Header = styled.div`
  padding: 7px 20px 5px 20px;
  background: #d1eeeb;
  border-radius: 10px 10px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 5px;
`;

const CollateralsContainer = styled.div`
  margin: ${({ margin }: Partial<Props>) => margin};
  border-radius: 10px 10px 10px 10px;
  min-height: 300px;
  width: 100%;
  background-color: white;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  div {
    height: ${({ height }: { height?: string }) => height || ''};
  }
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #31394d;
  margin-left: 10px;
`;

const Button = styled.button`
  background: none;
  border: none;
`;

export default CollateralsCard;
