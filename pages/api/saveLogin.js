import fs from 'fs';
import path from 'path';

export default (req, res) => {
  if (req.method === 'POST') {
    const dataPath = path.join(process.cwd(), 'data', 'users.json');
    const { email, password } = req.body;

    // Read the existing user data from users.json
    const usersData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Create a new user object with the email and password
    const newUser = { email, password };

    // Append the new user to the existing data
    usersData.push(newUser);

    // Write the updated data back to users.json
    fs.writeFileSync(dataPath, JSON.stringify(usersData), 'utf-8');

    // Respond with a success message
    res.status(200).json({ message: 'Login information saved successfully' });
  } else {
    if (req.method === 'POST') {
    const dataPath = path.join(process.cwd(), 'data', 'users.json');
    const { email, password } = req.body;

    // Read the existing user data from users.json
    const usersData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Create a new user object with the email and password
    const newUser = { email, password };

    // Append the new user to the existing data
    usersData.push(newUser);

    // Write the updated data back to users.json
    fs.writeFileSync(dataPath, JSON.stringify(usersData), 'utf-8');

    // Respond with a success message
    res.status(200).json({ message: 'Login information saved successfully' });
  }
}
};
