// Examples of the commands
//
//      <div makeFor="let item of items; index as i">
//  index as i is not mandatory
//
//      <div makeIf"*some condition*">
// Waits for the condition in the brackets

const Token = {
    TokenType,
    Literal: ''
}

const TokenType = {
    ILLEGAL: "ILLEGAL",
    EOF: "EOF",

    IDENT: "IDENT",

    L_ANGLE_BRACKET: "<",
    R_ANGLE_BRACKET: ">",
    HTMTL_TAG: [], //should think about the array where I can use
    ASSIGN: "=",
    SEMICOLON: ";",

    //Keywords
    LET: "LET",
    MAKE_FOR: "makeFor",
    MAKE_IF: "makeIf",
    AS: "as"


}