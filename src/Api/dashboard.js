import fs from 'fs';
import path from 'path';

const getDbData = () => {
  const filePath = path.resolve('../db.json'); // Path to your db.json file
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    const data = getDbData();
    return res.status(200).json(data.dashboard); // Return dashboard data from db.json
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
