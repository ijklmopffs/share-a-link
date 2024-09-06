import Image from "next/image";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import arrowRight from "@/public/assets/images/icon-arrow-right.svg";

interface LinkData {
  inputValue: string;
  optionImg: {
    src: string;
  };
  selectedOption: string;
  bgColor: string;
}

interface UserData {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  backgroundImage?: string;
  links?: LinkData[];
}

export default async function Preview() {
  const querySnapshot = await getDocs(collection(db, "user"));

  const postList = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as UserData),
    id: doc.id,
  }));

  return (
    <main>
      <header className="md:bg-purple h-96 w-full rounded-bl-[5rem] rounded-br-[5rem] p-6">
        <div className="md:bg-white rounded-md p-4 flex items-center justify-between">
          <Link href="/home">
            <button className="border-2 border-purple rounded-md px-6 py-2 text-purple font-semibold">
              Back to Editor
            </button>
          </Link>
          {/* <button className="border-2 border-purple rounded-md px-6 py-2 bg-purple text-white font-semibold">
            Share Link
          </button> */}
        </div>
      </header>

      <section className="p-6">
        {postList.length > 0 ? (
          <ul className="space-y-4 flex items-center justify-center">
            {postList.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded-xl shadow-md w-96 space-y-3 text-center -m-96"
              >
                {item.backgroundImage && (
                  <Image
                    src={item.backgroundImage}
                    alt="Background Image"
                    width={104}
                    height={104}
                    className="rounded-full mx-auto border-4 border-purple"
                  />
                )}

                <p className="text-darkGrey font-bold text-3xl">
                  {item.firstName} {item.lastName}
                </p>
                <p className="text-grey">{item.email}</p>
                {item.links?.map((link, index) => (
                  <Link key={index} href={link.inputValue}>
                    <div
                      className={`${link.bgColor} my-3 rounded-lg text-xs w-[230px] mx-auto h-12 px-1 flex items-center justify-between`}
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={link.optionImg.src}
                          alt=""
                          width={16}
                          height={16}
                        />
                        <p className="text-white">{link.selectedOption}</p>
                      </div>
                      <Image src={arrowRight} alt="" />
                    </div>
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </section>
    </main>
  );
}
