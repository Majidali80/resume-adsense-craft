
import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import AdBanner from '@/components/AdBanner';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ResumeCraft</title>
        <meta name="description" content="Privacy policy for using ResumeCraft, the professional resume builder." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow container px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto max-w-4xl">
            <AdBanner adSlot="2345678901" format="horizontal" className="mb-8" />
            
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <Separator className="mb-6" />
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                At ResumeCraft, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our resume building service.
              </p>
              
              <h2>1. Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our website, including:
              </p>
              <ul>
                <li>Personal identifiers such as name, email address, and contact information</li>
                <li>Professional and employment-related information you provide for your resume</li>
                <li>Educational information you provide for your resume</li>
                <li>Usage details, IP addresses, and browser information</li>
                <li>Information about your device and internet connection</li>
              </ul>
              
              <h2>2. How We Collect Your Information</h2>
              <p>
                We collect information directly from you when you:
              </p>
              <ul>
                <li>Create an account or profile</li>
                <li>Create or edit a resume</li>
                <li>Fill out forms on our website</li>
                <li>Correspond with us</li>
              </ul>
              <p>
                We also collect information automatically as you navigate through our website using cookies and similar technologies.
              </p>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide and maintain our service</li>
                <li>Personalize your experience</li>
                <li>Improve our website and services</li>
                <li>Communicate with you about updates or changes to our service</li>
                <li>Provide customer support</li>
                <li>Monitor usage of our service</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
              
              <h2>4. Sharing Your Information</h2>
              <p>
                We do not sell your personal information. We may disclose your personal information in the following circumstances:
              </p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent</li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from accidental loss or unauthorized access, use, alteration, and disclosure.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our service is not directed to children under the age of 16, and we do not knowingly collect personal information from children.
              </p>
              
              <h2>8. Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>9. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and to hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at alimajid03021980@gmail.com.
              </p>
              
              <p className="text-sm text-muted-foreground mt-12">
                Last updated: April 6, 2025
              </p>
            </div>
            
            <AdBanner adSlot="3456789012" format="rectangle" className="mt-8" />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
