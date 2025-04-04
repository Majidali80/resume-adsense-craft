
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ResumeCraft. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
