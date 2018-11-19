const translate = require('@k3rn31p4nic/google-translate-api');
const fs = require('fs');
const en_lng = require('./i18n/englishOriginal.json');
const lenguages = require('./lenguages.json');


Object.keys(lenguages).forEach((lng_Key) => {
    let json = {};
    /* console.log(0000000000,'Translating to ' + lng_Key); */
    Object.keys(en_lng).forEach((key) => {
        /* console.log("en_lng[key]", en_lng[key], "to", lng_Key); */
        translate(en_lng[key], {to: lng_Key}).then(res => {
            /* console.log("translate", res.text, `./${ lenguages[lng_Key]}.json`); */
            json[key] = res.text;
            fs.writeFile(`./i18n/${ lenguages[lng_Key]}.json`, JSON.stringify(json), 'utf8', (err) => {
                if (err) {
                    throw err;
                }
                /* console.log('The file src/lib/i18n/' + lenguages[lng_Key] + '.json has been saved!'); */
            });
        }).catch(err => {
            console.error(err);
        });

    });
});
