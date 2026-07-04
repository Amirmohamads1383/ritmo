import React, { useState } from "react";

export default function CreatePlaylist({ setStep, onClose, onCreatePlaylist }) {
  const [playListName, setPlayListName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    // اعتبارسنجی
    if (!playListName.trim()) {
      setError("لطفاً نام پلی لیست را وارد کنید");
      return;
    }

    if (playListName.trim().length < 3) {
      setError("نام پلی لیست باید حداقل ۳ کاراکتر باشد");
      return;
    }

    setIsSubmitting(true);

    // شبیه‌سازی تاخیر در ذخیره‌سازی
    setTimeout(() => {
      onCreatePlaylist(playListName.trim());
      setPlayListName("");
      setError("");
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span
          onClick={() => {
            setStep("select");
            setError("");
          }}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M18.667 21.333 24 16l-5.333-5.334M24 16H8"
              stroke="#6f7389"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="font-Pelak-Bold text-lg text-white">
          ساخت پلی لیست جدید
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full">
          <input
            type="text"
            className={`w-full border ${
              error ? "border-Error-200" : "border-Natural-300"
            } text-Natural-100 px-3 py-4 focus:outline-none rounded-lg bg-transparent`}
            placeholder="اینجا بنویسید ..."
            value={playListName}
            onChange={(event) => {
              setPlayListName(event.target.value);
              if (error) setError("");
            }}
            disabled={isSubmitting}
          />
          <label className="absolute -top-3 right-6 bg-Menu px-1 font-Pelak-Regular text-sm text-Natural-300">
            نام پلی لیست
          </label>
          {error && <div className="mt-3 text-Error-200 text-sm">{error}</div>}
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <button
          className="px-4 py-1.5 text-white border border-white rounded-lg cursor-pointer hover:bg-white/10 transition disabled:opacity-50"
          onClick={() => {
            setStep("select");
            setError("");
          }}
          disabled={isSubmitting}
        >
          بازگشت
        </button>
        <button
          className="px-4 py-1.5 text-white bg-Primary rounded-lg cursor-pointer hover:bg-Primary/80 transition disabled:opacity-50 flex items-center gap-2"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              در حال ساخت...
            </>
          ) : (
            "ساخت پلی لیست"
          )}
        </button>
      </div>
    </div>
  );
}
