import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { posts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog · Scoutcast.ai",
  description:
    "Notes from the Scoutcast team on personalized audio briefings, sports media, and what we're learning shipping a five-minute show.",
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="dark min-h-screen bg-[#0D1117] text-[#F0F6FC] antialiased">
      <Header />

      <main className="px-6 pb-24 pt-28 sm:pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <header className="flex flex-col gap-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-[#0AB17B]">
              Blog
            </span>
            <h1 className="text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#F0F6FC] sm:text-[56px] lg:text-[64px]">
              Notes from the booth.
            </h1>
            <p className="max-w-xl text-[17px] leading-[1.55] text-[#8B949E]">
              How the briefings get made, what the data says about audio attention, and the calls behind every five-minute drop.
            </p>
          </header>

          <ul className="flex flex-col">
            {sorted.map((post) => (
              <li key={post.slug} className="border-t border-[#30363D] last:border-b">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex flex-col gap-2 py-7 transition"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.06em] text-[#8B949E]">
                    {formatPostDate(post.date)}
                  </span>
                  <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.01em] text-[#F0F6FC] transition group-hover:text-[#0AB17B] sm:text-[28px]">
                    {post.title}
                  </h2>
                  <p className="text-[15px] leading-[1.55] text-[#C9D1D9]">{post.excerpt}</p>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#0AB17B]">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
