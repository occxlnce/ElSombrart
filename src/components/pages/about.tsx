'use client';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { initNorrisAnimation } from '@/lib/norris-animation';

function IconArrowLeft({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export function AboutPage() {
  document.title = 'El-Sombrart | About';

  useEffect(() => {
    initNorrisAnimation();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        .about-page-wrap {
          background: #000;
          color: #fff;
          font-family: 'freightdispcmp-pro', serif;
          position: relative;
          top: 0;
          height: 100%;
          border: 1px solid transparent;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .about-page-wrap a {
          font-style: italic;
          font-weight: 500;
          font-size: 18px;
          line-height: 100%;
          color: #fff;
          text-decoration: none;
          position: fixed;
          display: flex;
          flex-direction: row;
          align-items: center;
          opacity: 0.8;
          padding: 8px;
          transition: all 0.3s ease;
        }

        .about-page-wrap a:hover {
          opacity: 1;
          color: #b2c73a;
        }

        .about-page-wrap a > span {
          width: 90px;
          height: 1px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .about-page-wrap a[href="#top"] {
          top: 0;
          left: 260px;
          transform-origin: top left;
          transform: rotate(90deg);
          padding-left: 0;
        }

        .about-page-wrap a[href="#footer"] {
          bottom: 0;
          right: 260px;
          transform-origin: bottom right;
          transform: rotate(90deg);
          flex-direction: row-reverse;
          padding-right: 0;
        }

        .about-page-wrap a[href="#top"] > span {
          margin-right: 16px;
        }

        .about-page-wrap a[href="#footer"] > span {
          margin-left: 16px;
        }

        .about-page-main > .img-wrapper {
          width: 100vw;
          height: 50vh;
          position: relative;
          background-image: url("https://images.unsplash.com/photo-1537255263864-b779ce1854ff");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          z-index: -1;
          top: 0;
        }

        .about-page-main > .img-wrapper::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.0208296) 4.7%,
            rgba(0, 0, 0, 0.0439704) 8.9%,
            rgba(0, 0, 0, 0.0704) 12.8%,
            rgba(0, 0, 0, 0.101096) 16.56%,
            rgba(0, 0, 0, 0.137037) 20.37%,
            rgba(0, 0, 0, 0.1792) 24.4%,
            rgba(0, 0, 0, 0.228563) 28.83%,
            rgba(0, 0, 0, 0.286104) 33.84%,
            rgba(0, 0, 0, 0.3528) 39.6%,
            rgba(0, 0, 0, 0.42963) 46.3%,
            rgba(0, 0, 0, 0.51757) 54.1%,
            rgba(0, 0, 0, 0.6176) 63.2%,
            rgba(0, 0, 0, 0.730696) 73.76%,
            rgba(0, 0, 0, 0.857837) 85.97%,
            #000 100%
          );
        }

        .about-page-main {
          top: 0;
        }

        .about-page-main > article {
          max-width: 550px;
          width: 100%;
          z-index: 1;
          margin: 20vh auto 80px;
        }

        .about-page-main > article > h1 {
          font-weight: 400;
          font-size: clamp(32px, 4vw, 48px);
          line-height: auto;
          margin-bottom: 16px;
        }

        .about-page-main > article > h2 {
          font-style: italic;
          font-weight: 400;
          font-size: clamp(32px, 4vw, 48px);
          line-height: auto;
          margin-bottom: 32px;
        }

        .about-page-main > article p {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .about-page-main > article blockquote {
          font-weight: 700;
          font-size: clamp(20px, 3vw, 24px);
          line-height: 1.5;
          margin-bottom: 24px;
          position: relative;
          margin: 40px 0px 40px 32px;
        }

        .about-page-main > article blockquote::before {
          position: absolute;
          content: "";
          width: 4px;
          height: 100%;
          background: #fff;
          margin-left: -32px;
        }

        .about-page-footer {
          display: flex;
          flex-direction: column;
          background: #111111;
          height: auto;
          justify-content: center;
          align-items: center;
          padding-top: 160px;
          padding-bottom: 160px;
        }

        .about-page-footer > .footer-wrapper {
          max-width: 550px;
          width: 100%;
        }

        .about-page-footer > .footer-wrapper > h3 {
          font-weight: 400;
          font-size: clamp(48px, 6vw, 80px);
          line-height: 100%;
          margin-bottom: 80px;
        }

        .about-page-footer > .footer-wrapper > .navs-wrapper > nav {
          margin-bottom: 60px;
        }

        .about-page-footer > .footer-wrapper > .navs-wrapper > nav:last-of-type {
          margin-bottom: 0;
        }

        .about-page-footer > .footer-wrapper > .navs-wrapper > nav > h4 {
          font-style: italic;
          font-weight: 400;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 100%;
          margin-bottom: 24px;
        }

        .about-page-footer > .footer-wrapper > .navs-wrapper > nav > ul > li {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.2;
          margin-bottom: 8px;
          list-style-type: none;
        }

        .about-page-footer > .footer-wrapper > .navs-wrapper > nav > ul > li a {
          color: inherit;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .about-page-footer > .footer-wrapper > .navs-wrapper > nav > ul > li a:hover {
          color: #f8955c;
          margin-left: 8px;
        }

        @media only screen and (max-width: 1200px) {
          .about-page-wrap a[href="#top"] {
            left: 120px;
          }

          .about-page-wrap a[href="#footer"] {
            right: 120px;
          }
        }

        @media only screen and (max-width: 900px) {
          .about-page-wrap a[href="#top"] {
            left: 80px;
          }

          .about-page-wrap a[href="#footer"] {
            right: 80px;
          }

          .about-page-footer > .footer-wrapper > h3 {
            font-size: 72px;
          }
        }

        @media only screen and (max-width: 768px) {
          .about-page-wrap a[href="#top"] {
            left: 56px;
          }

          .about-page-wrap a[href="#footer"] {
            right: 56px;
          }

          .about-page-main > article {
            width: 100%;
            padding: 48px;
            margin-bottom: 10vh;
          }

          .about-page-main > article > h1 {
            font-size: 120px;
          }

          .about-page-main > article > h2 {
            font-size: 32px;
          }

          .about-page-footer > .footer-wrapper > h3 {
            font-size: 64px;
          }

          .about-page-footer {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 10vh 48px;
          }
        }

        @media only screen and (max-width: 550px) {
          .about-page-wrap a[href="#top"] {
            left: 32px;
          }

          .about-page-wrap a[href="#footer"] {
            right: 32px;
          }

          .about-page-main > article > h1 {
            font-size: 120px;
          }

          .about-page-main > article > h2 {
            font-size: 32px;
          }

          .about-page-main > article {
            padding: 48px;
          }

          .about-page-footer > .footer-wrapper > h3 {
            font-size: 56px;
          }
        }

        .back-button {
          position: fixed;
          top: max(env(safe-area-inset-top), 6rem);
          left: 2rem;
          z-index: 200;
        }

        @media (max-width: 767px) {
          .back-button {
            left: 1rem;
            top: max(env(safe-area-inset-top), 5rem);
          }
        }
      `}</style>

      <div className="about-page-wrap">
        <div className="back-button">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors norris"
          >
            <IconArrowLeft className="h-5 w-5" />
            <span className="text-base font-medium">Back</span>
          </Link>
        </div>

        <a href="#top"><span></span>Top of Article</a>

        <main className="about-page-main" id="article">
          <div className="img-wrapper"></div>
          <article>
            <h1>Illustrator</h1>
            <p>I'm El-Sombrart — an illustrator creating original artwork, character designs, and creative illustrations. I love bringing ideas to life through visual storytelling and artistic expression.</p>
            <p>My work focuses on creating compelling illustrations that capture imagination and emotion. Whether it's character concepts, original artwork, or creative commissions, I aim to create visuals that resonate and leave a lasting impression.</p>
            <p>Each illustration begins with a concept and evolves through careful artistic development. I believe in the power of visual storytelling to communicate ideas effectively. My process involves exploration, iteration, and refinement until every element serves the artistic vision.</p>
            <blockquote>Illustration is not just about creating images — it's about bringing stories and ideas to life through deliberate, thoughtful artistic choices.</blockquote>
            <p>I work primarily as a digital illustrator, creating artwork that combines artistic skill with technical precision. This approach allows me to bring creative visions to life while ensuring the final artwork is polished and ready for any application.</p>
          </article>
        </main>
      </div>
    </>
  );
}
