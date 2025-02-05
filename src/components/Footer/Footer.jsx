import data from "./data";

function Footer() {
  return (
    <div className="pt-16 pb-12 text-white flex flex-col items-center gap-9">
      <div className="sm:px-16 px-8 w-full flex md:flex-row flex-col gap-9 justify-between">
        <div className="flex flex-col gap-12 items-start">
          <img src="/Footer/logo.svg" alt="logo" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-[#ACB1FF] text-xl font-normal ">
              Join us - get social!
            </p>
            <div className="py-2 flex items-start gap-5">
              {data.map((item) => {
                return item.imgData.map((value, i) => (
                  <a key={i} href={value.link} target="_blank">
                    <img src={value.img} alt="socials" />
                  </a>
                ));
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start">
            <div className="grid grid-cols-2 grid-rows-3 lg:gap-x-40 gap-x-28 gap-y-2 text-[#ACB1FF] text-base font-medium">
              {data.map((item) => {
                return item.linkData1.map((value, i) => (
                  <a key={i} href={value.link}>
                    <p>{value.title}</p>
                  </a>
                ));
              })}
            </div>
          {data.map((item) => {
            return item.addressData.map((item, index) => (
              <div
                key={index}
                className="lg:w-[30rem] w-[20rem] flex flex-col gap-2"
              >
                <p className="text-gray-300 text-xl">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.address}</p>
              </div>
            ));
          })}
        </div>
      </div>
      <div className=" flex flex-col items-center gap-4 w-full">
        <div className="bg-white opacity-20 h-px w-full"></div>
        <p className="text-gray-500 text-base">Copyright @ TCET Open Source</p>
      </div>
    </div>
  );
}

export default Footer;
