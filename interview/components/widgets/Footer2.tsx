import { footerData2 } from '~/shared/data/global.data';

const Footer2 = () => {
  const { links, columns, socials, footNote } = footerData2;

  return (
    <footer className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900  py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map(({ title, texts, links }, index) => (
            <div key={`column-${index}`}>
              <h4 className="mb-4 text-lg font-semibold  text-gray-200">{title}</h4>
              {texts &&
                texts.map((text, index2) => (
                  <p
                    key={`text-${index2}`}
                    className="mb-2 text-sm text-gray-300"
                  >
                    {text}
                  </p>
                ))}
              {links &&
                links.map((link, index2) => (
                  <a
                    key={`link-${index2}`}
                    href={link.href}
                    className="block mb-2 text-sm text-gray-400 hover:text-gray-500 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-lg font-semibold  text-gray-200">Social</h4>
            <ul className="flex space-x-4">
              {socials.map(({ label, icon: Icon, href }, index) => (
                <li key={`social-${index}`}>
                  <a
                    href={href}
                    target='_blank'
                    aria-label={label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800 hover:bg-neutral-400  "
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-400 sm:flex-row">
            <ul className="flex space-x-4">
              {links &&
                links.map(({ label, href }, index) => (
                  <li key={`footer-link-${index}`}>
                    <a
                      href={href}
                      className="hover:text-gray-500 hover:underline"
                    >
                      {label}
                    </a>
                    {index < links.length - 1 && <span>·</span>}
                  </li>
                ))}
            </ul>
            <p>{footNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
