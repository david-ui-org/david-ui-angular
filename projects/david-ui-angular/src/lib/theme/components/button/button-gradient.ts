import { IPropsMapper } from "../../../types/generic";

const activeGradiant = "active:opacity-[0.85]";
export const buttonGradient: IPropsMapper<object>  = {
    white: {
      backgroud: "bg-white",
      color: "text-blue-gray-900",
      shadow: "shadow-md shadow-blue-gray-500/10",
      hover: "hover:shadow-lg hover:shadow-blue-gray-500/20",
      focus: "focus:opacity-[0.85] focus:shadow-none",
      active: "active:opacity-[0.85] active:shadow-none",
    },
    "blue-gray": {
      backgroud: "bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400",
      color: "text-white",
      shadow: "shadow-md shadow-blue-gray-500/20",
      hover: "hover:shadow-lg hover:shadow-blue-gray-500/40",
      active: activeGradiant,
    },
    gray: {
      backgroud: "bg-gradient-to-tr from-gray-900 to-gray-800",
      color: "text-white",
      shadow: "shadow-md shadow-gray-900/10",
      hover: "hover:shadow-lg hover:shadow-gray-900/20",
      active: activeGradiant,
    },
    brown: {
      backgroud: "bg-gradient-to-tr from-brown-600 to-brown-400",
      color: "text-white",
      shadow: "shadow-md shadow-brown-500/20",
      hover: "hover:shadow-lg hover:shadow-brown-500/40",
      active: activeGradiant,
    },
    "deep-orange": {
      backgroud: "bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400",
      color: "text-white",
      shadow: "shadow-md shadow-deep-orange-500/20",
      hover: "hover:shadow-lg hover:shadow-deep-orange-500/40",
      active: activeGradiant,
    },
    orange: {
      backgroud: "bg-gradient-to-tr from-orange-600 to-orange-400",
      color: "text-white",
      shadow: "shadow-md shadow-orange-500/20",
      hover: "hover:shadow-lg hover:shadow-orange-500/40",
      active: activeGradiant,
    },
    amber: {
      backgroud: "bg-gradient-to-tr from-amber-600 to-amber-400",
      color: "text-black",
      shadow: "shadow-md shadow-amber-500/20",
      hover: "hover:shadow-lg hover:shadow-amber-500/40",
      active: activeGradiant,
    },
    yellow: {
      backgroud: "bg-gradient-to-tr from-yellow-600 to-yellow-400",
      color: "text-black",
      shadow: "shadow-md shadow-yellow-500/20",
      hover: "hover:shadow-lg hover:shadow-yellow-500/40",
      active: activeGradiant,
    },
    lime: {
      backgroud: "bg-gradient-to-tr from-lime-600 to-lime-400",
      color: "text-black",
      shadow: "shadow-md shadow-lime-500/20",
      hover: "hover:shadow-lg hover:shadow-lime-500/40",
      active: activeGradiant,
    },
    "light-green": {
      backgroud: "bg-gradient-to-tr from-light-green-600 to-light-green-400",
      color: "text-white",
      shadow: "shadow-md shadow-light-green-500/20",
      hover: "hover:shadow-lg hover:shadow-light-green-500/40",
      active: activeGradiant,
    },
    green: {
      backgroud: "bg-gradient-to-tr from-green-600 to-green-400",
      color: "text-white",
      shadow: "shadow-md shadow-green-500/20",
      hover: "hover:shadow-lg hover:shadow-green-500/40",
      active: activeGradiant,
    },
    teal: {
      backgroud: "bg-gradient-to-tr from-teal-600 to-teal-400",
      color: "text-white",
      shadow: "shadow-md shadow-teal-500/20",
      hover: "hover:shadow-lg hover:shadow-teal-500/40",
      active: activeGradiant,
    },
    cyan: {
      backgroud: "bg-gradient-to-tr from-cyan-600 to-cyan-400",
      color: "text-white",
      shadow: "shadow-md shadow-cyan-500/20",
      hover: "hover:shadow-lg hover:shadow-cyan-500/40",
      active: activeGradiant,
    },
    "light-blue": {
      backgroud: "bg-gradient-to-tr from-light-blue-600 to-light-blue-400",
      color: "text-white",
      shadow: "shadow-md shadow-light-blue-500/20",
      hover: "hover:shadow-lg hover:shadow-light-blue-500/40",
      active: activeGradiant,
    },
    blue: {
      backgroud: "bg-gradient-to-tr from-blue-600 to-blue-400",
      color: "text-white",
      shadow: "shadow-md shadow-blue-500/20",
      hover: "hover:shadow-lg hover:shadow-blue-500/40",
      active: activeGradiant,
    },
    indigo: {
      backgroud: "bg-gradient-to-tr from-indigo-600 to-indigo-400",
      color: "text-white",
      shadow: "shadow-md shadow-indigo-500/20",
      hover: "hover:shadow-lg hover:shadow-indigo-500/40",
      active: activeGradiant,
    },
    "deep-purple": {
      backgroud: "bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400",
      color: "text-white",
      shadow: "shadow-md shadow-deep-purple-500/20",
      hover: "hover:shadow-lg hover:shadow-deep-purple-500/40",
      active: activeGradiant,
    },
    purple: {
      backgroud: "bg-gradient-to-tr from-purple-600 to-purple-400",
      color: "text-white",
      shadow: "shadow-md shadow-purple-500/20",
      hover: "hover:shadow-lg hover:shadow-purple-500/40",
      active: activeGradiant,
    },
    pink: {
      backgroud: "bg-gradient-to-tr from-pink-600 to-pink-400",
      color: "text-white",
      shadow: "shadow-md shadow-pink-500/20",
      hover: "hover:shadow-lg hover:shadow-pink-500/40",
      active: activeGradiant,
    },
    red: {
      backgroud: "bg-gradient-to-tr from-red-600 to-red-400",
      color: "text-white",
      shadow: "shadow-md shadow-red-500/20",
      hover: "hover:shadow-lg hover:shadow-red-500/40",
      active: activeGradiant,
    },
  };
  
  export default buttonGradient;