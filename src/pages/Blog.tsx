import { Link } from "react-router-dom";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { blogPosts } from "@/data/blogPosts";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight } from "lucide-react";

const Blog = () => (
  <>
    <Seo
      title="Busy Bees Blog — Preschool Tips for Nigdi & Pune Parents"
      description="Practical guides for Nigdi Pradhikaran parents — choosing a preschool, the right age to start, daycare vs preschool, and more."
      path="/blog"
      keywords={["preschool blog Nigdi", "parenting tips Pune", "Pune preschool guide", "Nigdi parents"]}
      jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])}
    />
    <PageHero
      eyebrow="Busy Bees Journal"
      title="Stories, tips &"
      highlight="parent guides"
      description="Practical, no-fluff articles for Nigdi & Pune parents navigating the early years."
      trail={[{ label: "Home", to: "/" }, { label: "Blog" }]}
    />

    <section className="py-16 md:py-20">
      <div className="container-tight">
        <div className="grid gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-card border border-border rounded-3xl p-7 md:p-9 shadow-soft card-lift"
            >
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-honey-dark">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                <span className="mx-2 opacity-60">·</span>
                {post.readTime}
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-ink leading-tight">
                <Link to={`/blog/${post.slug}`} className="hover:text-honey-dark transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{post.description}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-honey-dark hover:gap-2.5 transition-all"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
