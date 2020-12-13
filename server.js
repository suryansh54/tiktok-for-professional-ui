// Getting access to express framework
const express = require('express');

// creating a expree app
const app = express();

app.use(express.static('/dist/tiktok-for-professionals'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/tiktok-for-professionals/' }
  );
});

app.listen(process.env.PORT || 8080);
