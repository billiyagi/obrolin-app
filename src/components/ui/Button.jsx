import clsx from 'clsx'

export default function Button({ children, isLoading, rounded = 'default', title, className }) {

  const Loader = ({ children }) => (
    <div className='button-loading'>
      <span className='loader inline-block'></span>
      {children}
    </div>
  )

  return (
    <button className={clsx(
      `button-primary ${className}`,
      rounded == 'full' && 'rounded-full py-2 px-2',
	  rounded == 'default' && 'rounded-lg py-2 px-4'
    )} disabled={isLoading} title={title}>
      {isLoading ? <Loader>{children}</Loader> : <>{children}</>}
    </button>
  )
}
