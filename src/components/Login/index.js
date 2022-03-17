import {Component} from 'react'
import {
  LoginContainer,
  FormContainer,
  LogoImage,
  InputContainer,
  LabelField,
  InputField,
  CheckboxContainer,
  CheckboxInput,
  ShowPasswordLabel,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', showPassword: false}

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <LabelField htmlFor="username">UserName</LabelField>
        <InputField
          type="text"
          id="username"
          value={username}
          placeholder="UserName"
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <LabelField htmlFor="password">Password</LabelField>
        <InputField
          type="password"
          id="password"
          value={password}
          placeholder="Password"
        />
        <CheckboxContainer>
          <CheckboxInput type="checkbox" id="checkbox" />
          <ShowPasswordLabel htmlFor="checkbox">ShowPassword</ShowPasswordLabel>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    return (
      <LoginContainer>
        <FormContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <InputContainer>{this.renderUserNameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="button">Login</LoginButton>
        </FormContainer>
      </LoginContainer>
    )
  }
}
export default Login
