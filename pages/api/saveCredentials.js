import { put } from '@vercel/blob';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Define the blob name (you can use a dynamic name if needed)
    const blobName = 'user-credentials.json';

    // Data to save in the blob
    const data = { email, password };

    try {
      const response = await put(blobName, data, {
        headers: {
          Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
        },
      });

      res.status(200).json({ message: 'Credentials saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to save credentials' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed for non-POST requests
  }
};