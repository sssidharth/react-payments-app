import fs from 'fs';
import path from 'path';


let data = [
    {
      "cardId": "1",
      "cardHolderName": "John Doe",
      "cardNumber": "**** **** **** 1234",
      "validThru": "12/25",
      "balance": 1250.75,
      "id": "9611"
    },
    {
      "cardId": "2",
      "cardHolderName": "John Doe",
      "cardNumber": "**** **** **** 5678",
      "validThru": "12/25",
      "balance": 560.4,
      "id": "737d"
    },
    {
      "cardId": "3",
      "cardHolderName": "John Doe",
      "cardNumber": "**** **** **** 9876",
      "validThru": "12/25",
      "balance": 9800.1,
      "id": "d441"
    },
    {
      "cardId": "4",
      "cardHolderName": "John Doe",
      "cardNumber": "**** **** **** 2402",
      "validThru": "12/25",
      "balance": 4500.1,
      "id": "861a"
    },
    {
      "cardId": "4",
      "cardHolderName": "John Doe",
      "cardNumber": "**** **** **** 2402",
      "validThru": "12/25",
      "balance": 4500.1,
      "id": "dae4"
    },
    {
      "cardId": "4",
      "cardHolderName": "John Doe",
      "cardNumber": "**** **** **** 2402",
      "validThru": "12/25",
      "balance": 4500.1,
      "id": "0aaf"
    }
  ]

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(data); // Return cards data from db.json
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
