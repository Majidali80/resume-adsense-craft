
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import PreviewPage from "./pages/PreviewPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import { ResumeProvider } from "./context/ResumeContext";
import AdScript from "./components/AdScript";
import AdPopup from "./components/AdPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>ResumeCraft - Professional Resume Builder</title>
      <meta name="description" content="Build professional resumes in minutes with ResumeCraft, the free and easy-to-use resume builder." />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AdScript />
      <ResumeProvider>
        <AdPopup />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ResumeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
