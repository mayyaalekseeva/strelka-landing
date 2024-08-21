import { Quote } from "lucide-react";
import { testimonials } from "./constants";

const TestimonialsSection = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Что люди говорят о нас
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, i) => (
          <div key={i} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-lg p-6 text-md border border-orange-400 font-thin">
              <div className="flex ml-6">
                <div className="flex h-10 w-10 text-orange-700 justify-center items-center mr-6">
                  <Quote />
                </div>
                <p>{item.text}</p>
              </div>

              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={item.image}
                  alt={item.user}
                />
                <div>
                  <h6>{item.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
