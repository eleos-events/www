"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black uppercase mb-4">Get in Touch</h2>
              <p className="text-lg text-[#a0a0a0] mb-6">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#00d4ff] mb-1">Email</p>
                  <a href="mailto:info@eleosevents.com" className="text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                    info@eleosevents.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#00d4ff] mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                    (123) 456-7890
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#00d4ff] mb-1">Location</p>
                  <p className="text-[#a0a0a0]">Boston, MA</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Press Inquiries</CardTitle>
                <CardDescription>
                  For media and press inquiries, please contact us at press@eleosevents.com
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#0099cc]/10 rounded-lg p-8">
            <h2 className="text-2xl font-black uppercase mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

