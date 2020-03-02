import React, { useState } from 'react'
import { Button, InputItem, List } from 'antd-mobile'
import style from './index.module.scss'
interface PropsApi {
  title: string
  testAxios: (params: any) => void
  history: any
}

const FormData = ({ title, testAxios, history }: PropsApi) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)

  function passwordOnChange(value) {
    setPassword(value)
    if (value.length < 4) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }

  return (
    <div className={style.formData}>
      <h2>{title}</h2>
      <List>
        <InputItem type="text" placeholder={'account'} value={account} onChange={setAccount}>
          account
        </InputItem>
        <InputItem
          type="password"
          placeholder={'password'}
          value={password}
          onChange={passwordOnChange}
          error={hasError}>
          password
        </InputItem>
      </List>
      <Button
        type="primary"
        className={style.loginButton}
        onClick={async () => {
          await testAxios({
            account,
            password,
          })
          history.push('/')
        }}>
        login
      </Button>
    </div>
  )
}

export default FormData
