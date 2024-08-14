import { CiLocationOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VscFlame } from "react-icons/vsc";
import { LuCalendarCheck } from "react-icons/lu";
import { TbCalendar } from "react-icons/tb";

interface AboutProps {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}
const IsoToLocalDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `${formattedDate} at ${formattedTime}`
};

const Sidebar: React.FC<{ about: AboutProps }> = ({ about }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-border-rad shadow-md text-custom-color">
      <section className="">
        <h2 className="font-black">About</h2>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <IoMdAddCircleOutline />
            </div>
            <div className="flex flex-col justify-start">
              Posted On:
              <span>
                <strong>{IsoToLocalDate(about.posted_on)}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <VscFlame />
            </div>
            <div className="flex flex-col justify-start">
              Deadline:
              <span>
                <strong>{IsoToLocalDate(about.deadline)}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <CiLocationOn />
            </div>
            <div className="flex flex-col justify-start">
              Location:
              <span>
                <strong>{about.location}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <TbCalendar />
            </div>
            <div className="flex flex-col justify-start">
              Start Date:
              <span>
                <strong>{IsoToLocalDate(about.start_date)}</strong>
              </span>
            </div>
          </li>
          <li className="flex items-center mt-2">
            <div className="mr-2 p-2 border rounded-full text-emerald-400">
              <LuCalendarCheck />
            </div>
            <div className="flex flex-col justify-start">
              End Date:
              <span>
                <strong>{IsoToLocalDate(about.end_date)}</strong>
              </span>
            </div>
          </li>
        </ul>
      </section>
      <div className="w-full h-px my-4 bg-slate-300"></div>
      <section className="">
        <h2 className="font-black">Categories</h2>
        <div className="mt-2 space-x-2">
          <span className="inline-block text-center bg-yellow-200 m-2 py-2 px-3 rounded-full">
            {about.categories[0]}
          </span>
          <span className="inline-block text-center bg-green-200 m-2 py-2 px-3 rounded-full">
            {about.categories[1]}
          </span>
        </div>
      </section>
      <div className="w-full h-px my-4 bg-slate-300"></div>
      <section>
        <h2 className="font-black">Required Skills</h2>
        <div className="mt-2 space-y-2">
          {about.required_skills.map((data, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 px-2 py-1 mx-2 rounded-full"
            >
              {data}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
