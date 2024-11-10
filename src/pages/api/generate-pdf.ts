"use client"
import puppeteer from 'puppeteer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

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





