'use strict';
const qb64pe_version  = '3.13.1'
const qb64pe_keywords = require('./qb64pe-keywords-' + qb64pe_version + '.json');

render_qb64pe_keywords(qb64pe_keywords.keywords);

function render_qb64pe_keywords(kw) {
    const match_start       = '(?i:\\\\s+_*(';
    const match_end         = ')\\\\$*\\\\s+)';
    let match_keywords    = kw.join('|');
    // match_keywords = match_keywords.replace(/\$/g, '\\\\$');
    console.log(match_start + match_keywords + match_end);
}

// const qb64pelang = require('../syntaxes/qb64pe.tmLanguage.json');
// const groups = [
//     'meta.function.QB64PE',
//     'debug.QB64PE',
//     'keyword.control.QB64PE',
//     'variable.other.dim.QB64PE',
//     'storage.type.QB64PE',
//     'metacommand.QB64PE',
//     'sound.QB64PE',
//     'graphics.QB64PE',
// ];
// qb64pelang.patterns.forEach(element => {
//     if (groups.includes(element.name)) {
//         console.log(element.name);
//         console.log(element.match);
//         switch(element.name) {
//             case "meta.function.QB64PE":
//                 console.group('meta.function.QB64PE');
//                 console.log(element.match.replace)
//                 console.groupEnd();
//                 break;
//         }
//     }
// });
//
// function dump_qb64pe_keywords() {
//     console.log(
//         inspect(qb64pe_keywords, 
//             {
//                 showHidden: true,
//                 depth: null,
//                 colors: true,
//                 maxArrayLength: null
//             }
//         )
//     );
// }

