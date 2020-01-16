import * as React from 'react'

interface Options {
  name: string
  label: string
  id: string
  disabled?: boolean
  checked?: boolean
}

interface CheckboxProps {
  options: Options[]
  class_name?: string
  error?: string
  id?: string
  check_label?: string
  onClick?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

const Checkbox = (props: CheckboxProps) => {
  const {
    options,
    class_name,
    error,
    check_label,
    onClick,
    onChange,
  } = props

  const check_styles = ['radio', class_name]
  if (error) check_styles.push('is-danger')

  return (
    <div className="control">
      <label className="label">
        {check_label}
      </label>
      {options.map((v, i) => (
        <label className="checkbox" key={i}>
          <input
            id={v.id}
            type="checkbox"
            name={v.name}
            className={check_styles.join('')}
            onClick={onClick}
            onChange={onChange}
            disabled={v.disabled}
            checked={v.checked}
          />
          {v.label}
        </label>
      ))}
    </div>
  )
}

export default Checkbox
