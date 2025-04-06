
import React, { useRef, useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

const PersonalInfoForm: React.FC = () => {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Image must be less than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file",
        variant: "destructive",
      });
      return;
    }
    
    setUploading(true);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        updatePersonalInfo({ profileImage: event.target.result as string });
        toast({
          title: "Image uploaded",
          description: "Your profile image has been updated",
        });
      }
      setUploading(false);
    };
    reader.onerror = () => {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your image",
        variant: "destructive",
      });
      setUploading(false);
    };
    reader.readAsDataURL(file);
    
    // Reset the input so the same file can be uploaded again if needed
    e.target.value = '';
  };

  const removeImage = () => {
    updatePersonalInfo({ profileImage: undefined });
    toast({
      title: "Image removed",
      description: "Your profile image has been removed",
    });
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Profile Image Upload */}
        <div className="flex flex-col items-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          
          <div className="relative">
            <Avatar 
              className="h-24 w-24 cursor-pointer border-2 border-primary/50 hover:border-primary transition-colors"
              onClick={handleImageClick}
            >
              {personalInfo.profileImage ? (
                <AvatarImage src={personalInfo.profileImage} alt={personalInfo.fullName} />
              ) : (
                <AvatarFallback className="bg-primary/10 text-primary text-xl">
                  {getInitials(personalInfo.fullName || 'AU')}
                </AvatarFallback>
              )}
            </Avatar>
            
            {personalInfo.profileImage && (
              <button 
                type="button" 
                onClick={removeImage}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-destructive text-white hover:bg-destructive/90"
                aria-label="Remove image"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={handleImageClick}
            disabled={uploading}
          >
            <Upload className="mr-2 h-4 w-4" />
            {uploading ? "Uploading..." : personalInfo.profileImage ? "Change Photo" : "Upload Photo"}
          </Button>
          
          <p className="text-xs text-muted-foreground mt-2">
            Recommended: Square image, max 5MB
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={personalInfo.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Professional Title</Label>
            <Input
              id="title"
              name="title"
              value={personalInfo.title}
              onChange={handleChange}
              placeholder="Software Engineer"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={personalInfo.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={personalInfo.location}
              onChange={handleChange}
              placeholder="City, State"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website">Website (Optional)</Label>
            <Input
              id="website"
              name="website"
              value={personalInfo.website || ''}
              onChange={handleChange}
              placeholder="yourwebsite.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={personalInfo.linkedin || ''}
              onChange={handleChange}
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            name="summary"
            value={personalInfo.summary}
            onChange={handleChange}
            placeholder="A brief summary of your professional background and goals..."
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
