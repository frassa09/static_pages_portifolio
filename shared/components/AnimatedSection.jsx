import useInView from '../hooks/useInView'

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  as: Tag = 'div'
}) {
  const [ref, isInView] = useInView({ threshold, triggerOnce: true })

  const animations = {
    'fade-up': { opacity: 0, transform: 'translateY(40px)' },
    'fade-down': { opacity: 0, transform: 'translateY(-40px)' },
    'fade-left': { opacity: 0, transform: 'translateX(-40px)' },
    'fade-right': { opacity: 0, transform: 'translateX(40px)' },
    'fade-in': { opacity: 0 },
    'scale-up': { opacity: 0, transform: 'scale(0.9)' },
    'scale-down': { opacity: 0, transform: 'scale(1.1)' }
  }

  const visible = { opacity: 1, transform: 'translate(0,0) scale(1)' }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...(!isInView ? animations[animation] : visible),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </Tag>
  )
}
