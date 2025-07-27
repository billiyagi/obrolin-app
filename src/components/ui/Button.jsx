import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({ children, isLoading, rounded = 'default', title, className, ...props }) => {
  const Loader = ({ children }) => (
    <div className='button-loading'>
      <span className='loader inline-block' />
      {children}
    </div>
  )

  return (
    <button
      className={clsx(`button-primary ${className}`, rounded === 'full' && 'rounded-full py-2 px-2', rounded === 'default' && 'rounded-lg py-2 px-4')} disabled={isLoading} title={title} {...props}
    >
      {isLoading ? <Loader>{children}</Loader> : <>{children}</>}
    </button>
  )
}

export default Button

Button.propTypes = {
  /** Konten di dalam button */
  children: PropTypes.node.isRequired,
  /** Status loading */
  isLoading: PropTypes.bool,
  /** Bentuk button */
  rounded: PropTypes.oneOf(['default', 'full']),
  /** Tooltip/title untuk button */
  title: PropTypes.string,
  /** Class tambahan */
  className: PropTypes.string,
  /** Handler klik */
  onClick: PropTypes.func
}
