import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';
import { Container, LeftSide, RightSide, LegendContainer, Legend } from './styles';

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[]
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => (
  <Container>
    <LeftSide>
      <h2>{title}</h2>

      <LegendContainer>
        {
          data.map((indicator) => (
            <Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Legend>
          ))
        }
      </LegendContainer>
    </LeftSide>

    <RightSide>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {
              data.map((indicator) => (
                <Cell key={indicator.name} cursor="pointer" fill={indicator.color} />
              ))
            }
          </Bar>
          <Tooltip formatter={formatCurrency} cursor={{ fill: 'none' }} />
        </BarChart>
      </ResponsiveContainer>
    </RightSide>
  </Container>
);

export default BarChartBox;
