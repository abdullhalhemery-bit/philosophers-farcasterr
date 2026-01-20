// /api/index.js

export default function handler(req, res) {
  // تأكد من أننا نتعامل فقط مع طلبات GET أو POST
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // هذا هو كود HTML الكامل الذي سنرسله كاستجابة.
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Simple Test Frame</title>
        <meta property="og:title" content="Simple Test Frame">
        <meta property="og:image" content="https://i.imgur.com/7A2ELFv.png">
        
        <meta property="fc:frame" content="vNext">
        <meta property="fc:frame:image" content="https://i.imgur.com/7A2ELFv.png">
        <meta property="fc:frame:button:1" content="It Works!">
        <meta property="fc:frame:post_url" content="https://philosophers-farcasters-wixw.vercel.app/api/vote">
      </head>
      <body>
        <h1>This is a simple Farcaster Frame.</h1>
        <p>If you see this in your browser, the server is working!</p>
      </body>
    </html>
  `;

  // نضبط رأس الاستجابة لنقول إننا نرسل HTML
  res.setHeader('Content-Type', 'text/html');
  
  // نرسل الـ HTML مع رمز حالة 200 (نجاح)
  return res.status(200).send(html);
}
