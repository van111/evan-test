import * as React from 'react'

interface Options {
  id: string
  value: string
}

interface SelectProps {
  options: Options[]
  class_name?: string
  error?: string
  id: string
  name: string
  label?: string
  required?: boolean
  onChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void
}

const Select = (props: SelectProps) => {
  const {
    options,
    class_name,
    error,
    id,
    name,
    label,
    required,
    onChange,
  } = props

  const select_styles = ['select', class_name]
  if (error) select_styles.push('is-danger')

  return (
    <div className="control">
      <label className="label">
        {label} {required ? '*' : ''}
      </label>
      <div className="select">
        <select
          className={class_name}
          onChange={onChange}
          id={id}
          name={name}
        >
          {options.map((v) => {
            <option value={v.id}>{v.value}</option>
          })}
        </select>
      </div>
      { error && <p className="help is-danger">{error}</p> }
    </div>
  )  
}

export default Select
