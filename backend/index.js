const promisify = require("es6-promisify");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mkdirp = promisify(require('mkdirp'));
const path = require('path');
const fs = require("fs");
const writeFile = promisify(fs.writeFile, fs);

const getDataFilename = (input) => {
    const segments = input.split('/').filter(segment => segment && segment.length > 0);
    if (segments.length > 0) {
        segments[segments.length - 1] = `${segments[segments.length - 1]}.json`;
    }
    return path.join(__dirname, 'data', ...segments);
}

const getDataPath = (input) => {
    const segments = input.split('/').filter(segment => segment && segment.length > 0);
    if (segments.length > 0) {
        segments.pop();
    }
    return path.join(__dirname, 'data', ...segments);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

// Map all GET requests
router.get('*', (req, res) => {
    const fileName = getDataFilename(req.path);
    if (!fs.existsSync(fileName)) {
        res.status(404).json({ message: `Unable to read data from ${fileName}`});
    } else {
        res.sendFile(fileName);
    }
});

// Any PUT or POST requests override existing data, if any
const update = (req, res, next) => {
    const dataPath = getDataPath(req.path);
    const fileName = getDataFilename(req.path);
    if (fileName.length > 0) {
        let promise = Promise.resolve();
        if (!fs.existsSync(dataPath)) {
            promise = mkdirp(dataPath);
        }
        promise.then(() => {
            return writeFile(fileName, JSON.stringify(req.body));
        })
        .then(() => {
            res.status(200).json({ message: `Saved content to ${fileName}`});
        })
        .catch(next);
    } else {
        next();
    }
};
router.put('*', update);
router.post('*', update);


app.use('/api', router);

app.listen(port);
console.log(`Server is running on port ${port}`);