import { useState } from "react";
import {
  RiHome6Line,
  RiArrowLeftRightFill,
  RiArrowUpSLine,
  RiCheckboxBlankCircleFill,
  RiListSettingsLine,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
  RiSendPlaneLine,
  RiSearch2Line,
  RiFileCopyLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white fixed w-6/8 md:w-96 h-full border-r p-8 flex flex-col justify-between overflow-y-scroll transition-all lg:left-0 z-50 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Logo, infouser and Nav */}
        <div>
          {/* Logo */}
          <h1 className="text-2xl uppercase font-bold mb-10">Tu logo</h1>
          {/* Info user */}
          <div className="flex items-center gap-4 mb-10">
            <span className="bg-blue-100 py-2 px-[11px] rounded-full text-blue-700 font-medium">
              JT
            </span>
            <div>
              <p className="text-gray-400 text-sm">Desarrollador web</p>
              <h5 className="font-bold text-lg">Jorge Trejo</h5>
            </div>
          </div>
          {/* Menu */}
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-500 py-2 px-4"
              >
                {" "}
                <RiHome6Line />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-500 py-2 px-4"
              >
                {" "}
                <RiHome6Line />
                Trade
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-4 text-gray-500 py-2 px-4"
              >
                {" "}
                <span className="flex items-center gap-4">
                  <RiArrowLeftRightFill />
                  Transfers
                </span>
                <RiArrowUpSLine />
              </a>
              <ul className="pl-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 py-2 px-4 text-gray-500"
                  >
                    <RiCheckboxBlankCircleFill className="text-[8px]" />{" "}
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 py-2 px-4 text-gray-500"
                  >
                    <RiCheckboxBlankCircleFill className="text-[8px]" />{" "}
                    Beneficiaries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between gap-4 py-2 px-4 text-gray-500"
                  >
                    <span className="flex items-center gap-4">
                      <RiCheckboxBlankCircleFill className="text-[8px]" />{" "}
                      Messages
                    </span>
                    <span className="py-1 px-2 box-content bg-orange-300 text-white rounded-full text-xs">
                      2
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-500 py-2 px-4"
              >
                {" "}
                <RiListSettingsLine />
                System settings
              </a>
            </li>
          </ul>
        </div>
        {/* Logout */}
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-500 py-2 px-4"
            >
              {" "}
              <RiLogoutCircleRLine />
              Logout
            </a>
          </li>
        </ul>
      </div>
      {/* Btn menu movil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-2 md:top-6 right-6 border p-3 rounded-full bg-white z-[9999]"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
      {/* Header */}
      <header className="fixed lg:ml-96 bg-white w-full lg:w-[calc(100%-384px)] border-b">
        <div className="flex items-center gap-4 lg:justify-between p-4 md:p-8">
          <h1 className="text-xl md:text-3xl font-bold">Messages</h1>
          <button className="border text-blue-900 font-bold flex items-center gap-4 p-2 md:p-3 rounded-lg text-xs md:text-base">
            <RiSendPlaneLine /> New message
          </button>
        </div>
        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-4">
          {/* Search */}
          <form className="hidden lg:block col-span-1 p-4 border-r">
            <div className="relative">
              <RiSearch2Line className="text-blue-900 absolute top-1/2 -translate-y-1/2 left-2" />
              <input
                type="text"
                className="bg-white w-full py-2 px-8 outline-none rounded-lg border border-transparent focus:border-blue-700"
                placeholder="Search"
              />
            </div>
          </form>
          <div className="col-span-3 p-4 flex items-center justify-between">
            <h3>Error code CR045</h3>
            <p className="flex items-center gap-2 text-blue-900">
              <span className="text-gray-500">Transaction:</span> 123456{" "}
              <RiFileCopyLine className="hover:cursor-pointer text-xl" />
            </p>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className="lg:ml-96 pt-28 md:pt-36 lg:pt-48 h-screen lg:w-[calc(100%-384px)] grid grid-cols-1 lg:grid-cols-4">
        <ul className="hidden lg:block col-span-1 border-r p-4 h-full max-h-full overflow-y-scroll">
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="flex items-center gap-4 font-bold">
                <RiCheckboxBlankCircleFill className="text-orange-300 text-[10px]" />{" "}
                Lorem ipsum
              </h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="p-2 hover:bg-gray-100 block rounded-lg">
              <h5 className="font-bold">Lorem ipsum</h5>
              <p className="text-gray-500 text-sm mb-2">
                {" "}
                Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500,
              </p>
              <span className="text-xs text-gray-400">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
        </ul>
        {/* All messages */}
        <div className="col-span-1 lg:col-span-3 relative p-4 h-full max-h-full overflow-y-scroll">
          <div className="h-full lg:h-[650px] overflow-y-scroll pb-28 lg:pb-10">
            <div className="flex justify-center">
              <p className="text-center border py-2 px-4 my-6 rounded-full">
                Yesterday
              </p>
            </div>
            {/* Message 1 */}
            <div className="flex items-start gap-4">
              <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full">
                JT
              </span>
              <div>
                <p className="text-gray-500 border p-4 mb-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500, cuando un impresor (N. del T.
                  persona que se dedica a la imprenta) desconocido usó una
                  galería de textos y los mezcló de tal manera{" "}
                </p>
                <span className="text-gray-400 text-xs">
                  09 septiembre 2021, 15:30 hrs
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-center border py-2 px-4 my-6 rounded-full">
                Today
              </p>
            </div>
            {/* Message 2 */}
            <div className="flex items-start flex-row-reverse gap-4">
              <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full">
                JT
              </span>
              <div>
                <p className="text-white bg-blue-600 p-4 mb-2 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500
                </p>
                <span className="text-gray-400 text-xs flex justify-end">
                  09 septiembre 2021, 15:30 hrs
                </span>
              </div>
            </div>
            <div className="flex items-start flex-row-reverse gap-4">
              <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full">
                JT
              </span>
              <div>
                <p className="text-white bg-blue-600 p-4 mb-2 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500
                </p>
                <span className="text-gray-400 text-xs flex justify-end">
                  09 septiembre 2021, 15:30 hrs
                </span>
              </div>
            </div>
            <div className="flex items-start flex-row-reverse gap-4">
              <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full">
                JT
              </span>
              <div>
                <p className="text-white bg-blue-600 p-4 mb-2 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500
                </p>
                <span className="text-gray-400 text-xs flex justify-end">
                  09 septiembre 2021, 15:30 hrs
                </span>
              </div>
            </div>
            <div className="flex items-start flex-row-reverse gap-4">
              <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full">
                JT
              </span>
              <div>
                <p className="text-white bg-blue-600 p-4 mb-2 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500
                </p>
                <span className="text-gray-400 text-xs flex justify-end">
                  09 septiembre 2021, 15:30 hrs
                </span>
              </div>
            </div>
            <div className="flex items-start flex-row-reverse gap-4">
              <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full">
                JT
              </span>
              <div>
                <p className="text-white bg-blue-600 p-4 mb-2 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500
                </p>
                <span className="text-gray-400 text-xs flex justify-end">
                  09 septiembre 2021, 15:30 hrs
                </span>
              </div>
            </div>
            <div className="flex items-start flex-row-reverse gap-4">
              <span className="bg-blue-100 text-blue-900 font-bold py-2 px-[10px] rounded-full">
                JT
              </span>
              <div>
                <p className="text-white bg-blue-600 p-4 mb-2 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500
                </p>
                <span className="text-gray-400 text-xs flex justify-end">
                  09 septiembre 2021, 15:30 hrs
                </span>
              </div>
            </div>
          </div>
          {/* Send message */}
          <form className="absolute bg-gray-200 w-full bottom-0 left-0 p-6">
            <div className="relative">
              <RiSendPlaneLine className="absolute right-4 top-1/2 -translate-y-1/2 text-lg hover:cursor-pointer" />
              <input
                type="text"
                className="bg-white w-full outline-none py-2 pl-6 pr-10 rounded-full"
                placeholder="Escribe tu mensaje"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
