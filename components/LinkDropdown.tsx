import Image from "next/image";
import githubLogo from "@/public/assets/images/icon-github.svg";
import youtube from "@/public/assets/images/icon-youtube.svg";
import twitter from "@/public/assets/images/icon-twitter.svg";
import linkedin from "@/public/assets/images/icon-linkedin.svg";
import facebook from "@/public/assets/images/icon-facebook.svg";
import frontendmentor from "@/public/assets/images/icon-frontend-mentor.svg";
import twitch from "@/public/assets/images/icon-twitch.svg";
import devto from "@/public/assets/images/icon-devto.svg";
import codewars from "@/public/assets/images/icon-codewars.svg";
import codepen from "@/public/assets/images/icon-codepen.svg";
import freecodecamp from "@/public/assets/images/icon-freecodecamp.svg";
import gitlab from "@/public/assets/images/icon-gitlab.svg";
import hashnode from "@/public/assets/images/icon-hashnode.svg";
import stackoverflow from "@/public/assets/images/icon-stack-overflow.svg";

export default function LinkDropdown({ handleOptionClick }: any) {
  return (
    <>
      <ul className="bg-white p-3 my-2 space-y-3 h-72 overflow-y-scroll absolute top-20 w-full shadow-2xl rounded-md cursor-pointer">
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({ label: "GitHub", logo: githubLogo })
          }
        >
          <Image src={githubLogo} alt="" />
          Github
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() => handleOptionClick({ label: "YouTube", logo: youtube })}
        >
          <Image src={youtube} alt="" />
          YouTube
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() => handleOptionClick({ label: "Twitter", logo: twitter })}
        >
          <Image src={twitter} alt="" />
          Twitter
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({ label: "LinkedIn", logo: linkedin })
          }
        >
          <Image src={linkedin} alt="" />
          LinkedIn
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({ label: "Facebook", logo: facebook })
          }
        >
          <Image src={facebook} alt="" />
          Facebook
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Frontend Mentor",
              logo: frontendmentor,
            })
          }
        >
          <Image src={frontendmentor} alt="" />
          Frontend Mentor
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() => handleOptionClick({ label: "Twitch", logo: twitch })}
        >
          <Image src={twitch} alt="" />
          twitch
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() => handleOptionClick({ label: "Devto", logo: devto })}
        >
          <Image src={devto} alt="" />
          Devto
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({ label: "Codewars", logo: codewars })
          }
        >
          <Image src={codewars} alt="" />
          Codewars
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() => handleOptionClick({ label: "Codepen", logo: codepen })}
        >
          <Image src={codepen} alt="" />
          Codepen
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({ label: "freeCodeCamp", logo: freecodecamp })
          }
        >
          <Image src={freecodecamp} alt="" />
          freeCodeCamp
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() => handleOptionClick({ label: "GitLab", logo: gitlab })}
        >
          <Image src={gitlab} alt="" />
          GitLab
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({ label: "Hashnode", logo: hashnode })
          }
        >
          <Image src={hashnode} alt="" />
          Hashnode
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({ label: "Stack Overflow", logo: stackoverflow })
          }
        >
          <Image src={stackoverflow} alt="" />
          Stack Overflow
        </li>
      </ul>
    </>
  );
}
