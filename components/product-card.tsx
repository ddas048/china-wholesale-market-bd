import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductCard() {
  return (
    <Card className="w-full max-w-[200px] cursor-pointer">
      <CardHeader className="group relative flex h-52 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-500/10">
        {/* <Image
          src={product.image[0]}
          alt={product.name}
          className="h-4/5 w-4/5 object-cover transition group-hover:scale-105 md:h-full md:w-full"
          width={800}
          height={800}
        /> */}
        <button className="absolute top-2 right-2 rounded-full bg-white p-2 shadow-md">
          <Heart className="size-3" />
        </button>
      </CardHeader>

      <CardContent className="p-3 pt-2">
        <CardTitle className="w-full truncate pt-2 font-medium md:text-base">
          Product Name
        </CardTitle>
        <CardDescription className="w-full truncate pt-2 text-xs text-gray-500/70 max-sm:hidden">
          Product Description
        </CardDescription>

        <div className="flex items-center gap-2 pt-1">
          <p className="text-xs">{4.5}</p>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={cn(
                  "size-3",
                  index < Math.floor(4)
                    ? "fill-orange-600 text-orange-500"
                    : "fill-gray-400 text-gray-400",
                )}
              />
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex w-full items-center justify-between p-3">
        <p>$10</p>
        <Button variant="outline" className="rounded-full text-gray-500">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
