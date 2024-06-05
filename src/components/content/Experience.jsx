import React from "react";

function Experience({ image, title, duration, role }) {
  return (
    <div className="md:w-1/2 ml-8 w-full">
      <div className="flex justify-start items-center gap-16 mt-2">
        <img
          alt="Experience"
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="h-10 w-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCs7cInWzRKDXdqsKbHXBpjjSNN6HiVbLQiA&s"
        />
        <div className="flex flex-col">
          <div className="text-base font-bold font-sans">
            Research center Imarat
          </div>
          <div className="text-xs">april 2023 - september 2023, Hyderabad</div>
        </div>
      </div>
      <div className="p-2 flex flex-col text-xs">
        <div className="text-sm font-semibold">Backend Team Lead</div>
        As a backend team lead, I have ensured the successful delivery of an
        inter office communication web app based on Django. This product is
        currently used by the RCI Employees. We’ve successfully restructured
        communication flow among 4 departments and cut down paperwork by more
        than 60%(approx.)
      </div>
    </div>
  );
}

export default Experience;
