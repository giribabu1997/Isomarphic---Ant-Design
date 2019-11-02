import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../settings';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
            Front End
              {/* <i className={siteConfig.siteIcon} /> */}
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          {/* <Link to="/dashboard">{siteConfig.siteName}</Link> */}
          <Link to="/dashboard">Front End</Link>
        </h3>
      )}
    </div>
  );
};
