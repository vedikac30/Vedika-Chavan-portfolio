import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.mjs': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  // Look in dist first (production build), then public, then root
  const candidates = [
    path.join(DIST_DIR, reqPath),
    path.join(PUBLIC_DIR, reqPath),
    path.join(__dirname, reqPath)
  ];

  let targetFile = null;
  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      targetFile = candidate;
      break;
    }
  }

  // If file found, serve it
  if (targetFile) {
    const ext = path.extname(targetFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(targetFile, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      } else {
        const isDynamic = ext === '.html' || ext === '.pdf';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': isDynamic ? 'no-cache, no-store, must-revalidate, max-age=0' : 'public, max-age=31536000',
          'Pragma': isDynamic ? 'no-cache' : 'public',
          'Expires': isDynamic ? '0' : '31536000'
        });
        res.end(content);
      }
    });
    return;
  }

  // SPA Fallback: serve dist/index.html
  const fallbackHtml = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(fallbackHtml)) {
    fs.readFile(fallbackHtml, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found - Please run "npm run build" first.');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✨ Vedika Chavan Portfolio is live!`);
  console.log(`🚀 Access URL: http://localhost:${PORT}\n`);
});
