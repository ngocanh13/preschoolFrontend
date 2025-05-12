import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className="overflow-hidden">
      <div className="d-flex">
        <div className="flex-grow-1 h-100">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
