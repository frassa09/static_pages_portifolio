import { useCallback } from 'react'

export default function ScrollLink({ to, children, className, ...props }) {
  const handleClick = useCallback((e) => {
    e.preventDefault()
    const id = to?.replace(/^#/, '')
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [to])

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}
