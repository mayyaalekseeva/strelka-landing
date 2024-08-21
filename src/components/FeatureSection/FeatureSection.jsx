import { features } from "./constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-bottom  border-zinc-300 nin-h-[800px]">
      <div className="text-center">
        <span className=" text-orange-500 h-6 text-sm font-medium px-2 py-1 uppercase">
          почему мы
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
          Легко сделать из офиса
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            райский кофейный уголок
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((item, i) => (
          <div key={i} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex h-10 w-10 text-orange-700 justify-center items-center">
              {item.icon}
            </div>
            <div>
              <h5 className="mt-2 mb-1 text-xl px-2">{item.title}</h5>
              <p className="text-slate-400 text-md p-2 mb-20 text-neutral-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
