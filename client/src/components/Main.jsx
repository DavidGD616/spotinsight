import React from "react";

const Main = ({ children }) => (
    <main className="w-full mx-auto max-w-[1400px] min-h-screen p-[30px_25px] sm:p-[50px_40px] md:p-[60px_50px] lg:p-[80px]">
      {children}
    </main>
);

export default Main;