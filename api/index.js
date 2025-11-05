// Vercel serverless function to respond at the project root (GET /)
export default (req, res) => {
  // Basic CORS handling
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  // Simple JSON response so visiting "/" doesn't return "Cannot GET /"
  res.status(200).json({ status: 'ok', message: 'Finance Tracker API running' });
};
