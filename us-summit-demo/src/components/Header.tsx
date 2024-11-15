import Logo from "./Logo";

const Header = () => (
  <header className="main-header">
    <nav className="nav">
      <a href="https://handsontable.com" target="_blank" className="logo">
        <Logo />
      </a>
      <div className="btn-wrapper">
        <a href="https://stackblitz.com/github/handsontable/handsontable-examples/tree/master/us-summit-demo" target="_blank" className="btn">
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.195 6.993h3.276l-1.927 4.632 6.262-6.618H4.53L6.457.375.195 6.993Z"
              fill="currentColor"
            />
          </svg>
          <span>
            <span className="prefix">Open in</span> StackBlitz
          </span>
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
