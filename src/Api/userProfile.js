import fs from 'fs';
import path from 'path';

let data =  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "12345678q",
    "dateOfBirth": "1990-05-15",
    "presentAddress": "123 Main St",
    "permanentAddress": "456 Elm St",
    "city": "Metropolis",
    "postalCode": "12345",
    "country": "USA"
  };

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(data); // Return user profile data from db.json
  }
  if (req.method === 'PUT') {
    // Handle PUT request to update user profile (not required in this case, but possible)
    const updatedProfile = req.body;
    data = updatedProfile; // Update the user profile in db.json
    // fs.writeFileSync(path.resolve('./src/db.json'), JSON.stringify(data, null, 2)); // Save the changes
    return res.status(200).json(updatedProfile);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
