import fetch from 'isomorphic-fetch'; // You may need to install this package

export default async (req, res) => {
  try {
    const response = await fetch('https://www.example.com'); // Replace with a publicly accessible URL
    const data = await response.text();

    res.status(200).json({ message: 'Internet access is working', data });
  } catch (error) {
    res.status(500).json({ message: 'Internet access test failed', error: error.message });
  }
};