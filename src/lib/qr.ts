/**
 * Build-time QR code → inline SVG. Runs only during the build; ships no JavaScript to visitors.
 * Dark modules on a white background with the standard 4-module quiet zone, for reliable scanning.
 */
import QRCode from 'qrcode';

export async function qrSvg(text: string): Promise<string> {
  return QRCode.toString(text, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 4,
    color: { dark: '#0d0e11', light: '#ffffff' },
  });
}
