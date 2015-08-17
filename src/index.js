const SUCCESS = 200,
      ERROR = 500;

export default class ApiFormat {
  static success(message = 'success', data = {}) {
    return {
      status: SUCCESS,
      message,
      data
    }
  }  
  static isSuccess(json = {}) {
    return json.status === SUCCESS ? true : false
  }

  static error(message = 'unkown error') {
    return {
      status: ERROR,
      message
    }
  }
  static isError(json = {}) {
    return json.status === ERROR ? true : false
  }
}