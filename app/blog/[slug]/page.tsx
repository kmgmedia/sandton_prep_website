import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlug } from "@/lib/blog-data";

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getBlogBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 font-['Quicksand'] font-semibold transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Category & Read time */}
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-amber-300/10 rounded-full text-amber-500 text-sm font-semibold font-['Quicksand']">
              {article.category}
            </span>
            <span className="text-slate-500 text-sm font-medium font-['Quicksand']">
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Quicksand'] leading-tight">
            {article.title}
          </h1>

          {/* Description/Excerpt */}
          <p className="text-lg text-slate-600 mb-6 font-['Quicksand'] leading-relaxed">
            {article.description}
          </p>

          {/* Author & Date */}
          <div className="flex items-center gap-4 text-sm text-slate-500 font-['Inter']">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section className="bg-amber-300/10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-64 sm:h-96 flex items-center justify-center">
            <div className="w-24 h-24 border-8 border-amber-300"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-slate max-w-none">
          {article.content ? (
            <div
              className="text-slate-700 font-['Quicksand'] leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="text-slate-700 font-['Quicksand'] leading-relaxed space-y-6">
              <p>
                This is a placeholder for the full article content. In a real
                application, you would fetch this content from a CMS, database,
                or markdown files.
              </p>
              <p>
                <strong>Article: {article.title}</strong>
              </p>
              <p>{article.description}</p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Important point related to {article.category.toLowerCase()}
                </li>
                <li>Practical tips for parents and educators</li>
                <li>Evidence-based research and insights</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              <p>
                Thank you for reading. Stay tuned for more insights and updates
                from Sandton Prep.
              </p>
            </div>
          )}
        </div>
      </article>

      {/* Related Articles or CTA */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 font-['Quicksand']">
            Want to read more?
          </h2>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-amber-300 rounded-lg text-black font-bold font-['Quicksand'] hover:bg-amber-400 transition"
          >
            Browse All Articles
          </Link>
        </div>
      </section>
    </main>
  );
}
