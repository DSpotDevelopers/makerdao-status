import React, { useCallback } from 'react';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import FilterTag from './FilterTag';
import Flex from '../styledComponents/Flex';

type FilterSelectable = {
  tag: string;
  selected?: boolean;
};

interface Props {
  filters: FilterSelectable[];
  color: string;
  onClick: (filter: FilterSelectable, selected?: boolean) => void;
  hasClearAll?: boolean;
  onClearAll: () => void;
}
export default function FilterTagPanel({
  filters,
  color,
  onClick,
  hasClearAll,
  onClearAll,
}: Props) {
  const onClickCallback = useCallback(
    (filter: FilterSelectable, selected?: boolean) => () =>
      onClick(filter, selected),
    [onClick],
  );

  return (
    <FilterTagContainer full alignCenter flexWrap="wrap">
      {filters.map((filter) => (
        <FilterTag
          key={Math.random()}
          onSelect={onClickCallback(filter, true)}
          label={filter.tag}
          selected={filter.selected}
          color={color}
          margin="5px 5px 5px 5px"
          onClose={onClickCallback(filter, false)}
        />
      ))}
      {hasClearAll && (
        <Button onClick={onClearAll}>
          <Label>Clear All</Label>
        </Button>
      )}
    </FilterTagContainer>
  );
}

const FilterTagContainer = styled(Flex)`
  ${down('xs')} {
    border-bottom: 1px solid lightgray;
  }
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #2f80ed;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  margin-left: 10px;
  background: none;
  border: none;
`;
