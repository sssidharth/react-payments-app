import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const RecentTransactions = ({ transactions }) => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
    {transactions.map((transaction) => (
      <div key={transaction.id} className="flex items-center justify-between">
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            transaction.amount < 0
              ? "bg-yellow-100 text-yellow-500"
              : transaction.amount > 0
              ? "bg-green-100 text-green-500"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <FontAwesomeIcon icon={faMoneyBill} />
        </div>

        {/* Details */}
        <div className="flex flex-col items-start w-1/2">
          <p className="text-sm font-bold text-gray-800">{transaction.description}</p>
          <p className="text-xs text-gray-500">{transaction.date}</p>
        </div>

        {/* Amount */}
        <p
          className={`text-sm w-1/4 font-bold ${
            transaction.amount < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {transaction.amount < 0 ? `- $${Math.abs(transaction.amount)}` : `+ $${transaction.amount}`}
        </p>
      </div>
    ))}
  </div>
  )
}

export default RecentTransactions