import React from "react";
import GetInTouch from "./GetInTouch";
import SendMessage from "./SendMessage";

export default function page() {
  return (
    <section className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 lg:max-w-[35%]">
        <GetInTouch />
      </div>
      <div className="flex-1 lg:w-[65%]">
        <SendMessage/>
      </div>
    </section>
  );
}
