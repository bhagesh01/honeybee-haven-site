import { useParams, Navigate, Link } from "react-router-dom";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { blogPosts } from "@/data/blogPosts";
import { BUSINESS } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: BUSINESS.legalName,
      url: BUSINESS.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.legalName,
      url: BUSINESS.url,
      logo: { "@type": "ImageObject", url: `${BUSINESS.url}${BUSINESS.logoPath}` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BUSINESS.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Seo
        title={`${post.title} — Busy Bees Preschool Blog`}
        description={post.description}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
        type="article"
        jsonLd={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="py-16 md:py-20">
        <div className="container-tight">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>

          {/* Header */}
          <header className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] font-semibold text-honey-dark">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{post.description}</p>
          </header>

          {/* Body */}
          <div
            className="prose-blog mt-10 max-w-3xl text-ink leading-relaxed
              [&_h2]:font-display [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-4
              [&_p]:text-base [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground [&_ul]:mb-6
              [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse
              [&_th]:bg-honey/15 [&_th]:text-ink [&_th]:font-semibold [&_th]:p-3 [&_th]:text-left [&_th]:border [&_th]:border-border
              [&_td]:p-3 [&_td]:border [&_td]:border-border [&_td]:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* CTA */}
          <div className="mt-16 bg-honeycomb-soft border border-border rounded-3xl p-8 sm:p-10 text-center max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Ready to see Busy Bees for yourself?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Schedule a free campus tour or enquire about admissions for 2025–26.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-7 shadow-honey">
                <Link to="/admissions">Apply for Admissions</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 border-2">
                <Link to="/contact">Book a Campus Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
