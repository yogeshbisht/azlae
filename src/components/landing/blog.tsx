import React from "react";
import Link from "next/link";
import { blogData } from "@/constants";
import { Card, CardFooter, CardHeader, CardContent } from "../ui/card";
import Image from "next/image";
import SectionContainer from "../section/section-container";
import SectionTitle from "../section/section-title";

const Blog = () => {
  return (
    <SectionContainer sectionId="blog">
      <SectionTitle
        title="Latest Blog Posts"
        description="Read our latest blog posts"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <Image
                src="https://picsum.photos/500"
                alt={post.title}
                className="h-48 w-full object-cover"
                width={500}
                height={500}
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.subtitle}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
        <div className="col-span-full">
          <Link
            href="/blog"
            className="mt-4 block text-center text-blue-600 hover:underline"
          >
            View More
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Blog;
