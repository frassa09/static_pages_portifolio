export default function CTA({ title, description, buttonText, buttonHref = '#' }) {
  const handleClick = (e) => {
    if (buttonHref?.startsWith('#') && buttonHref.length > 1) {
      e.preventDefault()
      document.getElementById(buttonHref.replace(/^#/, ''))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={buttonHref}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={handleClick}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
