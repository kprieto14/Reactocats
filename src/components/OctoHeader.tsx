import React from 'react'

export function OctoHeader() {
   return ( <header className="header-container">
      <nav>
        <ul className="header-container">
          <li>
            <a href="#"
              ><img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="45"
                height="45"
                alt="GithubLogo"
            /></a>
          </li>
          <li><a href="index.html">Octodex</a></li>
          <li><a href="#" className="grey">Home</a></li>
          <li><a href="https://octodex.github.com/faq/">FAQ</a></li>
          <li><a href="#">RSS</a></li>
        </ul>
      </nav>

      <nav>
        <ul className="header-container">
          <li>
            <a href="https://twitter.com/githubdesign" className='hidden'>Follow us on Twitter</a>
          </li>
          <li>
            <a href="https://github.com/" className='hidden'>Back to GitHub.com</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}