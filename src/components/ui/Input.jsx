import PropTypes from 'prop-types'

export default function Input ({
  type,
  className,
  isLabel = true,
  label,
  value,
  id,
  onChange,
  ...props
}) {
  const inputProps = {
    type,
    className: `input ${className}`,
    id,
    onChange,
    ...props
  }

  if (value !== undefined) {
    inputProps.value = value // ✅ hanya set jika ada value
  }

  const inputElement = <input {...inputProps} />

  return (
    <div>
      {isLabel
        ? (
          <label htmlFor={id}>
            <span className='text-sm font-medium text-gray-700 inline-block mb-2'>{label}</span>
            {inputElement}
          </label>
          )
        : (
            inputElement
          )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLabel: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  onChange: PropTypes.func // ✅ tidak lagi isRequired
}
