import { useState } from "react";
import Image from "next/image";
import { db } from "@/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import phoneIllustrator from "@/public/assets/images/illustration-phone-mockup.svg";
import phoneIllustrator2 from "@/public/assets/images/illustration-empty.svg";
import uploadIcon from "@/public/assets/images/icon-upload-image.svg";
import githubLogo from "@/public/assets/images/icon-github.svg";
import githubWhite from "@/public/assets/images/icon-github-white.svg";
import arrowRight from "@/public/assets/images/icon-arrow-right.svg";
import LinkInput from "./LinkInput";

export default function LinksComponent({ navState }: any) {
  const [linkInputs, setLinkInputs] = useState<
    {
      id: number;
      selectedOption: {
        label: string;
        logo: string;
        optionImg: string;
        bgColor?: string;
      };
      inputValue: string;
    }[]
  >([]);
  const [dropdown, setDropdown] = useState<{ [key: number]: boolean }>({});
  const [inputValue, setInputValue] = useState("");

  const handleDropdown = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setDropdown((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOptionClick = (
    id: number,
    option: { label: string; logo: string; bgColor: string; optionImg: string }
  ) => {
    setLinkInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, selectedOption: option } : input
      )
    );
    setDropdown((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setLinkInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, inputValue: value } : input
      )
    );
  };

  const handleAddLinkInput = () => {
    const newId = Date.now();
    setLinkInputs((prev) => [
      ...prev,
      {
        id: newId,
        selectedOption: {
          label: "GitHub",
          logo: githubLogo,
          bgColor: "bg-black",
          optionImg: githubWhite,
        },
        inputValue: "",
      },
    ]);
    setDropdown((prev) => ({ ...prev, [newId]: false }));
  };

  const removeLinkInput = (id: number) => {
    setLinkInputs((prev) => prev.filter((input) => input.id !== id));
    setDropdown((prev) => {
      const newDropdowns = { ...prev };
      delete newDropdowns[id];
      return newDropdowns;
    });
  };

  const saveToFirestore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    linkInputs.forEach((input) => {
      addDoc(collection(db, "users"), {
        selectedOption: input.selectedOption.label,
        logo: input.selectedOption.logo,
        inputValue: input.inputValue,
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    });
  };

  return (
    <main className="mt-6 flex justify-between gap-10">
      <div className="bg-white rounded-md p-6 w-[45%] hidden lg:block relative">
        <Image src={phoneIllustrator} alt="" className="mx-auto" />
        {linkInputs.length > 0 && (
          <div className="absolute top-[25rem] left-[21rem] space-y-10">
            {linkInputs.map((input, index) => (
              <div
                key={index}
                className={`${input.selectedOption.bgColor} text-white text-xs w-[230px] h-12 px-1 flex justify-between rounded-lg`}
              >
                <div className="flex items-center gap-2">
                  <Image src={input.selectedOption.optionImg} alt="" />
                  <p>{input.selectedOption.label}</p>
                </div>
                <Image src={arrowRight} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-white rounded-md p-6 w-full lg:w-[55%]">
        {navState === "links" && (
          <>
            <h1 className="text-darkGrey text-4xl font-bold">
              Customize your links
            </h1>
            <p className="text-grey my-5">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button
              onClick={handleAddLinkInput}
              className="w-full border-2 border-purple rounded-md py-2 text-purple font-semibold hover:bg-lightPurple"
            >
              + Add new link
            </button>
            {linkInputs.length === 0 ? (
              <div className="bg-lightGrey my-10 rounded-md p-8 text-center">
                <Image src={phoneIllustrator2} alt="" className="mx-auto" />
                <h2 className="text-4xl text-darkGrey font-bold my-10">
                  Let’s get you started
                </h2>
                <p className="text-grey w-auto md:w-96 mx-auto my-10">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {linkInputs.map((input) => (
                  <LinkInput
                    key={input.id}
                    id={input.id}
                    selectedOption={input.selectedOption}
                    dropdown={dropdown[input.id]}
                    handleDropdown={(e: React.MouseEvent<HTMLButtonElement>) =>
                      handleDropdown(input.id, e)
                    }
                    handleOptionClick={(option: any) =>
                      handleOptionClick(input.id, option)
                    }
                    inputValue={input.inputValue}
                    handleInputChange={(
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => handleInputChange(input.id, e)}
                    removeLinkInput={removeLinkInput}
                  />
                ))}
              </div>
            )}

            <hr className="my-5" />
            <div className="flex justify-end">
              {/* {linkInputs.map((input) => ( */}
              <button
                // key={input.id}
                onClick={saveToFirestore}
                className={`${
                  inputValue === "" ? "bg-lightPurple" : "bg-purple"
                } mt-5 flex text-white rounded-md border-2 py-2 px-3 hover:bg-purpleHover`}
              >
                Save
              </button>
              {/* ))} */}
            </div>
          </>
        )}

        {navState === "profile" && (
          <>
            <h1 className="text-darkGrey text-4xl font-bold">
              Profile Details
            </h1>
            <p className="text-grey my-5">
              Add your details to create a personal touch to your profile.
            </p>

            <div className="bg-lightGrey my-10 rounded-md p-8 text-center flex flex-col md:flex-row md:items-center justify-between">
              <h3 className="text-grey my-5 md:my-0 text-start md:text-center">
                Profile Picture
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-20">
                <div className="bg-lightPurple flex flex-col items-center py-10 px-5">
                  <Image src={uploadIcon} alt="" />
                  <button>Upload Image</button>
                </div>
                <p className="text-start w-[17rem] text-grey">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
            </div>

            <div className="bg-lightGrey my-10 rounded-md p-8 text-center">
              <form action="" className="space-y-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <label
                    htmlFor="firstName"
                    className="text-grey text-start md:text-center"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="e.g. John"
                    className="border-2 border-borders bg-white rounded-md w-full md:w-[30rem] p-2"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <label
                    htmlFor="lastName"
                    className="text-grey text-start md:text-center"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="e.g. Appleseed"
                    className="border-2 border-borders bg-white rounded-md w-full md:w-[30rem] p-2"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <label
                    htmlFor="email"
                    className="text-grey text-start md:text-center"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="e.g. email@example.com"
                    className="border-2 border-borders bg-white rounded-md w-full md:w-[30rem] p-2"
                  />
                </div>
              </form>
            </div>

            <hr className="my-5" />
            <div className="flex justify-end">
              <button
                className={`${
                  inputValue === "" ? "bg-lightPurple" : "bg-purple"
                } mt-5 flex text-white rounded-md border-2 py-2 px-3 hover:bg-purpleHover`}
              >
                lmao
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
