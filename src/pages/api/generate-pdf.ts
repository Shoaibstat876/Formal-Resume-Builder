import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query; // This is now used correctly

  if (!username) {
    res.status(400).send('Username is required');
    return;
  }

  try {
    // Launch Puppeteer and generate PDF
    const browser = await puppeteer.launch({
      headless: process.env.NODE_ENV === 'production',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    const pageUrl = `http://${req.headers.host}/${username}/resume`;
    await page.goto(pageUrl, { waitUntil: 'load' });

    // Generate the PDF (A4 format)
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    // Set headers to indicate a PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${username}-resume.pdf`);
    res.setHeader('Content-Length', pdfBuffer.length);

    // Send the PDF as binary using res.end()
    res.status(200).end(pdfBuffer);

  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Failed to generate PDF');
  }
}






