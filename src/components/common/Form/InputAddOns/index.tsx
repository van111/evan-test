import React from 'react'

interface InputAddOnsProps {
  type: 'text' | 'number' | 'email' | 'password'
  classname?: string
  placeholder?: string
  id?: string
  value?: string
  tab_index?: number
  name?: string
  error?: string
  required?: boolean
  label?: string
  readonly?: boolean
  disabled?: boolean
  pattern?: string
  max_length?: number
  min_number?: number
  max_number?: number
  auto_complete?: string
  buttonLabel?: string
  buttonStyles?: string
  help?: string
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  onInvalid?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void
}

const InputAddOns: React.FunctionComponent<InputAddOnsProps> = (props) => {
  const {
    type,
    classname,
    placeholder,
    id,
    value,
    tab_index,
    name,
    error,
    required,
    label,
    readonly,
    disabled,
    max_length,
    min_number,
    max_number,
    auto_complete,
    onChange,
    onKeyDown,
    onInvalid,
    onClick,
    buttonLabel = "",
    buttonStyles = "",
    help,
  } = props

  const list_styles = ['input', classname]
  const button_styles = ['button', buttonStyles]
  
  if (error) list_styles.push('is-danger')

  return (
    <div className="field has-addons">
      <label className="label">{label} {(required) ? '*' : ''}</label>
      <div className="control">
        <input 
          type={type}
          className={list_styles.join(' ')}
          placeholder={placeholder}
          id={id}
          value={value}
          tabIndex={tab_index}
          name={name}
          required={required}
          readOnly={readonly}
          disabled={disabled}
          maxLength={max_length}
          max={max_number}
          min={min_number}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onInvalid={onInvalid}
          autoComplete={auto_complete}
        />
        {help ? <p className="help is-pulled-left">{help}</p> : ''}
      </div>
        <div className="control">
          <button
            className={button_styles.join(' ')}
            onClick={onClick}
            type="button"
            >{buttonLabel}</button>
        </div>
        {(error) ? <p className="help is-danger">{error}</p> : ''}
    </div>
  )
}

export default InputAddOns
