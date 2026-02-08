"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { copy } from "@/lib/copy";

const blogPosts = [
  {
    id: 1,
    title: "Groove Garden Recap: A Night to Remember",
    category: "recap",
    date: "2024-08-20",
    excerpt: "Our latest event brought together the best local talent for an unforgettable night of tech house.",
    image: "/next.svg",
  },
  {
    id: 2,
    title: "Announcing Our Next Event: Haunted House",
    category: "announcement",
    date: "2024-09-15",
    excerpt: "Get ready for our Halloween special featuring spooky beats and haunting melodies.",
    image: "/next.svg",
  },
  {
    id: 3,
    title: "Artist Spotlight: DJ Name One",
    category: "interview",
    date: "2024-08-10",
    excerpt: "We sat down with one of our featured artists to discuss their journey and sound.",
    image: "/next.svg",
  },
  {
    id: 4,
    title: "The Boston Electronic Music Scene",
    category: "insights",
    date: "2024-07-25",
    excerpt: "Exploring the vibrant electronic music community in Boston and its growing influence.",
    image: "/next.svg",
  },
];

const categories = ["all", "announcement", "recap", "interview", "insights"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center">
          {copy.blog.title}
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:border-[#00d4ff] transition-colors">
              <div className="aspect-video bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-black text-white/50">{post.title}</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#00d4ff] uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#a0a0a0]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.id}`}>{copy.blog.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
