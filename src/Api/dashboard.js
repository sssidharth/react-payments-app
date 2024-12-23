import fs from 'fs';
import path from 'path';

let data = {
    "recentTransactions": [
      {
        "id": "1",
        "icon": "shopping",
        "description": "Grocery Shopping",
        "date": "2024-12-19",
        "amount": -45.25
      },
      {
        "id": "2",
        "icon": "salary",
        "description": "Monthly Salary",
        "date": "2024-12-15",
        "amount": 3000
      },
      {
        "id": "3",
        "icon": "entertainment",
        "description": "Movie Tickets",
        "date": "2024-12-12",
        "amount": -20
      }
    ],
    "weeklyActivityChart": {
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "deposits": [
        500,
        600,
        450,
        700,
        800,
        550,
        600
      ],
      "withdrawals": [
        200,
        300,
        250,
        400,
        500,
        350,
        300
      ]
    },
    "expenseStatistics": {
      "categories": [
        {
          "category": "Entertainment",
          "amount": 120
        },
        {
          "category": "Bill Expenses",
          "amount": 400
        },
        {
          "category": "Investments",
          "amount": 800
        },
        {
          "category": "Others",
          "amount": 200
        }
      ]
    },
    "quickTransfer": {
      "frequentContacts": [
        {
          "id": "1",
          "name": "Jane Smith",
          "role": "CEO",
          "profilePicture": "jane.jpg"
        },
        {
          "id": "2",
          "name": "Mark Lee",
          "role": "Designer",
          "profilePicture": "mark.jpg"
        },
        {
          "id": "3",
          "name": "Mark Lee",
          "role": "Developer",
          "profilePicture": "mark.jpg"
        },
        {
          "id": "4",
          "name": "Mark Lee",
          "role": "Designer",
          "profilePicture": "mark.jpg"
        },
        {
          "id": "5",
          "name": "Mark Lee",
          "role": "Developers",
          "profilePicture": "mark.jpg"
        }
      ],
      "transfer": {
        "amount": null,
        "recipientId": null
      }
    },
    "balanceHistoryChart": {
      "months": [
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "balance": [
        1000,
        2000,
        1800,
        2500,
        1800,
        1500
      ]
    }
  }

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(data); // Return dashboard data from db.json
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
