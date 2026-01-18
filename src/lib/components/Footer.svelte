<script>
  import { base } from '$app/paths';
  import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-svelte';
</script>

<footer>
  <!-- Top Section: Logo + Contact Info -->
  <div class="footer-top">
    <div class="container">
      <div class="footer-logo">
        <a href="https://www.journalism.cuny.edu/">
          <img src="{base}/CraigNewmarkGraduateSchoolofJournalism_DarkGray.svg" alt="Craig Newmark Graduate School of Journalism" />
        </a>
      </div>

      <div class="footer-info">
        <address>
          219 W. 40th Street<br />
          New York, NY 10018
        </address>
        <div class="contact">
          <span>T. (646) 758-7700</span>
          <span>E. admissions@journalism.cuny.edu</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Middle Section: CUNY Logo + Nav -->
  <div class="footer-middle">
    <div class="container">
      <div class="cuny-logo">
        <img src="{base}/CUNY-Cube-DarkGray-Logo.svg" alt="The City University of New York" />
        <a href="https://www.journalism.cuny.edu/title-ix/" class="title-ix-link">
          Enough is Enough: Combating Sexual Misconduct
        </a>
      </div>

      <nav class="footer-nav" aria-label="Footer Navigation">
        <ul>
          <li><a href="https://www.journalism.cuny.edu/campus-hours/">Campus Hours</a></li>
          <li><a href="https://www.journalism.cuny.edu/public-safety-department/">Public Safety</a></li>
          <li><a href="https://www.journalism.cuny.edu/contact-newmark-j-school/">Contact Us</a></li>
          <li><a href="https://www.journalism.cuny.edu/about-us/facilities-rentals/">Facilities Rentals</a></li>
          <li><a href="https://www.journalism.cuny.edu/give-to-the-j-school/" target="_blank" rel="noopener">Give to the J-School</a></li>
          <li><a href="https://cuny.jobs/campus/school-of-journalism/jobs/">Job Opportunities</a></li>
          <li><a href="https://www.journalism.cuny.edu/map-and-directions/">Map and Directions</a></li>
          <li><a href="https://www.journalism.cuny.edu/privacy-policy/">Privacy Policy</a></li>
          <li><a href="https://www.journalism.cuny.edu/text-version/">Text Version</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- Bottom Section: Copyright + Social -->
  <div class="footer-bottom">
    <div class="container">
      <div class="copyright">
        Copyright © 2026 Newmark J-School
      </div>

      <div class="social">
        <a href="https://www.facebook.com/newmarkjschool" title="Follow us on Facebook" target="_blank" rel="noopener">
          <Facebook size={24} />
        </a>
        <a href="http://twitter.com/newmarkjschool" title="Follow us on Twitter" target="_blank" rel="noopener">
          <Twitter size={24} />
        </a>
        <a href="https://www.youtube.com/newmarkjschool" title="Follow us on YouTube" target="_blank" rel="noopener">
          <Youtube size={24} />
        </a>
        <a href="https://www.linkedin.com/school/newmark-graduate-school-of-journalism-at-cuny/" title="Follow us on LinkedIn" target="_blank" rel="noopener">
          <Linkedin size={24} />
        </a>
        <a href="https://instagram.com/newmarkjschool/" title="Follow us on Instagram" target="_blank" rel="noopener">
          <Instagram size={24} />
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #313131;
    color: #fff;
    font-size: 16px;
    font-family: var(--font-family);
  }

  .container {
    max-width: 1290px;
    margin: 0 auto;
    padding: 0 30px;
    width: 100%;
  }

  address {
    font-style: normal;
    line-height: 2;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover,
  a:focus {
    color: #fe8807;
    text-decoration: none;
  }

  /* Top Section */
  .footer-top {
    padding-top: 50px;
    padding-bottom: 0;
  }

  .footer-top .container {
    display: block;
  }

  .footer-logo img {
    max-width: 100%;
    height: auto;
  }

  .footer-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }

  .footer-info address {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .contact {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .contact span {
    line-height: 2;
  }

  /* Middle Section */
  .footer-middle {
    padding: 0 0 25px;
  }

  .footer-middle .container {
    display: flex;
    flex-direction: column;
  }

  .cuny-logo {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    order: 2;
  }

  .cuny-logo img {
    width: 120px;
    height: auto;
  }

  .title-ix-link {
    display: inline-block;
    padding: 10px 15px;
    background: #000;
    color: #fff;
    font-size: 16px;
    width: fit-content;
  }

  .title-ix-link:hover {
    background: #222;
    color: #fff;
  }

  .footer-nav {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex: 1;
    order: 1;
    margin-bottom: 25px;
  }

  .footer-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .footer-nav ul li {
    font-size: 1rem;
    line-height: 2;
    margin-right: 15px;
  }

  .footer-nav ul li:last-child {
    margin-right: 0;
  }

  .footer-nav a {
    font-size: 1rem;
    color: #fff;
  }

  .footer-nav a:hover,
  .footer-nav a:focus {
    color: #fe8807;
  }

  /* Bottom Section */
  .footer-bottom {
    border-top: 1px solid #414141;
    padding: 30px 0;
  }

  .footer-bottom .container {
    display: flex;
    flex-direction: column;
  }

  .copyright {
    font-size: 12px;
    color: #adadad;
    order: 2;
  }

  .social {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex: 1;
    gap: 24px;
    margin-bottom: 30px;
    order: 1;
  }

  .social a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  .social a:hover {
    color: #fe8807;
  }

  /* Desktop Responsive - 960px+ */
  @media (min-width: 960px) {
    .footer-top {
      padding-bottom: 25px;
    }

    .footer-top .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .footer-logo {
      flex: 1;
    }

    .footer-info {
      flex: 1;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
    }

    .footer-info address {
      margin: 0;
      padding: 0 20px;
    }

    .contact {
      margin-bottom: 0;
    }

    .footer-middle {
      padding-top: 25px;
    }

    .footer-middle .container {
      flex-direction: row;
    }

    .cuny-logo {
      order: 1;
    }

    .cuny-logo img {
      width: 150px;
    }

    .footer-nav {
      justify-content: flex-end;
      order: 2;
      margin-bottom: 0;
    }

    .footer-nav ul {
      flex-direction: row;
      flex-wrap: wrap;
      width: auto;
    }

    .footer-bottom .container {
      flex-direction: row;
    }

    .copyright {
      font-size: 16px;
      order: 1;
    }

    .social {
      justify-content: flex-end;
      margin-bottom: 0;
      order: 2;
    }
  }
</style>