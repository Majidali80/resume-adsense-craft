
import React, { useRef } from 'react';
import { useResume } from '@/context/ResumeContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { PenLine, Download, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ResumeTemplateSelector from '@/components/templates/ResumeTemplateSelector';
import AdBanner from '@/components/AdBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PreviewPage = () => {
  const { resumeData } = useResume();
  const { toast } = useToast();
  const navigate = useNavigate();
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    navigate('/editor');
  };

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    toast({
      title: "Preparing PDF...",
      description: "Your resume is being generated. Please wait.",
    });

    try {
      const resumeElement = resumeRef.current;
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // A4 size in mm
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`resume_${new Date().toISOString().slice(0, 10)}.pdf`);
      
      toast({
        title: "PDF downloaded successfully!",
        description: "Your resume has been saved as a PDF file.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error generating PDF",
        description: "There was a problem creating your resume PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onExport={handleDownloadPDF} />
      
      <main className="flex-grow container py-6">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">Resume Preview</h1>
              <p className="text-gray-500">
                Here's how your resume looks. You can download it as a PDF or go back to edit.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleEdit}>
                <PenLine className="mr-2 h-4 w-4" />
                Edit Resume
              </Button>
              <Button onClick={handleDownloadPDF} className="bg-resume-blue hover:bg-blue-800">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
        
        {/* Ad Banner */}
        <AdBanner adSlot="2468013579" className="mb-6" />
        
        <div className="flex justify-center mb-6">
          <div ref={resumeRef} className="no-scrollbar">
            <ResumeTemplateSelector data={resumeData} />
          </div>
        </div>
        
        {/* Ad Banner */}
        <AdBanner adSlot="1357924680" className="mt-6" />
      </main>
      
      <Footer />
    </div>
  );
};

export default PreviewPage;
