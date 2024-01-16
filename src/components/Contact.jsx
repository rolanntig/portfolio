import React from "react";

const Contact = () => {
  return (
    <div className="flex bg-orange-400">
      <div className="flex flex-row items-center p-4">
        <a href="https://www.github.com/rolanntig">
          <img src={"icons8-github-50.png"} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/rolan-nanvazadeh-43b2922a4">
          <img src={"icons8-linkedin-48.png"} alt="linkedin" />
        </a>
        <img src={"email.png"} alt="" className="w-7 mx-2" />
        <a href="mailto:rolan.nanvazadeh@elev.ga.ntig.se" className="text-white underline">
          rolan.nanvazadeh@elev.ga.ntig.se
        </a>
      </div>
    </div>
  );
};

export default Contact;
