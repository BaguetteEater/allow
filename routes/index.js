let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile('crea.html')
});

module.exports = router;
