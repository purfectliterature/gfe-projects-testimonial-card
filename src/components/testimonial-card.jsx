const TestimonialCard = ({ name, handle, avatar, children }) => (
  <div className="bg-white max-w-[340px] flex flex-col space-y-4 shadow-md rounded-lg p-6 ring-1 ring-neutral-200">
    <div className="flex space-x-4 items-center">
      <img className="rounded-full size-12" src={avatar} alt="" />

      <div className="overflow-hidden">
        <h1 className="text-neutral-900 font-semibold text-lg text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h1>

        <p className="text-sm text-zinc-600 text-ellipsis whitespace-nowrap overflow-hidden">
          {handle}
        </p>
      </div>
    </div>

    <p className="text-neutral-600 line-clamp-6 text-base">{children}</p>
  </div>
);

export default TestimonialCard;
