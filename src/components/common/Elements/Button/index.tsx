import * as React from 'react'

enum Types {
  LINK='link',
  BUTTON='button',
  SUBMIT='submit',
  RESET='reset',
}

interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | 'link'
  class_name?: string
  active?: boolean
  disabled?: boolean
  icon?: string
  large?: boolean
  small?: boolean
  loading?: boolean
  minimal?: boolean
  name?: string
  id?: string
  text: string
  href?: string
  onChange?: (e: React.SyntheticEvent<HTMLButtonElement>) => void
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void
  onKeyDown?: (e: React.SyntheticEvent<HTMLButtonElement>) => void
  onKeyPress?: (e: React.SyntheticEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
  const {
    type,
    class_name,
    name,
    id,
    text,
    icon,
    disabled,
    href,
    onChange,
    onClick,
    onKeyDown,
    onKeyPress,
  } = props

  const button_styles = ['button', class_name]

  return (
    <div className="field">
      <div className="control">
        {(type === Types.LINK) ? 
          <a
            href={href}
            className={button_styles.join('')}
          >
            {text}
          </a>
        : 
          <button
            className={button_styles.join('')}
            disabled={disabled}
            name={name}
            id={id}
            onClick={onClick}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
          >
            {(icon) ? 
                <span className="icon">
                  <i className={icon}></i>
                </span>
              : '' }
            {text}
          </button> 
        }
      </div>
    </div>
  )
}

export default Button
