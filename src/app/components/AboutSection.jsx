import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="self-photo"
          src={"/images/about-image.png"}
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            pariatur hic ea incidunt reiciendis quidem a labore ullam sequi at.
            Perspiciatis atque non dolore temporibus facere consequuntur debitis
            accusamus laborum!
          </p>
          <div className="contact mt-10">
            <h3 className="mb-2">NAME</h3>
            <p className="mb-10">Noah Maldonado</p>
            <h3 className="mb-2">EMAIL</h3>
            <p>noahglennmaldonado@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
