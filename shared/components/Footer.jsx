export default function Footer({ brand, links, socialLinks }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-lg font-semibold text-gray-900">{brand}</span>
            <p className="mt-2 text-sm text-gray-600">
              Building amazing digital experiences.
            </p>
          </div>
          
          {links?.map((group, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
          {socialLinks && (
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
