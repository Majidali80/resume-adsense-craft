
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-resume-blue">ResumeCraft</h2>
          <p className="text-sm text-muted-foreground">Created by Majid Ali</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="#" className="hover:underline">Terms</Link>
            <Link to="#" className="hover:underline">Privacy</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:alimajid03021980@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} ResumeCraft. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
