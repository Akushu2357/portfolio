export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Worapat Chuchoed</p>
        <a href="#home">Back to top ↑</a>
        <p>Built with React. Made with care.</p>
      </div>
    </footer>
  );
}
