/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  .labelRow {
    display: flex;
    align-items: center;
    min-height: 50px;

    .labelCell {
      font-weight: bold;
      flex: 1;
      display: flex;
      white-space: nowrap;

      .mainLabel {
        font-weight: bold;
        font-size: 0.8rem;
      }

      .secondaryLabel {
        color: #565656;
        font-size: 0.8rem;
        margin-left: 1rem;
      }
    }

    .valueCell {
      font-weight: bold;
      width: 20%;
      white-space: nowrap;
    }
  }
`;

interface Props {
  data: {
    mainLabel: string;
    secondaryLabel: string;
    valueCell: string | undefined;
  }[];
}

export default function DataSmallList({ data }: Props) {
  return (
    <LabelContainer>
      {data &&
        Array.isArray(data) &&
        data.map((item) => (
          <div className="labelRow" key={Math.random()}>
            <div className="labelCell">
              <div className="mainLabel">{item.mainLabel}</div>
              <div className="secondaryLabel">({item.secondaryLabel})</div>
            </div>
            <div className="valueCell">{item.valueCell}</div>
          </div>
        ))}
    </LabelContainer>
  );
}
