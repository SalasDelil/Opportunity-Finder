import { CiCircleCheck, CiLocationOn } from "react-icons/ci";

interface DescriptionTypes {
  title: string;
  description: string;
  responsibilities: string;
  candidate: string;
  whenWhere: string;
}

const JobDescription = (description: DescriptionTypes) => {
  return (
    <div className="max-w-4xl mx-auto py-4 text-custom-color">
      <h1 className="text-2xl font-black">{description.title}</h1>

      <section className="mt-6">
        <h2 className="text-xl font-black">Description</h2>
        <p className="mt-2">{description.description}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black ">Responsibilities</h2>
        <div className="list-disc list-inside mt-2 space-y-1">
          <div className="flex items-center">
            <CiCircleCheck className="mr-2 text-emerald-400" />
            {description.responsibilities}
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black ">Ideal Candidate we want</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <div className="px-2 mr-2 mb-2">{description.candidate}</div>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black ">When & Where</h2>
        <p className="flex items-center mt-2">
          <div className="mr-2 p-2 border rounded-full text-emerald-400">
            <CiLocationOn />
          </div>
          {description.whenWhere}
        </p>
      </section>
    </div>
  );
};

export default JobDescription;
