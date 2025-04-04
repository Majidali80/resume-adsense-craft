
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BookOpenText, Download, PenLine } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onExport?: () => void;
}

const Header = ({ onExport }: HeaderProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isEditor = location.pathname === '/editor';
  const isPreview = location.pathname === '/preview';
  const isHome = location.pathname === '/';
  
  const handleExport = () => {
    if (onExport) {
      onExport();
      toast({
        title: "Resume exported!",
        description: "Your resume has been exported as a PDF.",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex items-center gap-2 font-bold text-xl text-resume-blue">
          <BookOpenText className="h-6 w-6" />
          <span>ResumeCraft</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {!isHome && (
            <nav className="flex items-center space-x-2">
              <Button
                variant={isEditor ? "default" : "outline"}
                size="sm"
                onClick={() => navigate('/editor')}
                className="hidden sm:flex"
              >
                <PenLine className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button
                variant={isPreview ? "default" : "outline"}
                size="sm"
                onClick={() => navigate('/preview')}
                className="hidden sm:flex"
              >
                <BookOpenText className="mr-2 h-4 w-4" />
                Preview
              </Button>
              {isPreview && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExport}
                  className="hidden sm:flex"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </Button>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
