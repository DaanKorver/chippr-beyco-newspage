import "./Button.css"

function Button(props) {
  const {children, style, customClick} = props
  return <button onClick={customClick} className={'btn ' + style.join(' ')}>{children}</button>
}

export default Button