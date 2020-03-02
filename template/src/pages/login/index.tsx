import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { LoginStore } from '../../stores/login'
import FormData from './form-data'
interface LoginPropsApi extends RouteComponentProps {
  login: LoginStore
}

@inject('login')
@observer
export default class Login extends React.Component<LoginPropsApi, any> {
  render() {
    return (
      <div>
        <FormData
          title={'test'}
          testAxios={this.props.login.testAxios}
          history={this.props.history}
        />
      </div>
    )
  }
}
