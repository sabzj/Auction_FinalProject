import React from "react";

const ContactForm = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100">
                Contact
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Feel free to contact me.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <form className="mt-8 lg:mt-0">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Your Name"
                  />
                </div>

                {/* Add similar blocks for other form fields (e.g., email, message) */}

                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
