import { contacts, usefulLinks } from "./constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-zinc-300">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Полезные ссылки</h3>
          <ul className="space-y-2">
            {usefulLinks.map((link, i) => (
              <li key={i}>
                <a
                  className="text-neutral-500 hover:text-neutral-700"
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Полезные ссылки</h3>
          <ul className="space-y-2">
            {usefulLinks.map((link, i) => (
              <li key={i}>
                <a
                  className="text-neutral-500 hover:text-neutral-700"
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Контакты</h3>
          <ul className="space-y-2">
            {contacts.map((link, i) => (
              <li key={i}>
                <a
                  className="text-neutral-500 hover:text-neutral-700"
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
