/**
 * Enum para HTTP Status Code
 */
export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    UNPROCESSABLE_ENTITY = 422,
    CONFLICT = 409,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    MANY_REQUEST = 429,
}
