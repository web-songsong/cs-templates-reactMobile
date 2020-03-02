import { flow, observable } from 'mobx'
import { login_testAxios } from '../../apis/login'

export class LoginStore {
  @observable userToken = false
  constructor() {
    this.userToken = false
  }

  testAxios = flow(function*(this: LoginStore, params: { account: string; password: string }) {
    const { account, password } = params
    if (account === 'admin' && password === '1234') {
      const res = yield login_testAxios(params)
      this.userToken = res.flag
    }
  }).bind(this)
}

const login = new LoginStore()
export default login
