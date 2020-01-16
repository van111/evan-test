import * as React from 'react'

interface Options {
  name: string
  label: string
  id: string
  disabled?: boolean
  checked?: boolean
}

interface RadioProps {
  options: Options[]
  class_name?: string
  error?: string
  id?: string
  radio_label?: string
  onClick?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

const Radio = (props: RadioProps) => {
  const {
    options,
    class_name,
    error,
    radio_label,
    onClick,
    onChange,
  } = props

  const radio_styles = ['radio', class_name]
  if (error) radio_styles.push('is-danger')

  return (
    <div className="control">
      <label className="label">
        {radio_label}
      </label>
      {options.map((v, i) => (
        <label className="radio" key={i}>
          <input
            id={v.id}
            type="radio"
            name={v.name}
            className={radio_styles.join('')}
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

export default Radio
