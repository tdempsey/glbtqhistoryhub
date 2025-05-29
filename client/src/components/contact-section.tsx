import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import type { InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Contact Us</h2>
          <p className="text-xl text-black">Get in touch to share your story, ask questions, or learn about volunteer opportunities</p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-black">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Subject
                </Label>
                <Select onValueChange={(value) => setValue("subject", value)}>
                  <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="story-submission">Share a Story</SelectItem>
                    <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                    <SelectItem value="research">Research Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Tell us how we can help or how you'd like to get involved..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">Get Involved</h3>
              <p className="text-black mb-4">We're always looking for volunteers, researchers, and community members to help preserve Georgia's LGBTQ+ history.</p>
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <CheckCircle className="text-purple-400 mr-3 h-5 w-5" />
                  Share your personal story
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-purple-400 mr-3 h-5 w-5" />
                  Volunteer at events
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-purple-400 mr-3 h-5 w-5" />
                  Assist with research
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-purple-400 mr-3 h-5 w-5" />
                  Help with digitization
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-purple-400 mr-4 h-5 w-5" />
                  <span className="text-black">info@galgbtqhistory.org</span>
                </div>
                <div className="flex items-center">
                  <Facebook className="text-purple-400 mr-4 h-5 w-5" />
                  <span className="text-black">@GALGBTQHistory</span>
                </div>
                <div className="flex items-center">
                  <Twitter className="text-purple-400 mr-4 h-5 w-5" />
                  <span className="text-black">@GALGBTQHistory</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="text-purple-400 mr-4 h-5 w-5" />
                  <span className="text-black">@GALGBTQHistory</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">Privacy & Safety</h3>
              <p className="text-black text-sm">
                We understand the sensitive nature of LGBTQ+ stories and history. All submissions are handled with care and confidentiality. You control how your story is shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
