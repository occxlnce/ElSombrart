/*
Norris Text Animation
Inspired by https://landonorris.com/ - character-by-character hover effect
*/

export function initNorrisAnimation() {
  const norrisLinks = document.querySelectorAll("a.norris");
  
  norrisLinks.forEach((link) => {
    const text = link.textContent || '';
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    const chars = Array.from(segmenter.segment(text), (s) => s.segment);
    
    link.textContent = '';
    
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.setAttribute('data-char', char);
      span.style.setProperty('--index', index.toString());
      span.textContent = char;
      link.appendChild(span);
    });
  });
  
  console.log("Norris animation loaded for", norrisLinks.length, "links");
}
