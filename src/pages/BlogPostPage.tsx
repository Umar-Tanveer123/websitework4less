import { useParams, Link, Navigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import SectionWrapper from '../components/SectionWrapper';
import { AnimatedSection, useScrollToTop } from '../hooks/useAnimations';
import { getPostBySlug } from '../utils/blog';

export default function BlogPostPage() {
  useScrollToTop();
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/blog" replace />;

  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="pt-20">
      {post.thumbnail && (
        <div className="relative h-[40vh] w-full min-h-[300px] overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-primary/40 mix-blend-overlay z-10" />
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <SectionWrapper background="white">
        <article className="mx-auto max-w-3xl">
          <AnimatedSection>
            <Link
              to="/blog"
              className="group mb-8 inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              <svg
                className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>

            <div className="mb-6 flex items-center gap-4 text-sm text-text-muted">
              <span className="font-medium text-accent">{post.author}</span>
              <span>&bull;</span>
              <time dateTime={new Date(post.date).toISOString()}>
                {new Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                }).format(new Date(post.date))}
              </time>
            </div>

            <h1 className="mb-8 text-4xl font-extrabold text-text-primary sm:text-5xl leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg prose-slate max-w-none text-text-secondary">
              <Markdown>{post.body}</Markdown>
            </div>
          </AnimatedSection>
        </article>
      </SectionWrapper>
    </div>
  );
}
