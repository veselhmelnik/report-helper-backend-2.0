const express = require('express'); 
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const {getFormattedText} = require('./functions/helpers');
const getObject = require('./functions/getObject');
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express(); 

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.post("/", (req, res) => {
    if (!req.files && !req.files.pdfFile) {
      res.status(400);
      res.end();
    }

    pdfParse(req.files.pdfFile).then(result => {
      let formattedText = getFormattedText(result.text);
        res.send(getObject(formattedText));
    })
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });