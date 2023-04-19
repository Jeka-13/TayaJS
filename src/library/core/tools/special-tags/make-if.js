// TO DO:
// 1. Existing bug with number > 5 as soon as it thinks that > is closing tag
// problem starts with line 17
// 2. Throw an error if variable doesn't exist

export function makeIf(template, state) {
    const openMakeIf = '<make-if'
    const closedMakeIf = '/make-if'
    const numberOfOpenedTags = template.split(openMakeIf).length - 1;
    const numberOfClosedTags = template.split(closedMakeIf).length - 1;
    if (numberOfOpenedTags !== numberOfClosedTags) {
        throw new Error('Is missing closed or opened make-if tag');
    }
    // Here I separate only make if from whole template
    const idxOfBeginningCondition = template.indexOf(openMakeIf);
    let makeIfWrapper = template.slice(idxOfBeginningCondition);
    const idxOfEndingCondition = makeIfWrapper.indexOf('if>')
    makeIfWrapper = makeIfWrapper.slice(0, idxOfEndingCondition+3);

    //Here I will get condition
    let condition = makeIfWrapper.slice(makeIfWrapper.indexOf('<m'), makeIfWrapper.indexOf('>'))
    const singleQuote = condition.indexOf('\'');
    const doubleQuote = condition.indexOf('\"');
    singleQuote === -1 ? condition = condition.slice(doubleQuote + 1, condition.trim().length-1) :
                                                condition = condition.slice(singleQuote + 1, condition.trim().length-1);
    let tokens = condition.split(' ');
    const stateKeys = Object.keys(state);
    tokens.map(token => {
        if (stateKeys.includes(token)) {
            const idx = tokens.indexOf(token);
            tokens.splice(idx, 1, state[token]);
        }
    })
    condition = tokens.join(' ');
    const result = eval(condition);

    // Now I should decide if I render content or not
    const templateWithoutCondition = template.split(makeIfWrapper);
    if (result) {
        let content = makeIfWrapper.slice(makeIfWrapper.indexOf('>') + 1)
        content = content.slice(0, content.indexOf('</make-if>'))
        return templateWithoutCondition[0] + content + templateWithoutCondition[1];
    } else {
        return templateWithoutCondition.join(' ');
    }
}