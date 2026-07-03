export default function Musics({ album, img }) {
  return (
    <section className="py-8">
      <div className="container overflow-x-auto">
        <table className="w-full">
          <tbody>
            {album.map((music, index) => (
              <tr
                className="flex items-center justify-between px-5 py-2 not-last:border-b border-b-Natural-800"
                key={index}
              >
                <td className="flex items-center gap-4">
                  <span className="w-8 text-lg text-white">
                    {index + 1}
                  </span>
                  <img
                    src={img}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt=""
                  />
                  <h3 className="font-Pelak-Bold text-lg text-white">
                    {music.fa}
                  </h3>
                </td>
                <td className="flex items-center gap-10">
                  <div className="flex items-center gap-4">
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 6.5a2 2 0 0 1 2 2m-7-2.797L12.685 5a5.36 5.36 0 0 1 7.717 0c2.073 2.127 2.137 5.554.144 7.76l-5.726 6.338a3.78 3.78 0 0 1-5.64 0L3.454 12.76C1.46 10.554 1.524 7.127 3.598 5a5.36 5.36 0 0 1 7.717 0z"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m16 11-4 4-4-4m4 4V1"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.245 8a8 8 0 1 1-12.49 0"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 8v8m4-4H8m4 10c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14 6h7m-7 5h7M3 16h18M3 21h18M5.894 11.553l3.528-1.764c1.474-.737 1.474-2.84 0-3.578L5.894 4.447A2 2 0 0 0 3 6.237v3.527a2 2 0 0 0 2.894 1.789"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="font-Pelak-Medium text-white">۰۱:۴۱</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
