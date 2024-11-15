import { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`main-header ${isScroll ? " with-bg" : ""}`}>
      <nav className="nav">
        <a href="https://handsontable.com" target="_blank" className="logo">
          <Logo />
        </a>
        <div className="btn-wrapper">
          <a href="#" target="_blank" className="btn">
            <span className="prefix">Open in</span> bolt.new
          </a>
          <a href="#" target="_blank" className="btn">
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
};

export default Header;
