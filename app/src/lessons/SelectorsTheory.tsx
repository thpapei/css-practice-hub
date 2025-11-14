export default function SelectorsTheory(): JSX.Element {
  return (
    <div className="theory-content">
      <div className="theory-header">
        <h1>CSS Selectors & Specificity</h1>
        <p>
          Complete guide to targeting elements and understanding the cascade
        </p>
      </div>

      <div className="theory-body">
        <nav className="theory-toc">
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a href="#basic">Basic Selectors</a>
            </li>
            <li>
              <a href="#attribute">Attribute Selectors</a>
            </li>
            <li>
              <a href="#combinators">Combinators</a>
            </li>
            <li>
              <a href="#pseudo-classes">Pseudo-classes</a>
            </li>
            <li>
              <a href="#pseudo-elements">Pseudo-elements</a>
            </li>
            <li>
              <a href="#specificity">Specificity</a>
            </li>
          </ul>
        </nav>

        <section id="basic">
          <h2>Basic Selectors</h2>

          <h3>Element Selector</h3>
          <p>Targets all elements of a given type.</p>
          <pre>
            <code>{`p {
  color: blue;
}`}</code>
          </pre>

          <h3>Class Selector</h3>
          <p>
            Targets elements with a specific class attribute. Use a dot (.)
            prefix.
          </p>
          <pre>
            <code>{`.highlight {
  background: yellow;
}`}</code>
          </pre>

          <h3>ID Selector</h3>
          <p>
            Targets a unique element with a specific ID. Use a hash (#) prefix.
          </p>
          <pre>
            <code>{`#header {
  font-size: 2rem;
}`}</code>
          </pre>

          <h3>Universal Selector</h3>
          <p>Targets all elements. Use sparingly.</p>
          <pre>
            <code>{`* {
  box-sizing: border-box;
}`}</code>
          </pre>
        </section>

        <section id="attribute">
          <h2>Attribute Selectors</h2>

          <h3>[attr]</h3>
          <p>Elements with the attribute present.</p>
          <pre>
            <code>{`[disabled] {
  opacity: 0.5;
}`}</code>
          </pre>

          <h3>[attr="value"]</h3>
          <p>Exact attribute value match.</p>
          <pre>
            <code>{`[type="text"] {
  border: 1px solid gray;
}`}</code>
          </pre>

          <h3>[attr^="value"]</h3>
          <p>Attribute value starts with...</p>
          <pre>
            <code>{`[href^="https"] {
  color: green;
}`}</code>
          </pre>

          <h3>[attr$="value"]</h3>
          <p>Attribute value ends with...</p>
          <pre>
            <code>{`[href$=".pdf"] {
  background: url(pdf-icon.png);
}`}</code>
          </pre>

          <h3>[attr*="value"]</h3>
          <p>Attribute value contains...</p>
          <pre>
            <code>{`[class*="btn"] {
  cursor: pointer;
}`}</code>
          </pre>
        </section>

        <section id="combinators">
          <h2>Combinators</h2>

          <h3>Descendant Combinator (space)</h3>
          <p>All descendants, any level deep.</p>
          <pre>
            <code>{`article p {
  line-height: 1.6;
}`}</code>
          </pre>

          <h3>Child Combinator (&gt;)</h3>
          <p>Direct children only.</p>
          <pre>
            <code>{`nav > a {
  display: inline-block;
}`}</code>
          </pre>

          <h3>Adjacent Sibling (+)</h3>
          <p>Immediately following sibling.</p>
          <pre>
            <code>{`h2 + p {
  font-weight: bold;
}`}</code>
          </pre>

          <h3>General Sibling (~)</h3>
          <p>All following siblings.</p>
          <pre>
            <code>{`h2 ~ p {
  color: gray;
}`}</code>
          </pre>
        </section>

        <section id="pseudo-classes">
          <h2>Pseudo-classes</h2>

          <h3>Interactive States</h3>
          <pre>
            <code>{`a:hover { color: red; }
a:active { color: darkred; }
input:focus { border-color: blue; }
button:disabled { opacity: 0.5; }`}</code>
          </pre>

          <h3>Structural</h3>
          <pre>
            <code>{`li:first-child { font-weight: bold; }
li:last-child { margin-bottom: 0; }
li:nth-child(odd) { background: #f5f5f5; }
li:nth-child(3n) { color: blue; }
p:nth-of-type(2) { font-size: 1.2em; }`}</code>
          </pre>

          <h3>Form States</h3>
          <pre>
            <code>{`input:required { border-left: 3px solid orange; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:checked + label { font-weight: bold; }`}</code>
          </pre>

          <h3>Other Useful Ones</h3>
          <pre>
            <code>{`:not(.active) { display: none; }
:empty { display: none; }
:only-child { margin: 0; }`}</code>
          </pre>
        </section>

        <section id="pseudo-elements">
          <h2>Pseudo-elements</h2>

          <h3>::before and ::after</h3>
          <p>Insert content before or after an element.</p>
          <pre>
            <code>{`blockquote::before {
  content: '"';
  font-size: 3em;
}

.icon::after {
  content: url(icon.png);
  margin-left: 0.5em;
}`}</code>
          </pre>

          <h3>::first-letter</h3>
          <p>Style the first letter of a text block.</p>
          <pre>
            <code>{`p::first-letter {
  font-size: 3em;
  float: left;
  line-height: 1;
}`}</code>
          </pre>

          <h3>::first-line</h3>
          <p>Style the first line of text.</p>
          <pre>
            <code>{`p::first-line {
  font-weight: bold;
  color: navy;
}`}</code>
          </pre>

          <h3>::selection</h3>
          <p>Style text when selected by user.</p>
          <pre>
            <code>{`::selection {
  background: yellow;
  color: black;
}`}</code>
          </pre>
        </section>

        <section id="specificity">
          <h2>Specificity</h2>

          <p>
            When multiple rules target the same element, specificity determines
            which wins.
          </p>

          <h3>Calculation (a, b, c, d)</h3>
          <ul>
            <li>
              <strong>a:</strong> Inline styles (1,0,0,0)
            </li>
            <li>
              <strong>b:</strong> IDs (0,1,0,0)
            </li>
            <li>
              <strong>c:</strong> Classes, attributes, pseudo-classes (0,0,1,0)
            </li>
            <li>
              <strong>d:</strong> Elements, pseudo-elements (0,0,0,1)
            </li>
          </ul>

          <h3>Examples</h3>
          <pre>
            <code>{`/* (0,0,0,1) */
p { color: blue; }

/* (0,0,1,0) */
.text { color: green; }

/* (0,0,1,1) */
p.text { color: purple; }

/* (0,1,0,0) */
#special { color: red; }

/* (0,1,1,1) */
div#special.text { color: orange; }`}</code>
          </pre>

          <h3>Rules</h3>
          <ol>
            <li>Higher specificity wins</li>
            <li>If equal specificity, last rule wins</li>
            <li>Inline styles beat everything (except !important)</li>
            <li>!important overrides everything (avoid when possible)</li>
          </ol>

          <div className="warning-box">
            <h4>⚠️ Best Practices</h4>
            <ul>
              <li>Keep specificity low for maintainability</li>
              <li>Prefer classes over IDs for styling</li>
              <li>Avoid !important unless absolutely necessary</li>
              <li>Use specificity intentionally, not accidentally</li>
            </ul>
          </div>
        </section>

        <section id="cascade">
          <h2>The Cascade</h2>
          <p>
            CSS stands for "Cascading" Style Sheets. The cascade determines
            which rules apply when multiple rules could match:
          </p>

          <ol>
            <li>
              <strong>Origin:</strong> User agent → User → Author styles
            </li>
            <li>
              <strong>Importance:</strong> Normal → !important
            </li>
            <li>
              <strong>Specificity:</strong> Higher specificity wins
            </li>
            <li>
              <strong>Order:</strong> Later rules override earlier ones
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
