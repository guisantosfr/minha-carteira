import React from 'react';
//import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, LeftSide, LegendContainer, Legend, RightSize } from './styles';

const PieChart: React.FC = () => (
  <Container>
    <LeftSide>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#F7931B">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>

        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </LeftSide>

    <RightSize>
    </RightSize>
  </Container>
)

export default PieChart;
