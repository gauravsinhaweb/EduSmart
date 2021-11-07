import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import faqImg from "../assets/faq1.png";
function Faq() {
  const [active, setActive] = useState(false);

  return (
    <div classNameName="text-white">
      <body className="bg-main bg-opacity-1">
        <div className="w-5/6 mx-auto">
          <section className="w-full mb-4">
            <header className="mb-24">
              <div className="grid grid-col-2 justify-items-center  items-end">
                <h2 className="text-3xl text-white font-extralight  mt-8 text-center flex justify-center items-center">
                  FAQ
                  <span className="text-2xl px-2">
                    <BsQuestionCircleFill />
                  </span>
                </h2>
              </div>
            </header>
            <div className="container lg:grid lg:grid-cols-2 gap-3">
              <div className="mb-16">
                <img src={faqImg} alt="img" />
              </div>
              <div className="transform -translate-y-26 md:translate-y-0 mt-15 md:mb-20 flex flex-col justify-center md:ml-132 lg:ml-10 w-full">
                <div className="mt-9.5 text-white space-y-4">
                  <details className="pb-5 border-b md:w-4/5 cursor-pointer">
                    <summary
                      onClick={() => setActive(!active)}
                      className={`card font-medium	 ${
                        active ? "text-secondary" : "hover:text-red "
                      }`}>
                      What is EduSmart?
                    </summary>
                    <p className="text-gray-400 md:text-md  font-sem font-light	opacity-70 ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi iusto quam doloremque perferendis aliquam numquam
                      architecto nemo magnam ducimus molestiae.
                    </p>
                  </details>

                  <details className="pb-5 border-b md:w-4/5 cursor-pointer">
                    <summary className="card">Why EduSmart?</summary>
                    <p className="text-gray-400 md:text-lg font-normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugit facilis est quasi modi. Explicabo debitis esse
                      perspiciatis at labore quia.
                    </p>
                  </details>

                  <details className="pb-5 border-b md:w-4/5 cursor-pointer">
                    <summary className="card">
                      What it can bring to you?
                    </summary>
                    <p className="text-gray-400 md:text-lg font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia nobis at nisi. Nemo doloribus a sequi impedit
                      tempora velit omnis autem, minima rem.
                    </p>
                  </details>

                  <details className="pb-5 border-b md:w-4/5 cursor-pointer">
                    <summary className="card">
                      Have more question or want to contribute?
                    </summary>
                    <p className="text-gray-400 md:text-lg font-normal">
                      Awesome! we would be more than happy to hear from you.
                      Reach out at xyz@gmail.com. See you soon, Cheere!
                    </p>
                  </details>

                  <details className="pb-5 border-b md:w-4/5 cursor-pointer">
                    <summary className="card">Can you work as a team?</summary>
                    <p className="text-gray-400 md:text-lg font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt recusandae assumenda expedita labore eius
                      repudiandae libero quod iure, adipisci temporibus.
                    </p>
                  </details>

                  <details className="pb-5 border-b md:w-4/5 cursor-pointer">
                    <summary className="card">
                      How many team members can you invite?
                    </summary>
                    <p className="text-gray-400 md:text-lg font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil fugit ea sequi voluptas minima.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
}

export default Faq;
