export function makeIf(template, state) {
    const openMakeIf = '<make-if'
    const closedMakeIf = '/make-if'
    const numberOfOpenedTags = template.split(openMakeIf).length - 1;
    const numberOfClosedTags = template.split(closedMakeIf).length - 1;
    if (numberOfOpenedTags !== numberOfClosedTags) {
        throw new Error('Is missing closed or opened make-if tag');
    }

    const idxOfBeginningCondition = template.indexOf(openMakeIf);
    let makeIfWrapper = template.slice(idxOfBeginningCondition);
    const idxOfEndingCondition = makeIfWrapper.indexOf('if>')
    makeIfWrapper = makeIfWrapper.slice(0, idxOfEndingCondition+3);

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

    const templateWithoutCondition = template.split(makeIfWrapper);
    if (result) {
        let content = makeIfWrapper.slice(makeIfWrapper.indexOf('>') + 1)
        content = content.slice(0, content.indexOf('</make-if>'))
        return templateWithoutCondition[0] + content + templateWithoutCondition[1];
    } else {
        return templateWithoutCondition.join(' ');
    }
}