// pages/About.jsx
function About() {
  return (
    <>
      <h1 className="mb-4">Hobbies & Interests</h1>
      <p className="mb-4">
        When I'm not working, I'm usually doing one of the following:
      </p>
      <ul className="list-disc pl-4 mb-4 space-y-2">
        <li>
          <span className="font-bold text-black">Food</span> - I'm a big foodie,
          I love sharing food with the people I love.
        </li>
        <li>
          <span className="font-bold text-black">Health</span> - I love to do
          some type of activity/sports at the end of each day to relax my mind.
          Recently, that sport is badminton.
        </li>
        <li>
          <span className="font-bold text-black">Travel</span> - I have not been
          to alot of countries, but that is something that I look forward to in
          the future.
        </li>
        <li>
          <span className="font-bold text-black">Tech and Learning</span> - I'd
          love to keep up with new technologies by exploring different tech
          stacks and also the latest hardware.
        </li>
      </ul>
      <h1 className="mb-4">Work</h1>
      <p className="mb-4">
        Check out my LinkedIn over{" "}
        <a
          className="underline"
          target="_blank"
          href="https://www.linkedin.com/in/yen-siang-leow-974427247/"
        >
          Here
        </a>{" "}
      </p>
      <p className="mb-4">
        As a software engineer/full stack web developer, I've worked all over
        the stack but lean more towards frontend, but have also digged deep into
        the world of backend API. Recently, I'm more involved on the CI/CD Side
        of things.
      </p>
      <p className="mb-4">
        Here are the a few of the technologies that I've personally used to
        build and ship product both within my company and also personal projects
        or freelance projects.
      </p>
      <ul className="list-disc pl-4 mb-4 space-y-2">
        <li>
          <span className="font-bold text-black">Frontend</span> - React, Vue
        </li>
        <li>
          <span className="font-bold text-black">Backend</span> -
          Node/ExpressJs, Django (DRF)
        </li>
        <li>
          <span className="font-bold text-black">CI/CD</span> - Docker, Jenkins
        </li>
        <li>
          <span className="font-bold text-black">OS / Server</span> - Primarily
          use Linux to serve my websites.
        </li>
        <li>
          <span className="font-bold text-black">Web Scraping</span> - Python
          Selenium
        </li>
      </ul>
    </>
  );
}

export default About;
