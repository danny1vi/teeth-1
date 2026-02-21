import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';

const PORT = 3000;
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};

createServer(async (req, res) => {
    try {
        const urlPath = req.url === '/' ? '/index.html' : req.url;
        // Dosyaları doğrudan serve.mjs'nin bulunduğu klasörden çeker
        const filePath = join(process.cwd(), urlPath);
        const ext = extname(filePath);
        const data = await readFile(filePath);

        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
        res.end(data);
    } catch (err) {
        res.writeHead(404);
        res.end('404 - Not Found');
    }
}).listen(PORT, () => {
    console.log(`🚀 Antigravity yerel sunucusu aktif: http://localhost:${PORT}/`);
});