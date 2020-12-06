import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import { Link } from "gatsby";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>

      <div className="navigation">
        <h3 className="nav-title">
          <Link to={`/`}>Raimon's Blog about circles</Link>
        </h3>
        <h3 className="nav-item">
          <Link to={`/about/`}>About</Link>
        </h3>
      </div>

      <div className="main">{children}</div>

      <div className="footer"></div>
    </div>
  );
}
