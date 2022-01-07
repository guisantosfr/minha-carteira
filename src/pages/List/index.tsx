import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

const List: React.FC = () => {
  const options = [
    { value: '1', label: '1' }
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor='#FFF'>
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title='Conta de luz'
          subtitle='07/01/2022'
          amount='R$ 200,00'
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title='Conta de luz'
          subtitle='07/01/2022'
          amount='R$ 200,00'
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title='Conta de luz'
          subtitle='07/01/2022'
          amount='R$ 200,00'
        />

      </Content>

    </Container>
  );
}

export default List;
