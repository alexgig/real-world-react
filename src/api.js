import axios from 'axios'
import * as R from 'ramda'


const API_ROOT = 'https://api.github.com'


const requests =
  { get: url => axios.get(`${API_ROOT}${url}`)
      .then(R.prop('data'))
  }


const Users =
  { all: () => requests.get(`/users?page=10`)
  }


export default {
  Users
}