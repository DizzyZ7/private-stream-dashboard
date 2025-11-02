const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

const DATA_FILE = __dirname + '/data.json';

function readData() {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/stream', (req, res) => {
    const token = req.query.token;
    const data = readData();

    if(token !== data.token){
        return res.status(403).json({error: 'Invalid token'});
    }

    // Динамическое изменение зрителей
    let change = Math.floor(Math.random() * 10) - 3; // -3..+6
    data.viewers = Math.max(0, data.viewers + change);
    data.total_views += Math.floor(Math.random() * 5);

    writeData(data);

    res.json({
        viewers: data.viewers,
        total_views: data.total_views,
        stream_url: `http://localhost:8080/hls/${data.stream_key}.m3u8`
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
