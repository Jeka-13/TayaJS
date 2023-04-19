//To do:
//1 some validation needed and test

export function makeFor(template, state) {
    const openMakeFor = '<make-for'
    const closedMakeFor = '/make-for'
    const numberOfOpenedTags = template.split(openMakeFor).length - 1;
    const numberOfClosedTags = template.split(closedMakeFor).length - 1;
    if (numberOfOpenedTags !== numberOfClosedTags) {
        throw new Error('Is missing closed or opened make-for tag');
    }

    // Here I separate only make if from whole template
    const idxOfBeginningCondition = template.indexOf(openMakeFor);
    let makeForWrapper = template.slice(idxOfBeginningCondition);
    const idxOfEndingCondition = makeForWrapper.indexOf('or>')
    makeForWrapper = makeForWrapper.slice(0, idxOfEndingCondition+3);

    //Here I will get loop
    let loop = makeForWrapper.slice(makeForWrapper.indexOf('<m'), makeForWrapper.indexOf('>'))
    const singleQuote = loop.indexOf('\'');
    const doubleQuote = loop.indexOf('\"');
    singleQuote === -1 ? loop = loop.slice(doubleQuote + 1, loop.trim().length-1) :
        loop = loop.slice(singleQuote + 1, loop.trim().length-1);
    let tokens = loop.split(' ');
    const stateKeys = Object.keys(state);
    const keyWordLoop = tokens[1];
    const arrayName = tokens[tokens.length - 1];

    //Here should be validation if array exists
    const items = state[arrayName];

    //Here I start looping the code
    const templateWithoutLoop = template.split(makeForWrapper);
    let content = makeForWrapper.slice(makeForWrapper.indexOf('>') + 1)
    content = content.slice(0, content.indexOf('</make-for>'))
    let result = '';
    for (let i = 0; i < items.length; i++) {
        let temp = content.replace('{{'+ keyWordLoop.trim() + '}}', items[i]);
        result += temp;
    }

    return templateWithoutLoop[0] + result + templateWithoutLoop[1];
}