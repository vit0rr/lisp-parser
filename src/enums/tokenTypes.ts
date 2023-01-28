// tokens type for a lisp parser
export enum TOKEN_TYPES {
    LEFT_PAREN = 'LEFT_PAREN', // (
    RIGHT_PAREN = 'RIGHT_PAREN', // )
    LEFT_BRACKET = 'LEFT_BRACKET', // [
    RIGHT_BRACKET = 'RIGHT_BRACKET', // ]
    LEFT_BRACE = 'LEFT_BRACE', // {
    RIGHT_BRACE = 'RIGHT_BRACE', // }
    COMMA = 'COMMA', // ,
    COLON = 'COLON', // :
    STRING = 'STRING', // "string"
    NUMBER = 'NUMBER', // 123
    BOOLEAN = 'BOOLEAN', // true or false
    NULL = 'NULL', // null
    ID = 'ID', // variable name
    EOF = 'EOF', // end of file

    // keywords
    IF = 'IF',
    ELSE = 'ELSE',
    WHILE = 'WHILE',
    FOR = 'FOR',
    DEFUN = 'DEFUN',
}