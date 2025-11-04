"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VIPPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
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
        eventDate: "",
        guests: "",
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
          VIP & Experiences
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase">
              VIP Packages
            </h2>
            <p className="text-lg text-[#a0a0a0]">
              Elevate your experience with our VIP packages. Enjoy exclusive access, 
              premium amenities, and personalized service.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>VIP Table</CardTitle>
                  <CardDescription>Private area with dedicated bar service</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-[#a0a0a0]">
                    <li>• Private table area</li>
                    <li>• Dedicated bar service</li>
                    <li>• Priority entry</li>
                    <li>• VIP parking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>VIP Experience</CardTitle>
                  <CardDescription>Ultimate nightlife experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-[#a0a0a0]">
                    <li>• All VIP Table benefits</li>
                    <li>• Meet & greet with artists</li>
                    <li>• Complimentary drinks</li>
                    <li>• Backstage access</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 rounded-lg p-8">
            <h2 className="text-2xl font-black uppercase mb-6">Book a VIP Experience</h2>
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
                  required
                />
              </div>
              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
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
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                {submitted ? "Submitted!" : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

