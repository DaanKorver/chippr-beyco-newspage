import "./Button.css"

function Button(props) {
  const {children} = props
  const {style} = props
  return <button className={'btn ' + style.join(' ')}>{children}</button>
}

export default Button