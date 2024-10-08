import React, { useState } from "react";

const PersonalMessage = () => {
  const [message, setMessage] = useState(""); // Store the current message
  const [messages, setMessages] = useState([]); // Store all sent messages
  const [file, setFile] = useState(null); // Store the selected file
  const [filePreview, setFilePreview] = useState(null); // For previewing images

  const handleSendMessage = () => {
    if (message.trim() || file) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages([
        ...messages,
        { text: message, file: file, time: currentTime, isUser: true },
      ]);
      setMessage("");
      setFile(null);
      setFilePreview(null);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // If it's an image, create a preview
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFilePreview(null); // No preview for non-image files
    }
  };

  return (
    <div className="flex flex-col min-h-80 justify-between p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-3 p-4 bg-white rounded-lg shadow-inner flex-grow overflow-y-auto">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`my-6 p-3 rounded-xl max-w-xs shadow-lg relative ${
                index % 2 === 0
                  ? "self-start bg-slate-100 text-gray-800"
                  : "self-end bg-blue-500 text-white"
              }`}
            >
              <div>{msg.text}</div>
              {msg.file && msg.file.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(msg.file)}
                  alt="uploaded"
                  className="mt-2 rounded-md shadow-sm max-w-full h-auto"
                />
              )}
              {msg.file && !msg.file.type.startsWith("image/") && (
                <div className="text-m mt-2 bg-white text-gray-800 p-1 rounded-md shadow-sm">
                  <a href={URL.createObjectURL(msg.file)} download>
                    {msg.file.name}
                  </a>
                </div>
              )}
              <div className="text-[11px] text-[#77838F] absolute top-[50px] right-0.5 tracking-wide font-medium shadow-sm">
                {msg.time}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-center">No messages yet...</div>
        )}
      </div>

      {/* Input and send button */}
      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-lg mt-4">
        {/* Text input */}
        <input
          type="text"
          placeholder="Введите сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
        />

        {/* File upload button */}
        <label className="cursor-pointer">
          <input type="file" onChange={handleFileChange} className="hidden" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 hover:text-gray-700 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </label>

        {/* Preview for the selected file */}
        {filePreview && (
          <img
            src={filePreview}
            alt="Preview"
            className="max-h-12 rounded-md shadow-sm"
          />
        )}

        {/* Send button */}
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200 ease-in-out shadow-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PersonalMessage;
