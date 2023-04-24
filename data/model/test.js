const EdgeImpulseClassifier = require('./run-impulse-from-node-red');
const fs = require('fs');
const Path = require('path');

(async () => {
    const classifier = new EdgeImpulseClassifier();
    await classifier.init();

    const jan = await fs.promises.readFile(Path.join(__dirname, '..', 'images', 'jan.jpg'));
    console.log('jan', await classifier.classifyImage(jan));

    const notJan = await fs.promises.readFile(Path.join(__dirname, '..', 'images', 'not-jan.jpg'));
    console.log('not jan', await classifier.classifyImage(notJan));
})();
