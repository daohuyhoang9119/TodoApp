import { useState } from "react";

function Header() {
  return (
    <div className="">
      <h1 className="font-sans text-2xl font-semibold">Welcome back, Ryan</h1>
      <p className="font-sans text-gray-500">
        You've got 7 tasks comming up in the next days
      </p>
    </div>
  );
}

export default Header;
