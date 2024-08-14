interface PropTypes {
  title: string;
  description: string;
  categories: string[];
  company: string;
  location: string[];
  avatar: string;
}

const JobCard = (props: PropTypes) => {
  return (
    <div className="flex flex-col justify-center items-start mb-5 py-6 px-10 text-custom-color bg-white border hover:shadow-lg rounded-border-rad transition-shadow ease-in-out duration-400">
      <div className="flex justify-left items-center mb-4">
        <img
          src={props.avatar}
          alt="Logo"
          className="w-custom-w h-custom-h mr-5"
        />
        <div>
          <div className="text-xl font-bold leading-6 text-left">
            {props.title}
          </div>
          <div className="flex justify-start items-center text-left text-custom-text-color3 my-2">
            {props.company}
            <div className="w-1 h-1 bg-custom-text-color3 rounded-full mx-2"></div>
            {props?.location.map((loc) => loc)}
          </div>
        </div>
      </div>
      <div className="">
        <p className="mb-6 text-custome-size font-normal leading-6 text-left">
          {props.description}
        </p>
        <div className="flex justify-start items-center">
          <div className="flex justify-center items-center px-3 py-1 rounded-custom-rad1 bg-custom-color1 text-custom-text-color1">
            In person
          </div>
          <div className="h-10 w-px mx-2 bg-gray-300"></div>
          {props?.categories[0] && (
            <div className="text-center mr-4 px-2 py-1 rounded-custom-rad1 text-custom-text-color2 border-solid border-2 border-amber-200">
              {props?.categories[0]}
            </div>
          )}
          {props?.categories[1] && (
            <div className="text-center px-5 py-1 rounded-custom-rad1 text-custom-text-color4 border-solid border-2 border-custom-text-color4">
              {props?.categories[1]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
