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
      <ul className="bg-white p-3 my-2 space-y-3 h-72 overflow-y-scroll absolute top-20 w-full shadow-2xl rounded-md cursor-pointer z-10">
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "GitHub",
              logo: githubLogo,
              bgColor: "bg-black",
            })
          }
        >
          <Image src={githubLogo} alt="" />
          Github
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "YouTube",
              logo: youtube,
              bgColor: "bg-[rgb(238,58,58)]",
            })
          }
        >
          <Image src={youtube} alt="" />
          YouTube
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Twitter",
              logo: twitter,
              bgColor: "bg-[rgb(68,183,233)]",
            })
          }
        >
          <Image src={twitter} alt="" />
          Twitter
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "LinkedIn",
              logo: linkedin,
              bgColor: "bg-[rgb(46,105,255)]",
            })
          }
        >
          <Image src={linkedin} alt="" />
          LinkedIn
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Facebook",
              logo: facebook,
              bgColor: "bg-[rgb(36,65,174)]",
            })
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
              bgColor: "bg-white text-black",
            })
          }
        >
          <Image src={frontendmentor} alt="" />
          Frontend Mentor
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Twitch",
              logo: twitch,
              bgColor: "bg-[rgb(238,63,200)]",
            })
          }
        >
          <Image src={twitch} alt="" />
          twitch
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Devto",
              logo: devto,
              bgColor: "bg-[rgb(51,51,51)]",
            })
          }
        >
          <Image src={devto} alt="" />
          Devto
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Codewars",
              logo: codewars,
              bgColor: "bg-[rgb(137,26,80)]",
            })
          }
        >
          <Image src={codewars} alt="" />
          Codewars
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Codepen",
              logo: codepen,
              bgColor: "bg-[rgb(26,137,72)]",
            })
          }
        >
          <Image src={codepen} alt="" />
          Codepen
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "freeCodeCamp",
              logo: freecodecamp,
              bgColor: "bg-[rgb(48,34,103)]",
            })
          }
        >
          <Image src={freecodecamp} alt="" />
          freeCodeCamp
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "GitLab",
              logo: gitlab,
              bgColor: "bg-[rgb(235,72,36)]",
            })
          }
        >
          <Image src={gitlab} alt="" />
          GitLab
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Hashnode",
              logo: hashnode,
              bgColor: "bg-[rgb(2,48,212)]",
            })
          }
        >
          <Image src={hashnode} alt="" />
          Hashnode
        </li>
        <hr />
        <li
          className="flex items-center gap-4 text-xl hover:text-purple"
          onClick={() =>
            handleOptionClick({
              label: "Stack Overflow",
              logo: stackoverflow,
              bgColor: "bg-[rgb(235,113,0)]",
            })
          }
        >
          <Image src={stackoverflow} alt="" />
          Stack Overflow
        </li>
      </ul>
    </>
  );
}
