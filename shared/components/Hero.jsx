export default function Hero({ title, subtitle, ctaText, ctaHref, secondaryCta }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={ctaHref}
              className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              {ctaText}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {secondaryCta.text} <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
