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

export function ProcessPage() {
  document.title = 'El-Sombrart | Process';

  useEffect(() => {
    initNorrisAnimation();
  }, []);

  return (
    <>
      <style>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .process-body {
          background: #000;
          color: #fff;
          font-family: 'freightdispcmp-pro', serif;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        .process-body p {
          margin: 0 0 13px 0;
          line-height: 1.6;
        }

        .process-body a {
          color: #fff;
          text-decoration: none;
        }

        .process-body a:hover {
          color: #fff/70;
        }

        .center { 
          text-align: center; 
        }

        .container {
          width: 95%;
          max-width: 1220px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .episode {
          display: grid;
          grid-template-columns: 1fr 3fr;
          position: relative;
          margin-bottom: 2rem;
        }

        .episode__number {
          font-size: 8vw;
          font-weight: 600;
          padding: 10px 0;
          position: sticky;
          top: 2rem;
          text-align: center;
          height: calc(8vw + 20px);
          transition: all 0.2s ease-in;
          color: #fff;
          opacity: 0.8;
        }

        .episode__content {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          display: grid;
          grid-template-columns: 1fr 4fr;
          grid-gap: 10px;
          padding: 20px 0;
        }

        .episode__content .title {
          font-weight: 500;
          font-size: 1.2rem;
          color: #fff;
        }

        .episode__content .story {
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }

        .process-body h1 {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 500;
          margin-bottom: 3rem;
          color: #fff;
        }

        .process-body h3 {
          font-size: 0.9rem;
          font-weight: 400;
          opacity: 0.7;
          margin-top: 4rem;
        }

        @media (max-width: 768px) {
          .episode__content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .episode__number {
            font-size: 10vw;
            height: calc(10vw + 20px);
          }
        }

        @media (max-width: 576px) {
          .episode__content .story {
            font-size: 0.9rem;
          }
          
          .episode__content .title {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="process-body">
        <div className="container">
          <h1 className="center text-4xl md:text-5xl font-bold mb-8">Creative Process</h1>
          
          <div className="flex items-center justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors norris"
            >
              <IconArrowLeft className="h-5 w-5" />
              <span className="text-base font-medium">Back</span>
            </Link>
          </div>
          
          <article className="episode">
            <div className="episode__number">00</div>
            <div className="episode__content">
              <div className="title">Beginnings</div>
              <div className="story">
                <p>Say hello to El-Sombrart - the creative mind behind original illustrations and artistic expression. I'm an illustrator by passion, bringing ideas to life through visual storytelling. When I discovered my artistic voice, everything changed.</p>
                <p>My journey began with simple sketches and evolved into compelling illustrations that capture imagination and emotion. Each piece tells a story, whether it's a character concept, original artwork, or creative commission. Nobody knew that this path would become my calling, but I knew from the first artistic expression.</p>
                <p>Watch El-Sombrart, both creator and dreamer, as I navigate the world of illustration while pushing the boundaries of what visual art can express.</p>
              </div>
            </div>
          </article>
          
          <article className="episode">
            <div className="episode__number">01</div>
            <div className="episode__content">
              <div className="title">The Process</div>
              <div className="story">
                <p>"Let's start with a blank canvas."</p>
                <p>I open my digital workspace and stare at the empty canvas. It's both terrifying and exhilarating - infinite possibilities waiting to be shaped. My creative mind begins to explore, ready to create the first stroke that will define the entire composition.</p>
                <p>"Every great illustration starts with a single idea," I tell myself. The first concept takes form, then another, and suddenly the artwork begins to emerge. This is where the magic happens - in the space between imagination and creation.</p>
                <p>I work in layers, building complexity from simplicity. Foundation first, then details, finally the focal point. Each element must serve the artistic vision while maintaining its own identity. It's a dance between restraint and expression.</p>
                <p>"What story does this illustration tell?" I ask myself constantly. Every brushstroke, every color choice, every composition must contribute to the narrative. This isn't just creating art - it's visual storytelling.</p>
              </div>
            </div>
          </article>
          
          <article className="episode">
            <div className="episode__number">02</div>
            <div className="episode__content">
              <div className="title">Artistic Development</div>
              <div className="story">
                <p>Artistic expression is my passion. Illustrations are not just images - they're emotions and ideas captured in visual form. I start with basic concepts, shapes and ideas that gradually evolve into compelling artwork with stories to tell.</p>
                <p>"What makes this illustration unique?" I ponder, studying the composition. Strong compositions are everything in illustration. If it reads well as a concept, it will work in any style. I refine the artwork, adding details that enhance rather than clutter.</p>
                <p>Color comes last but matters most. I build palettes that evoke emotion and set the mood. High contrast for drama, subtle transitions for depth, unexpected combinations for intrigue. Each color choice is deliberate, each artistic decision purposeful.</p>
                <p>The illustration comes alive through expression. A subtle detail, the flow of composition, the emotional impact - these small elements transform shapes into meaningful art. I spend hours perfecting these nuances.</p>
                <p>"Does this illustration resonate?" I ask, stepping back from the work. If the answer is yes, then the artwork is complete. If not, back to the creative process.</p>
              </div>
            </div>
          </article>
          
          <article className="episode">
            <div className="episode__number">03</div>
            <div className="episode__content">
              <div className="title">Creative Illustration</div>
              <div className="story">
                <p>Creative illustrations are where art meets communication. They must capture attention while telling a story. I approach each illustration as a visual narrative - how to convey maximum emotion and meaning through artistic expression?</p>
                <p>"Composition is everything," I remind myself. The main element draws focus, supporting elements guide the eye, and negative space provides breathing room. Every element has its place and purpose.</p>
                <p>Artistic elements become part of the storytelling rather than just decorative. Colors flow around shapes, textures become emotional cues, and visual elements merge into one cohesive illustration. This integration is what separates good art from great illustrations.</p>
                <p>I test compositions at different scales. Does it work as a thumbnail? Does it hold up when displayed large? Versatility is key in illustration - it must work in digital and print, in color and monochrome.</p>
                <p>The final illustration is a balance of art and expression. It must be visually compelling enough to display and meaningful enough to communicate its message. When both goals are achieved, that's when the artistic magic happens.</p>
              </div>
            </div>
          </article>
        </div>
        <h3 className="center mt-12 mb-8">
          <a 
            href="https://behance.net/el-sombrart" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Follow El-Sombrart on Behance
          </a>
        </h3>
      </div>
    </>
  );
}
