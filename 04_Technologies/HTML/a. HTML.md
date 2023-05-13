```html
<!DOCTYPE html>
<html lang="en">
  <!-- Metadata about webpage -->

  <head>
    <!-- Metadata Tags -->
    <meta charset="UTF-8" />
    <meta name="author" content="Hritik Agarwal" />
    <meta name="description" content="HTML notes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Webpage Favicon -->
    <link rel="icon" href="facicon.png" type="image/x-icon" />

    <!-- Webpage Title -->
    <title>HTML Notes</title>

    <!-- StyleSheet -->
    <link rel="stylesheet" href="style.css" />
  </head>

  <!-- The content on Webpage -->

  <body>
    <!-- Divs and Spans -->
    <div>I am div</div>
    <span>I am span</span>

    <!-- Headings -->
    <h1>Heading - 1</h1>
    <h2>Heading - 2</h2>
    <h3>Heading - 3</h3>
    <h4>Heading - 4</h4>
    <h5>Heading - 5</h5>
    <h6>Heading - 6</h6>

    <!-- Paragraph -->
    <p>This is a paragraph</p>

    <!-- Horizontal Rule -->
    <hr />

    <!-- Line Break -->
    <p>This is <br />iine break</p>

    <!-- Typography -->
    <p
      >This is <strong>bold</strong> text, this is <em>italic text</em>, this is
      <u>underline text</u> and this is <mark>highlighted text.</mark>
    </p>
    <abbr title="Gross Domestic Project">GDP</abbr>
    <address>
      New Agrawal Medical Store <br />
      Jiyanpur, 276140 <br />
      Azamgarh, Uttar Pradesh
    </address>

    <!-- HTML entities -->
    <p>&lt;&lt;&lt; &copy; Hritik &gt;&gt;&gt;</p>

    <!-- Lists in HTML -->
    <p>Unordered List</p>
    <ul>
      <li>apple</li>
      <li>banana</li>
      <li>orange</li>
    </ul>

    <p>Ordered List</p>
    <ol start="3" reversed>
      <li>apple</li>
      <li value="5">banana</li>
      <li>orange</li>
    </ol>

    <p>Description List</p>
    <dl>
      <dt>apple</dt>
      <dd>apple is a red color fruit sweet in taste</dd>
      <dt>banana</dt>
      <dd>banana is a yellow color fruit with light sweet taste</dd>
      <dt>orange</dt>
      <dd>orange is a orange color fruit with sour taste</dd>
    </dl>

    <!-- Links in HTML -->
    <a href="http://google.com">Go to Google</a>
    <a href="http://google.com" target="_blank">Go to Google in New Tab</a>
    <a href="about.html" target="_blank">Go to About Page</a>
    <a href="#headings">Go to Headings Topic</a>
    <a href="mailto:hello@gmail.com">Email Me</a>
    <a href="tel:+919999999999">Call Me</a>

    <!-- Images -->
    <figure>
      <img src="image-url" height="300" alt="Goku" loading="lazy" />
      <figcaption>Goku</figcaption>
    </figure>

    <!-- Toggle List -->
    <details>
      <summary>What is 2+2?</summary>
      <p>It is 4.</p>
    </details>

    <!-- Extra Attributes -->
    <div data-tooltip="This is extra attribute"> Hello there </div>

    <!-- Semantic HTML -->
    <header>
      <h1>Heading</h1>
      <nav aria-label="primary navigation">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>

    <aside> This is aside (sidebar) </aside>

    <main>
      <section>
        <article>
          <p>This is article 1 in section 1</p>
        </article>
        <article>
          <p>This is article 2 in section 1</p>
        </article>
      </section>
      <section>
        <article>
          <p>This is article 1 in section 2</p>
        </article>
        <article>
          <p>This is article 2 in section 2</p>
        </article>
      </section>
    </main>

    <footer>
      <p>This is footer</p>
    </footer>

    <!-- Tables -->
    <table>
      <caption>I am a caption!</caption>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th scope="col">Key - Header</th>
          <th scope="col">Value - Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Row1</th>
          <td>Name</td>
          <td>Hritik Agarwal</td>
        </tr>
        <tr>
          <th scope="row">Row2</th>
          <td>Age</td>
          <td>22 years</td>
        </tr>
        <tr>
          <th scope="row">Row3</th>
          <td>Place of Birth</td>
          <td>Jiyanpur</td>
        </tr>
        <tr>
          <th scope="row">Row4</th>
          <td colspan="2">This is an amazing table!</td>
        </tr>
        <tr>
          <th scope="row">Row5</th>
          <td rowspan="2">What Next?</td>
          <td>Not</td>
        </tr>
        <tr>
          <th scope="row">Row6</th>
          <td>Much</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">This is the Footer. See you next time.</td>
        </tr>
      </tfoot>
    </table>

    <!-- Forms and Input -->
    <!-- 
      Input Types - text, number, email, password, tel, checkbox, textarea, select-option, input-datalist, radio
     -->
    <form>
      <fieldset>
        <legend>Personal Info</legend>
        <p>
          <label for="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            autocomplete="on"
            required
            autofocus
          />
        </p>
        <p>
          <label for="password">Password: </label>
          <input type="password" name="password" id="password" required />
        </p>
        <p>
          <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="on"
            required
            placeholder="happy@gmail.com"
          />
        </p>
        <p>
          <label for="phone">Phone: </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern="[0-9]{10}"
            placeholder="9823427173"
          />
        </p>
        <p>
          <label for="age">Age: </label>
          <input
            type="number"
            name="age"
            id="age"
            min="1"
            max="100"
            placeholder="22"
            step="1"
          />
        </p>
        <p>
          <label for="city">City: </label>
          <select name="city" id="city" multiple size="5">
            <optgroup label="North India">
              <option value="azamgarh">Azamgarh</option>
              <option value="varanasi">Varanasi</option>
              <option value="kanpur">Kanpur</option>
              <option value="lucknow">Lucknow</option>
            </optgroup>
            <optgroup label="South India">
              <option value="mumbai">Mumbai</option>
              <option value="goa">Goa</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="kochi">Kochi</option>
            </optgroup>
          </select>
        </p>
        <p>
          <label for="city2">City: </label>
          <input type="text" name="city2" id="city2" list="city-list" />
          <datalist id="city-list">
            <option value="azamgarh"> </option>
            <option value="varanasi"> </option>
            <option value="kanpur"> </option>
            <option value="lucknow"> </option>
          </datalist>
        </p>
      </fieldset>
      <fieldset>
        <legend>What is your favourite food?</legend>
        <p>
          <input type="radio" name="food" id="pavBhaji" value="pavBhaji" />
          <label for="pavBhaji">Pav Bhaji</label>
        </p>
        <p>
          <input type="radio" name="food" id="pizza" value="pizza" />
          <label for="pizza">Pizza</label>
        </p>
        <p>
          <input type="radio" name="food" id="pasta" value="pasta" />
          <label for="pasta">Pasta</label>
        </p>
      </fieldset>
      <fieldset>
        <legend>Which are your favourite pets?</legend>
        <p>
          <input type="checkbox" name="animal" id="dog" value="dog" />
          <label for="dog">Dogs</label>
        </p>
        <p>
          <input type="checkbox" name="animal" id="cat" value="cat" />
          <label for="cat">Cats</label>
        </p>
        <p>
          <input type="checkbox" name="animal" id="bird" value="bird" />
          <label for="bird">Birds</label>
        </p>
      </fieldset>
      <fieldset>
        <legend>Send me a note</legend>
        <label for="message">Your Message</label> <br /><br />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Type your message here!"
        ></textarea>
      </fieldset>
      <button
        type="submit"
        formaction="https://httpbin.org/get"
        formmethod="get"
      >
        Submit
      </button>
      <button
        type="submit"
        formaction="https://httpbin.org/post"
        formmethod="post"
      >
        Post
      </button>
      <button type="reset"> Reset Values </button>
    </form>

    <p id="bottomGap"></p>
  </body>
</html>
```
