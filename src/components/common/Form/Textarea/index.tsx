import * as React from 'react'

interface TextareaProps {
  error?: string
  required?: boolean
  rows?: number
  cols?: number
  max_length?: number
  name?: string
  value?: string | number
  placeholder?: string
  class_name?: string
  label?: string
  id?: string
  help?: string
  disabled?: boolean
  readonly?: boolean
  auto_complete?: string
  onChange?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void
  onInvalid?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void
}

export const Textarea = (props: TextareaProps) => {
  const {
    error,
    required,
    rows,
    cols,
    name,
    value,
    placeholder,
    class_name,
    label,
    id,
    help,
    max_length,
    disabled,
    readonly,
    auto_complete = 'off',
    onChange,
    onKeyDown,
    onInvalid,
  } = props

  const list_styles = ['input', class_name]
  if (error) {
    list_styles.push('is-danger')
  }

  return (
    <div className="field">
      <label className="label">
        {label} {required ? '*' : ''}
      </label>
      <div className="control">
        <textarea
          id={id}
          rows={rows}
          cols={cols}
          name={name}
          placeholder={placeholder}
          className={list_styles.join(' ')}
          maxLength={max_length}
          onChange={onChange}
          onKeyDown={onKeyDown}
          required={required}
          onInvalid={onInvalid}
          value={value}
          disabled={disabled}
          readOnly={readonly}
          autoComplete={auto_complete}
        />
        {help ? <p className="help is-pulled-right">{help}</p> : ''}
        {error ? <p className="help is-danger">{error}</p> : ''}
      </div>
    </div>
  )
}
