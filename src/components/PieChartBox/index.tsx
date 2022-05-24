import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, LeftSide, LegendContainer, Legend, RightSize } from './styles';

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[]
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <LeftSide>
      <h2>Relação</h2>
      <LegendContainer>
        {
          data.map((indicator) => (
            <Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}</div>
              <span>{indicator.name}</span>
            </Legend>
          ))
        }
      </LegendContainer>
    </LeftSide>

    <RightSize>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {
              data.map((indicator) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </RightSize>
  </Container>
)

export default PieChartBox;
