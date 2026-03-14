const FOOTER_LINKS = [
  'Politics', 'Travel', 'World', 'Climate',
  'Economy', 'Lifestyle', 'Science & Tech',
  'Food', 'Business', 'Sports',
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-brand">NEWSLETTER</p>
          <p>Privacy Policy | Terms of Service | Accessibility | Help</p>
          <p>© 2025 Newsletter. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
