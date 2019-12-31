import axios from 'axios'
import * as R from 'ramda'


const API_ROOT = 'https://conduit.productionready.io/api'


const requests =
  { get: url => axios.get(`${API_ROOT}${url}`).then(R.prop('data'))
  }


const Articles =
  { all: () => requests.get(`/articles?limit=10`)
  }


export default {
  Articles
}