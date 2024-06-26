import { Link } from "react-router-dom"


function Button({linkto}) {
  return (
    <button className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group z-10">
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#F2E9E4] opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#F2E9E4] opacity-100 group-hover:-translate-x-8"></span>
      <span className="relative w-full text-left text-[#F2E9E4] transition-colors duration-200 ease-in-out group-hover:text-[#101010]">Button Text</span>
      <span className="absolute inset-0 border-2 border-[#F2E9E4] rounded-full"></span>
    </button>
  )
}

export default Button