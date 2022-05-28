import React, { useCallback, useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import monthsList from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be number');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria',
        footerText: 'Verifique seus gastos e tente cortar coisas desnecessárias',
        icon: sadImg
      }
    } else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Ops!',
        description: 'Neste mês, não há registros de entradas ou saídas',
        footerText: 'Parece que você não fez nenhum registro no mês',
        icon: opsImg
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Ufa!',
        description: 'Neste mês, você gastou exatamente o que ganhou',
        footerText: 'Tenha cuidado. No próximo mês tente poupar seu dinheiro',
        icon: grinningImg
      }
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue assim. Considere investir o seu saldo',
        icon: happyImg
      }
    }
  }, [totalBalance, totalExpenses, totalGains]);

  const expensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const gainsPercent = Number(((totalGains / total) * 100).toFixed(1));
    const expensesPercent = Number(((totalExpenses / total) * 100).toFixed(1));

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: gainsPercent ? gainsPercent : 0,
        color: '#F7931B'
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: expensesPercent ? expensesPercent : 0,
        color: '#E44C4E'
      }
    ];

    return data;
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return monthsList.map((_, month) => {
      let amountEntry = 0;

      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);
          } catch {
            throw new Error('amount entry is invalid. it must be a number');
          }
        }
      });

      let amountOutput = 0;

      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount);
          } catch {
            throw new Error('amount output is invalid. it must be a number');
          }
        }
      });

      return {
        monthNumber: month,
        month: monthsList[month].substring(0, 3),
        amountEntry,
        amountOutput
      }

    })
      .filter(item => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear);

      });
  }, [yearSelected]);

  const recurrentVersusEventualExpenses = useMemo(() => {
    let recurrentAmount = 0;
    let eventualAmount = 0;

    expenses.filter(expense => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === monthSelected && year === yearSelected;
    })
      .forEach(expense => {
        if (expense.frequency === 'recorrente') {
          return recurrentAmount += Number(expense.amount);
        }

        if (expense.frequency === 'eventual') {
          return eventualAmount += Number(expense.amount);
        }
      });

    const total = recurrentAmount + eventualAmount;
    const recurrentPercent = Number(((recurrentAmount / total) * 100).toFixed(1));
    const eventualPercent = Number(((eventualAmount / total) * 100).toFixed(1));

    return [{
      name: 'Recorrentes',
      amount: recurrentAmount,
      percent: recurrentPercent ? recurrentPercent : 0,
      color: '#F7931B'
    },
    {
      name: 'Eventuais',
      amount: eventualAmount,
      percent: eventualPercent ? eventualPercent : 0,
      color: '#E44C4E'
    }
    ];
  }, [monthSelected, yearSelected]);

  const recurrentVersusEventualGains = useMemo(() => {
    let recurrentAmount = 0;
    let eventualAmount = 0;

    gains.filter(gain => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      return month === monthSelected && year === yearSelected;
    })
      .forEach(generateKeyPairSync => {
        if (generateKeyPairSync.frequency === 'recorrente') {
          return recurrentAmount += Number(generateKeyPairSync.amount);
        }

        if (generateKeyPairSync.frequency === 'eventual') {
          return eventualAmount += Number(generateKeyPairSync.amount);
        }
      });

    const total = recurrentAmount + eventualAmount;
    const recurrentPercent = Number(((recurrentAmount / total) * 100).toFixed(1));
    const eventualPercent = Number(((eventualAmount / total) * 100).toFixed(1));

    return [{
      name: 'Recorrentes',
      amount: recurrentAmount,
      percent: recurrentPercent ? recurrentPercent : 0,
      color: '#F7931B'
    },
    {
      name: 'Eventuais',
      amount: eventualAmount,
      percent: eventualPercent ? eventualPercent : 0,
      color: '#E44C4E'
    }
    ];
  }, [monthSelected, yearSelected]);

  const handleMonthSelected = useCallback((month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error('invalid month value.')
    }
  }, []);

  const handleYearSelected = useCallback((year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error('invalid year value.')
    }
  }, []);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor='#F7931B'>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />

        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="saldo"
          color="#4E41F0"
          amount={totalBalance}
          footerlabel="atualizado com base nas entradas e saídas"
          icon="dollar" />

        <WalletBox
          title="entradas"
          color="#F7931B"
          amount={totalGains}
          footerlabel="atualizado com base nas entradas e saídas"
          icon="arrowUp" />

        <WalletBox
          title="saídas"
          color="#E44C4E"
          amount={totalExpenses}
          footerlabel="atualizado com base nas entradas e saídas"
          icon="arrowDown" />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <PieChartBox data={expensesVersusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#F9731B"
          lineColorAmountOutput="#E44C4E"
        />

        <BarChartBox title="Saídas" data={recurrentVersusEventualExpenses} />
        <BarChartBox title="Entradas" data={recurrentVersusEventualGains} />

      </Content>
    </Container>
  );
}

export default Dashboard;
