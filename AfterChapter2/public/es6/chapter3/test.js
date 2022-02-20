'use strict';
//es6 feature: block-scoped "let" declaration
const sentences = [
    { subject: 'Kumaraguru', verb: 'is', object: 'Human'},
    { subject: 'Muthuraj', verb: 'is', object: 'Human'},
]
//es6 feature: object destructuring
function say({subject, verb, object}) {
    //es6 feature: template strings
    console.log(`${subject} ${verb} ${object}`);
}
//es6 feature: for..of
for(let s of sentences) {
    say(s);
}