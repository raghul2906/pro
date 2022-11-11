export const environment = {
    production: false,
    BASE_URL : 'http://localhost:8080',
    ACCOUNT_BASE_URL :  'http://localhost:8080/account/',
    PROFILE_BASE_URL :  'http://localhost:8080/profile/',
    LOAN_BASE_URL :  'http://localhost:8080/loan/',
    ACCOUNT: {
      GET_ALL_ACCOUNT : 'details',
      GET_ACCOUNT : 'single',
      POST : 'add',
      UPDATE_ACCOUNT : 'update',
      DELETE_ACCOUNT : 'delete'
    },
    PROFILE: {
      GET_ALL_PROFILE : 'details',
      GET_PROFILE : 'single',
      POST : 'add',
      UPDATE_PROFILE : 'update',
      DELETE_PROFILE : 'delete'
    },
    LOAN: {
      GET_ALL_LOAN : 'details',
      GET_LOAN : 'single',
      POST : 'add',
      UPDATE_LOAN : 'update',
      DELETE_LOAN : 'delete'
    }
  };