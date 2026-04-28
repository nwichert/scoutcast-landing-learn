import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  posts,
  getPost,
  formatPostDate,
  type Post,
  type Block,
  type InlineNode,
} from "@/lib/posts";

const SITE_URL = "https://scoutcast.ai";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} · Scoutcast.ai`,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonical,
      images: post.ogImage ? [{ url: `${SITE_URL}${post.ogImage}` }] : undefined,
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.ogImage ? [`${SITE_URL}${post.ogImage}`] : undefined,
    },
  };
}

function renderInline(node: InlineNode, key: number) {
  switch (node.type) {
    case "text":
      return <span key={key}>{node.value}</span>;
    case "strong":
      return (
        <strong key={key} className="font-semibold text-[#F0F6FC]">
          {node.value}
        </strong>
      );
    case "em":
      return (
        <em key={key} className="italic">
          {node.value}
        </em>
      );
    case "link": {
      const isExternal = /^https?:|^mailto:/.test(node.href);
      return (
        <a
          key={key}
          href={node.href}
          {...(isExternal && node.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-[#0AB17B] underline-offset-4 hover:underline"
        >
          {node.value}
        </a>
      );
    }
  }
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "lead":
      return (
        <p
          key={i}
          className="text-[19px] font-medium leading-[1.65] text-[#F0F6FC]"
        >
          {block.content.map(renderInline)}
        </p>
      );
    case "p":
      return (
        <p key={i} className="text-[17px] leading-[1.7] text-[#C9D1D9]">
          {block.content.map(renderInline)}
        </p>
      );
    case "h2":
      return (
        <h2
          key={i}
          className="mt-6 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-[#F0F6FC] sm:text-[30px]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="mt-2 text-[20px] font-semibold leading-[1.3] text-[#F0F6FC]"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={i}
          className="ml-6 flex list-disc flex-col gap-2 text-[17px] leading-[1.7] text-[#C9D1D9] marker:text-[#8B949E]"
        >
          {block.items.map((item, j) => (
            <li key={j}>{item.map(renderInline)}</li>
          ))}
        </ul>
      );
    case "img":
      return (
        <figure key={i} className="-mx-2 flex flex-col gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            loading="lazy"
            className="w-full rounded-md border border-[#30363D]"
          />
          {block.caption ? (
            <figcaption className="px-2 text-[14px] leading-[1.5] text-[#8B949E]">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case "table":
      return (
        <div
          key={i}
          className="-mx-2 overflow-x-auto rounded-md border border-[#30363D]"
        >
          <table className="w-full border-collapse text-left text-[15px] leading-[1.5] text-[#C9D1D9]">
            <thead className="bg-[#161B22] text-[13px] font-semibold uppercase tracking-[0.04em] text-[#F0F6FC]">
              <tr>
                {block.headers.map((cell, j) => (
                  <th
                    key={j}
                    className="border-b border-[#30363D] px-3 py-2 align-top"
                  >
                    {cell.map(renderInline)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className="border-t border-[#30363D]">
                  {row.map((cell, k) => (
                    <td key={k} className="px-3 py-2 align-top">
                      {cell.map(renderInline)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "hr":
      return <hr key={i} className="my-4 border-[#30363D]" />;
  }
}

function buildArticleLd(post: Post) {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.ogImage ? `${SITE_URL}${post.ogImage}` : undefined,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: post.authorUrl,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Scoutcast.ai",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/scoutcast-icon.png`,
      },
    },
    mainEntityOfPage: canonical,
  };
}

function buildFaqLd(post: Post) {
  if (!post.faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

function buildItemListLd(post: Post) {
  if (!post.comparedItems?.items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: post.comparedItems.name,
    itemListElement: post.comparedItems.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MobileApplication",
        name: item.name,
        url: item.url,
      },
    })),
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = buildArticleLd(post);
  const faqLd = buildFaqLd(post);
  const itemListLd = buildItemListLd(post);

  return (
    <div className="dark min-h-screen bg-[#0D1117] text-[#F0F6FC] antialiased">
      <JsonLd data={articleLd} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      {itemListLd ? <JsonLd data={itemListLd} /> : null}
      <Header />

      <main className="px-6 pb-24 pt-28 sm:pt-32 lg:px-12 lg:pt-40">
        <article className="mx-auto flex max-w-2xl flex-col gap-8">
          <Link
            href="/blog/"
            className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#0AB17B] hover:text-[#0BC189]"
          >
            ← Back to blog
          </Link>

          <header className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-[#8B949E]">
              {formatPostDate(post.date)} · {post.author}
            </span>
            <h1 className="text-balance text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F6FC] sm:text-[44px] lg:text-[52px]">
              {post.title}
            </h1>
            <p className="text-[17px] leading-[1.55] text-[#C9D1D9]">{post.excerpt}</p>
          </header>

          <div className="flex flex-col gap-5 border-t border-[#30363D] pt-8">
            {post.body.map(renderBlock)}

            {post.faqs?.length ? (
              <>
                <h2 className="mt-6 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-[#F0F6FC] sm:text-[30px]">
                  Frequently asked questions
                </h2>
                {post.faqs.map((f, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h3 className="text-[20px] font-semibold leading-[1.3] text-[#F0F6FC]">
                      {f.question}
                    </h3>
                    <p className="text-[17px] leading-[1.7] text-[#C9D1D9]">{f.answer}</p>
                  </div>
                ))}
              </>
            ) : null}
          </div>

          <p className="text-sm text-[#8B949E]">
            Last updated {formatPostDate(post.updatedAt ?? post.date)}
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
