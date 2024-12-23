import fs from 'fs';
import path from 'path';

const getDbData = () => {
  const filePath = path.resolve('./src/db.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    const data = getDbData();
    return res.status(200).json(data.userProfile); // Return user profile data from db.json
  }
  if (req.method === 'PUT') {
    // Handle PUT request to update user profile (not required in this case, but possible)
    const updatedProfile = req.body;
    const data = getDbData();
    data.userProfile = updatedProfile; // Update the user profile in db.json
    fs.writeFileSync(path.resolve('./src/db.json'), JSON.stringify(data, null, 2)); // Save the changes
    return res.status(200).json(updatedProfile);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
