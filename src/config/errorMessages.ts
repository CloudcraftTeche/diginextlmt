export const ERROR_MESSAGES: Record<number | string, string> = {
  400: 'Bad request. Please check your input.',
  401: 'Unauthorized. Please log in again.',
  403: 'Forbidden. You do not have permission.',
  404: 'Resource not found.',
  409: 'Conflict. The resource already exists.',
  422: 'Validation failed. Please correct the errors.',
  500: 'Internal server error. Please try again later.',
  502: 'Bad gateway. The server is temporarily unavailable.',
  503: 'Service unavailable. Please try again later.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
};
