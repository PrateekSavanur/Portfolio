import Typewriter from "typewriter-effect/dist/react";

export default function Home() {
  return (
    <div className="mt-[45px] md:pt-14 md:mt-[80px] ">
      <div className="grid pb-[7vh]  mx-4 items-center px-[10%]">
        <span className="text-teal-400 font-mono text-left text-[15px] sm:text-[30px]  md:text-[40px]">
          Hello, I am
        </span>

        <div className="text-slate-300 mt-5 font-serif text-left text-[20px] sm:text-[40px]  md:text-[60px] ">
          <Typewriter
            options={{
              strings: ["Prateek Savanur", "A Blockchain developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <h2 className="text-slate-500 text-left font-mono  mt-5 text-[15px] sm:text-[40px]  md:text-[55px]">
          I build Dapps on Ethereum
        </h2>
        <p className="text-slate-500 mt-5 font-mono mb-[4rem] text-justify text-[5px] sm:text-[10px]  md:text-[15px] ">
          Blockchain developer experienced in developing decentralized
          applications (dApps) on the Ethereum blockchain. Proficient in
          Solidity, Hardhat and ethers.js for smart contract development. Strong
          understanding of blockchain principles and distributed ledger
          technology. Committed to staying updated with the latest advancements
          in the Ethereum ecosystem. Seeking opportunities to contribute to
          innovative blockchain projects and apply expertise in building secure
          and reliable solutions. Some experience in auditing the smart
          contracts and trying to improve on that part.
        </p>
      </div>

      <div className="bg-slate-300 sm:pb-[70px] pt-5 font-serif font-bold text-center text-[20px] sm:text-[40px]  md:text-[60px]">
        Technical Skills
      </div>

      <div className="bg-slate-300 grid grid-cols-1 font-mono items-center sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10 pb-24 pr-9 text-[15px] sm:text-[17px] md:text-[20px]">
        <div className="bg-blue-950 shadow-blue-900/80 py-3 pl-5 text-left rounded-lg ml-9 text-slate-300 hover:bg-blue-900 hover:py-6">
          <h2 className="font-bold mb-4">Web Development Skills</h2>
          <ul className="list-disc pl-4">
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, GraphQL</li>
          </ul>
        </div>
        <div className="bg-blue-950 py-3 pl-5 text-left rounded-lg ml-9 text-slate-300 hover:bg-blue-900 hover:py-6">
          <h2 className="font-bold mb-4">Web Development Skills</h2>
          <ul className="list-disc pl-4">
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, GraphQL</li>
          </ul>
        </div>
        <div className="bg-blue-950 py-3 pl-5 text-left rounded-lg ml-9 text-slate-300 hover:bg-blue-900 hover:py-6">
          <h2 className="font-bold mb-4">Web Development Skills</h2>
          <ul className="list-disc pl-4">
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
