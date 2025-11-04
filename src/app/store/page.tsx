"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "elëos T-Shirt",
    price: "$35",
    image: "/next.svg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "elëos Hoodie",
    price: "$65",
    image: "/next.svg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "elëos Cap",
    price: "$25",
    image: "/next.svg",
    sizes: ["One Size"],
  },
  {
    id: 4,
    name: "elëos Sticker Pack",
    price: "$10",
    image: "/next.svg",
    sizes: ["One Size"],
  },
];

export default function StorePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center">
          Store
        </h1>

        <div className="relative mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {products.map((product) => (
                <div key={product.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="h-full hover:border-[#00d4ff] transition-colors">
                    <div className="aspect-square bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-black text-white/50">{product.name}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-[#a0a0a0] mb-2">Size</p>
                        <div className="flex gap-2">
                          {product.sizes.map((size) => (
                            <Button
                              key={size}
                              variant="outline"
                              size="sm"
                              className="flex-1"
                            >
                              {size}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="text-center">
          <p className="text-lg text-[#a0a0a0] mb-6">
            More merchandise coming soon. Check back for new releases!
          </p>
          <Button variant="outline" size="lg">
            See Full Range
          </Button>
        </div>
      </div>
    </div>
  );
}

