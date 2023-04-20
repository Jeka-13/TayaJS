export function initDirectives(directives) {
    if (!directives) {
        return;
    }

    directives.forEach(directive => directive.init());
}