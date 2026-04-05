export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Grab the prompt from the frontend request
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Securely access the API key from your hosting provider's environment variables
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'API key is missing on the server' });
        }

        // Make the request to Gemini
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // Send the successful response back to your frontend
        return res.status(200).json(data);

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: 'Failed to fetch AI response' });
    }
}