const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const fileRoutes = require('./file.js');

router.use('/api', apiRoutes);
router.use('/file', fileRoutes);


// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
