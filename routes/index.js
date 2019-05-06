let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile('index.html')
});

module.exports = router;
