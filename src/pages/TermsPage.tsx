
import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import AdBanner from '@/components/AdBanner';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ResumeCraft</title>
        <meta name="description" content="Terms of service for using ResumeCraft, the professional resume builder." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto max-w-4xl">
            <AdBanner adSlot="1234567890" format="horizontal" className="mb-8" />
            
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <Separator className="mb-6" />
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using ResumeCraft, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
              
              <h2>2. Description of Service</h2>
              <p>
                ResumeCraft provides a platform for creating, editing, and managing professional resumes. We offer various templates and tools to help users create effective resumes.
              </p>
              
              <h2>3. User Accounts</h2>
              <p>
                Some features of ResumeCraft may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
              
              <h2>4. User Content</h2>
              <p>
                You retain all ownership rights to the content you submit to ResumeCraft. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, modify, adapt, publish, and display such content in connection with providing our service.
              </p>
              
              <h2>5. Prohibited Activities</h2>
              <p>
                You agree not to engage in any of the following activities:
              </p>
              <ul>
                <li>Using the service for any illegal purpose or in violation of any laws</li>
                <li>Violating the intellectual property rights of others</li>
                <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the service</li>
                <li>Impersonating another person or entity</li>
                <li>Collecting or harvesting any personally identifiable information from the service</li>
              </ul>
              
              <h2>6. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to ResumeCraft at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
              
              <h2>7. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time by posting the revised terms on our website. Your continued use of the service after any such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2>8. Disclaimer of Warranties</h2>
              <p>
                ResumeCraft is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that the service will be uninterrupted, secure, or error-free.
              </p>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, ResumeCraft shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the jurisdiction in which ResumeCraft is based, without regard to its conflict of law provisions.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at alimajid03021980@gmail.com.
              </p>
              
              <p className="text-sm text-muted-foreground mt-12">
                Last updated: April 6, 2025
              </p>
            </div>
            
            <AdBanner adSlot="9876543210" format="rectangle" className="mt-8" />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
