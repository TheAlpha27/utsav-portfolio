"use client";
import CountUp from "react-countup";
import { skills } from "../lib/constants";

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 3, text: "Projects completed" },
  { num: skills.skillList.length, text: "Technologies mastered" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <div className="flex items-center">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-semibold"
                  />
                  {index !== 2 && (
                    <p className="text-4xl xl:text-6xl font-semibold">+</p>
                  )}
                </div>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
