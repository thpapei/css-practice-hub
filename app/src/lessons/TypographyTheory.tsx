export function TypographyTheory() {
  return (
    <div className="theory-content">
      <h2>CSS Typography</h2>

      {/* Table of Contents */}
      <nav className="theory-toc">
        <h3>Contents</h3>
        <ul>
          <li>
            <a href="#font-family">Font Family</a>
          </li>
          <li>
            <a href="#font-size">Font Size</a>
          </li>
          <li>
            <a href="#font-weight">Font Weight</a>
          </li>
          <li>
            <a href="#font-style">Font Style</a>
          </li>
          <li>
            <a href="#line-height">Line Height</a>
          </li>
          <li>
            <a href="#text-align">Text Alignment</a>
          </li>
          <li>
            <a href="#text-decoration">Text Decoration</a>
          </li>
          <li>
            <a href="#text-transform">Text Transform</a>
          </li>
          <li>
            <a href="#spacing">Letter & Word Spacing</a>
          </li>
          <li>
            <a href="#best-practices">Best Practices</a>
          </li>
        </ul>
      </nav>

      {/* Font Family */}
      <section id="font-family">
        <h3>Font Family</h3>
        <p>
          The <code>font-family</code> property specifies the typeface for text.
          You can provide a list of fonts (font stack) as fallbacks.
        </p>

        <p>
          <strong>Font categories (generic families):</strong>
        </p>
        <ul>
          <li>
            <strong>serif</strong> - Fonts with decorative strokes (Times,
            Georgia)
          </li>
          <li>
            <strong>sans-serif</strong> - Clean, modern fonts (Arial, Helvetica)
          </li>
          <li>
            <strong>monospace</strong> - Fixed-width fonts for code (Courier,
            Monaco)
          </li>
          <li>
            <strong>cursive</strong> - Handwriting-style fonts
          </li>
          <li>
            <strong>fantasy</strong> - Decorative fonts
          </li>
        </ul>

        <div className="theory-example">
          <h4>Font Stack Example:</h4>
          <pre>{`font-family: "Helvetica Neue", Arial, sans-serif;`}</pre>
          <p>
            Browser tries fonts in order: Helvetica Neue → Arial → any
            sans-serif
          </p>
        </div>

        <div className="theory-example">
          <h4>Font Family Examples:</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div style={{ fontFamily: "Georgia, serif", fontSize: "18px" }}>
              Serif: Georgia - Classic, readable, traditional
            </div>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "18px" }}>
              Sans-Serif: Arial - Clean, modern, versatile
            </div>
            <div
              style={{ fontFamily: "Courier New, monospace", fontSize: "16px" }}
            >
              Monospace: Courier New - Fixed width for code
            </div>
          </div>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> Always end font stacks with a generic
          family as a fallback. Quote font names with spaces.
        </div>
      </section>

      {/* Font Size */}
      <section id="font-size">
        <h3>Font Size</h3>
        <p>
          The <code>font-size</code> property controls how big or small text
          appears.
        </p>

        <p>
          <strong>Common units:</strong>
        </p>
        <ul>
          <li>
            <strong>px</strong> - Pixels (absolute, predictable)
          </li>
          <li>
            <strong>em</strong> - Relative to parent font size
          </li>
          <li>
            <strong>rem</strong> - Relative to root font size (recommended)
          </li>
          <li>
            <strong>%</strong> - Percentage of parent font size
          </li>
          <li>
            <strong>Keywords</strong> - small, medium, large, x-large, etc.
          </li>
        </ul>

        <div className="theory-example">
          <h4>Font Size Comparison:</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div style={{ fontSize: "12px" }}>12px - Small text</div>
            <div style={{ fontSize: "16px" }}>16px - Body text (default)</div>
            <div style={{ fontSize: "20px" }}>20px - Subheading</div>
            <div style={{ fontSize: "28px" }}>28px - Heading</div>
            <div style={{ fontSize: "36px" }}>36px - Large heading</div>
          </div>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> Use <code>rem</code> for scalable,
          accessible typography. 1rem = root font size (usually 16px).
        </div>
      </section>

      {/* Font Weight */}
      <section id="font-weight">
        <h3>Font Weight</h3>
        <p>
          The <code>font-weight</code> property controls how thick or thin
          characters appear.
        </p>

        <p>
          <strong>Values:</strong>
        </p>
        <ul>
          <li>
            <strong>Keywords:</strong> normal (400), bold (700), lighter, bolder
          </li>
          <li>
            <strong>Numeric:</strong> 100, 200, 300, 400, 500, 600, 700, 800,
            900
          </li>
        </ul>

        <div className="theory-example">
          <h4>Font Weight Scale:</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontWeight: 300, fontSize: "18px" }}>300 - Light</div>
            <div style={{ fontWeight: 400, fontSize: "18px" }}>
              400 - Normal (regular)
            </div>
            <div style={{ fontWeight: 500, fontSize: "18px" }}>
              500 - Medium
            </div>
            <div style={{ fontWeight: 600, fontSize: "18px" }}>
              600 - Semi-bold
            </div>
            <div style={{ fontWeight: 700, fontSize: "18px" }}>700 - Bold</div>
            <div style={{ fontWeight: 900, fontSize: "18px" }}>
              900 - Black (extra bold)
            </div>
          </div>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> Not all fonts support all weights. Check
          your font family's available weights.
        </div>
      </section>

      {/* Font Style */}
      <section id="font-style">
        <h3>Font Style</h3>
        <p>
          The <code>font-style</code> property controls italic and oblique text.
        </p>

        <p>
          <strong>Values:</strong>
        </p>
        <ul>
          <li>
            <strong>normal</strong> - Regular upright text
          </li>
          <li>
            <strong>italic</strong> - Slanted, designed italic version
          </li>
          <li>
            <strong>oblique</strong> - Artificially slanted text
          </li>
        </ul>

        <div className="theory-example">
          <h4>Font Style Examples:</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div style={{ fontStyle: "normal", fontSize: "18px" }}>
              Normal - Regular upright text
            </div>
            <div style={{ fontStyle: "italic", fontSize: "18px" }}>
              Italic - Slanted, designed version
            </div>
          </div>
        </div>
      </section>

      {/* Line Height */}
      <section id="line-height">
        <h3>Line Height</h3>
        <p>
          The <code>line-height</code> property controls the vertical space
          between lines of text. Critical for readability!
        </p>

        <p>
          <strong>Values:</strong>
        </p>
        <ul>
          <li>
            <strong>Unitless number</strong> - Multiplier (1.5 = 1.5× font size)
            - Recommended
          </li>
          <li>
            <strong>px, em, rem</strong> - Fixed height
          </li>
          <li>
            <strong>%</strong> - Percentage of font size
          </li>
        </ul>

        <div className="theory-example">
          <h4>Line Height Comparison:</h4>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "200px" }}>
              <p>
                <strong>line-height: 1</strong>
              </p>
              <p
                style={{ lineHeight: 1, background: "#f8f9fa", padding: "8px" }}
              >
                Too tight. Lines touch. Hard to read. Not recommended for body
                text.
              </p>
            </div>
            <div style={{ maxWidth: "200px" }}>
              <p>
                <strong>line-height: 1.5</strong>
              </p>
              <p
                style={{
                  lineHeight: 1.5,
                  background: "#f8f9fa",
                  padding: "8px",
                }}
              >
                Perfect! Easy to read. Comfortable spacing. Best for body text.
              </p>
            </div>
            <div style={{ maxWidth: "200px" }}>
              <p>
                <strong>line-height: 2.5</strong>
              </p>
              <p
                style={{
                  lineHeight: 2.5,
                  background: "#f8f9fa",
                  padding: "8px",
                }}
              >
                Too loose. Lines feel disconnected. Wastes space.
              </p>
            </div>
          </div>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> Use unitless values (1.5-1.6) for body
          text. They scale better with font size changes.
        </div>
      </section>

      {/* Text Alignment */}
      <section id="text-align">
        <h3>Text Alignment</h3>
        <p>
          The <code>text-align</code> property controls horizontal alignment of
          text within its container.
        </p>

        <p>
          <strong>Values:</strong>
        </p>
        <ul>
          <li>
            <strong>left</strong> - Align to left edge (default for LTR
            languages)
          </li>
          <li>
            <strong>right</strong> - Align to right edge
          </li>
          <li>
            <strong>center</strong> - Center text horizontally
          </li>
          <li>
            <strong>justify</strong> - Stretch to fill width (can create gaps)
          </li>
        </ul>

        <div className="theory-example">
          <h4>Text Alignment Examples:</h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                textAlign: "left",
                background: "#f8f9fa",
                padding: "12px",
              }}
            >
              Left aligned text - Most common for body text in Western languages
            </div>
            <div
              style={{
                textAlign: "center",
                background: "#f8f9fa",
                padding: "12px",
              }}
            >
              Center aligned text - Good for headings and short lines
            </div>
            <div
              style={{
                textAlign: "right",
                background: "#f8f9fa",
                padding: "12px",
              }}
            >
              Right aligned text - Used for numbers or special cases
            </div>
            <div
              style={{
                textAlign: "justify",
                background: "#f8f9fa",
                padding: "12px",
              }}
            >
              Justified text stretches to fill the full width, creating straight
              edges on both sides. Can create awkward spacing in narrow
              containers.
            </div>
          </div>
        </div>
      </section>

      {/* Text Decoration */}
      <section id="text-decoration">
        <h3>Text Decoration</h3>
        <p>
          The <code>text-decoration</code> property adds lines to text:
          underlines, overlines, and strike-throughs.
        </p>

        <p>
          <strong>Values:</strong>
        </p>
        <ul>
          <li>
            <strong>none</strong> - No decoration (removes link underlines)
          </li>
          <li>
            <strong>underline</strong> - Line below text
          </li>
          <li>
            <strong>overline</strong> - Line above text
          </li>
          <li>
            <strong>line-through</strong> - Strike-through line
          </li>
        </ul>

        <div className="theory-example">
          <h4>Text Decoration Examples:</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "18px",
            }}
          >
            <div style={{ textDecoration: "none" }}>
              No decoration - Plain text
            </div>
            <div style={{ textDecoration: "underline" }}>
              Underline - Common for links
            </div>
            <div style={{ textDecoration: "overline" }}>
              Overline - Rarely used
            </div>
            <div style={{ textDecoration: "line-through" }}>
              Line-through - For deleted/old prices
            </div>
            <div
              style={{
                textDecoration: "underline",
                textDecorationColor: "#667eea",
                textDecorationStyle: "wavy",
              }}
            >
              Wavy purple underline - Modern styling
            </div>
          </div>
        </div>
      </section>

      {/* Text Transform */}
      <section id="text-transform">
        <h3>Text Transform</h3>
        <p>
          The <code>text-transform</code> property controls capitalization
          without changing the HTML.
        </p>

        <p>
          <strong>Values:</strong>
        </p>
        <ul>
          <li>
            <strong>none</strong> - Normal text (default)
          </li>
          <li>
            <strong>uppercase</strong> - ALL CAPS
          </li>
          <li>
            <strong>lowercase</strong> - all lowercase
          </li>
          <li>
            <strong>capitalize</strong> - First Letter Of Each Word
          </li>
        </ul>

        <div className="theory-example">
          <h4>Text Transform Examples:</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "18px",
            }}
          >
            <div style={{ textTransform: "none" }}>
              none - Hello World Example
            </div>
            <div style={{ textTransform: "uppercase" }}>
              uppercase - Hello World Example
            </div>
            <div style={{ textTransform: "lowercase" }}>
              lowercase - Hello World Example
            </div>
            <div style={{ textTransform: "capitalize" }}>
              capitalize - hello world example
            </div>
          </div>
        </div>

        <div className="theory-tip">
          <strong>💡 Pro Tip:</strong> Use <code>uppercase</code> for buttons
          and labels. Avoid for long text (harder to read).
        </div>
      </section>

      {/* Letter & Word Spacing */}
      <section id="spacing">
        <h3>Letter & Word Spacing</h3>
        <p>
          Control spacing between characters and words for fine-tuned
          typography.
        </p>

        <p>
          <strong>Properties:</strong>
        </p>
        <ul>
          <li>
            <code>letter-spacing</code> - Space between characters (tracking)
          </li>
          <li>
            <code>word-spacing</code> - Space between words
          </li>
        </ul>

        <div className="theory-example">
          <h4>Letter Spacing Examples:</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              fontSize: "18px",
            }}
          >
            <div style={{ letterSpacing: "normal" }}>
              Normal - Default letter spacing
            </div>
            <div style={{ letterSpacing: "0.05em" }}>
              0.05em - Slightly open (good for headings)
            </div>
            <div
              style={{ letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              0.15em - Wide spacing (uppercase titles)
            </div>
            <div style={{ letterSpacing: "-0.02em" }}>
              -0.02em - Tighter spacing (large headings)
            </div>
          </div>
        </div>

        <div className="theory-example">
          <h4>Word Spacing Example:</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "16px",
            }}
          >
            <div style={{ wordSpacing: "normal" }}>
              Normal word spacing in this sentence
            </div>
            <div style={{ wordSpacing: "0.5em" }}>
              Increased word spacing in this sentence
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices">
        <h3>Best Practices</h3>

        <div className="theory-best-practices">
          <h4>✅ Do:</h4>
          <ul>
            <li>Use system font stacks for fast loading and consistency</li>
            <li>Set body text to 16px (1rem) for accessibility</li>
            <li>Use line-height of 1.5-1.6 for body text</li>
            <li>Limit font families to 2-3 per site</li>
            <li>Use rem units for scalable typography</li>
            <li>Test readability on different screen sizes</li>
            <li>Provide sufficient color contrast (WCAG guidelines)</li>
          </ul>

          <h4>❌ Don't:</h4>
          <ul>
            <li>Use too many different fonts (confusing, slow)</li>
            <li>Set body text smaller than 14px (hard to read)</li>
            <li>Use line-height less than 1.2 for paragraphs</li>
            <li>Overuse uppercase (harder to read)</li>
            <li>Justify text in narrow containers (creates gaps)</li>
            <li>Use decorative fonts for body text</li>
          </ul>
        </div>

        <div className="theory-tip">
          <strong>🎯 Real-World Use:</strong> Good typography is invisible—it
          makes content easy to read without drawing attention to itself. Great
          typography enhances comprehension and user experience.
        </div>

        <div className="theory-example">
          <h4>Professional Typography Example:</h4>
          <div
            style={{
              maxWidth: "600px",
              fontFamily: "Georgia, serif",
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#333",
              background: "white",
              padding: "32px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h4
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: 1.2,
                marginTop: 0,
                marginBottom: "16px",
                color: "#667eea",
              }}
            >
              Professional Typography
            </h4>
            <p style={{ marginTop: 0, marginBottom: "16px" }}>
              This example demonstrates well-balanced typography: readable font
              size, comfortable line height, proper spacing, and clear
              hierarchy.
            </p>
            <p style={{ margin: 0 }}>
              Notice how easy it is to read. That's the goal of good typography!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
