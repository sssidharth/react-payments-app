import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardDataStart, fetchUserCards } from '../../store/actions/actions';
import CustomCard from '../Utilities/CustomCard';
import CreditCard from '../Utilities/CreditCardComponent';
import RecentTransactions from './RecentTransactions';
import WeeklyActivity from './WeeklyActivity';
import ExpenseStats from './ExpenseStats';
import BalanceHistory from './BalanceHistory';
import QuickTransfers from './QuickTransfers';

const Dashboard = () => {

    const dispatch = useDispatch();

    const [cardsData, setCardsData] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [activity, setActivity] = useState();
    const [quickTransfers, setQuickTransfers] = useState();
    const [expenses, setExpenses] = useState();
    const [balances, setBalances] = useState();

    const dashboardData = useSelector((state) => state.dashboardReducer.dashboardData);
    const myCards = useSelector((state) => state.dashboardReducer.myCards);

    useEffect(() => {
      dispatch(fetchDashboardDataStart());
      dispatch(fetchUserCards());
    }, [dispatch]);

    useEffect(() => {
      if (Object.keys(dashboardData).length > 0) {
        setTransactions(dashboardData.recentTransactions);
        setBalances(dashboardData.balanceHistoryChart);
        setActivity(dashboardData.weeklyActivityChart);
        setQuickTransfers(dashboardData.quickTransfer);
        setExpenses(dashboardData.expenseStatistics);
      }
      if (myCards && myCards.length > 0) {
        setCardsData(myCards);
      }
    },[dashboardData, myCards]);


  return (
    <div className='inner-container'>
      <div className='flex lg:flex-row flex-col justify-between'>
        <div className='flex flex-col lg:w-2/3'>
            <div className='flex flex-row justify-between'>
              <p className='card_header'>My Cards</p>
              <p className='cursor-pointer text-black-font-light h-2 hover:text-black'>See All</p>
            </div>
            <div className='flex flex-row overflow-x-auto justify-between h-full'>
            {cardsData && cardsData.length > 0 ? cardsData.slice(0,2).map((card, index) => {
            return (
                <CreditCard key={index} index={index} data={card} className={`lg:w-1/2 ${index%2 === 0 ? 'mr-10' : ''}`}/>
            )
         }) : null}
            </div>
        </div>
        <div className='flex flex-col xl:w-1/3 w-full mt-6 lg:ml-10 xl:mt-0'>
        <p className='card_header'>Recent Transactions</p>
        <CustomCard 
          heading="Recent Transactions" 
          children={<RecentTransactions transactions={transactions} />}
          className="h-60 w-full p-6" />
        </div>
      </div>
      <div className='flex lg:flex-row flex-col justify-between'>
      <div className='flex flex-col xl:w-[66%]'>
        <p className='card_header'>Weekly Activity</p>
           {activity && Object.keys(activity).length > 0 ? <WeeklyActivity activity={activity} /> : null}
      </div>
      <div className='flex flex-col lg:w-1/3 w-full mt-6 lg:ml-10 xl:mt-0'>
        <p className='card_header'>Expense Statistics</p>
           {activity && Object.keys(expenses).length > 0 ? <ExpenseStats expenseStatistics={expenses} /> : null}
      </div>
      </div>
      <div className='flex lg:flex-row flex-col justify-between'>
      <div className='flex flex-col lg:w-1/3 w-full mt-6 xl:mt-0'>
        <p className='card_header'>Quick Transfers</p>
           {quickTransfers && Object.keys(quickTransfers).length > 0 ? <QuickTransfers profiles={quickTransfers.frequentContacts} /> : null}
      </div>
      <div className='flex flex-col lg:ml-10 xl:w-[66%]'>
        <p className='card_header'>Balance History</p>
           {balances && Object.keys(balances).length > 0 ? <BalanceHistory balances={balances} /> : null}
      </div>
      </div>
    </div>
  )
}

export default Dashboard