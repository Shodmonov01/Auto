import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BiSolidVolumeMute } from "react-icons/bi";

const Message = () => {
  const messages = [
    {
      id: 1,
      name: "Александр Петров",
      message: "Здравствуйте, цена окончательная?",
      time: "10:50 AM",
      count: 5,
      isOnline: true,
      isMute: false,
    },
    {
      id: 2,
      name: "Александр",
      message: "Здравствуйте, цена окончательная?",
      time: "11:58 AM",
      count: 18,
      isOnline: false,
      isMute: false,
    },
    {
      id: 3,
      name: "Петров",
      message: "Здравствуйте, цена окончательная?",
      time: "13:58 AM",
      count: 31,
      isOnline: true,
      isMute: true,
    },
  ];

  return (
    <>
      {messages.length > 0 ? (
        <div>
          <b className="text-2xl">Сообщения</b>

          {messages.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between shadow rounded m-2 p-4 bg-[#F6F6F6]"
              >
                <div className="flex justify-start items-center space-x-2">
                  <div className="flex items-center relative ">
                    <p className="rounded-full py-2.5 px-5 flex items-center justify-center bg-[#D9D9D9]">
                      J
                    </p>
                    <span
                      className={`ml-2 w-3 h-3 rounded-full  ${
                        item.isOnline ? "bg-[#07C553]" : "bg-[#989898]"
                      } absolute bottom-[1px] right-[1px]`}
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold">{item.name}</h1>
                    <p className="text-[#989898]">
                      Здравствуйте, цена окончательная?
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <p className=" text-sm rounded-full py-0.5 px-2 text-white flex items-center justify-start bg-[#2684E5]">
                      {item.count}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.isMute ? (
                      <BiSolidVolumeMute className="text-[#A7A5A5]" />
                    ) : (
                      ""
                    )}
                    <p className="text-[#A7A5A5]">{item.time}</p>
                  </div>
                  <div className="flex justify-end items-center mt-2">
                    <IoCheckmarkDoneSharp />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl text-red-500 font-semibold">
            not yet have message
          </h1>
        </div>
      )}
    </>
  );
};

export default Message;
