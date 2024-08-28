import { useState } from "react";
import Image from "next/image";
import { db } from "@/app/lib/firebase";
// import { collection } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import iconDrag from "@/public/assets/images/icon-drag-and-drop.svg";
import githubLogo from "@/public/assets/images/icon-github.svg";
import arrowDown from "@/public/assets/images/icon-chevron-down.svg";
import LinkDropdown from "./LinkDropdown";

export default function LinkInput({ count, removeLinkInput }: any) {
  const [dropdown, setDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    logo: string;
  } | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  const handleOptionClick = (option: { label: string; logo: string }) => {
    setSelectedOption(option);
    setDropdown(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const saveToFirestore = (e: any) => {
    e.preventDefault();

    addDoc(collection(db, "users"), {
      selectedOption: selectedOption?.label,
      logo: selectedOption?.logo,
      inputValue: inputValue,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <main className="bg-lightGrey rounded-md p-6 my-5">
      <div className="flex items-center justify-between p-2">
        <p className="flex items-center gap-2 text-grey font-bold">
          <Image src={iconDrag} alt="" /> Link #{count}
        </p>
        <button className="text-grey hover:underline" onClick={removeLinkInput}>
          Remove
        </button>
      </div>
      <form>
        <div className="flex flex-col my-5 relative">
          <label htmlFor="platform">Platform</label>
          <div>
            <button
              onClick={handleDropdown}
              className="flex items-center justify-between bg-white border-2 border-borders w-full rounded-lg p-3"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={selectedOption ? selectedOption.logo : githubLogo}
                  alt={selectedOption ? selectedOption.label : "Github"}
                />
                <p className="text-xl font-normal">
                  {selectedOption ? selectedOption.label : "Github"}
                </p>
              </div>
              <Image src={arrowDown} alt="" />
            </button>
          </div>
          {dropdown && (
            <LinkDropdown
              handleOptionClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          )}
        </div>

        <div>
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            className="w-full rounded-lg bg-white border-2 border-border focus:outline-none focus:border-purple p-2 text-darkGrey font-normal text-xl"
            placeholder="e.g. https://www.github.com/johnappleseed"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={saveToFirestore}>save</button>
      </form>
    </main>
  );
}
