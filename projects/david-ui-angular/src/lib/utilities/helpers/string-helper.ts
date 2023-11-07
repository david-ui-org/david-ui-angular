
export const ConvertToClassName = (str : string)=>{
    return ' ' + str + ' ';
}

export const ObjectToStr = (obj : object) =>{
    let result : string[] = [];

    Object.values(obj).forEach((value) => {
      if (typeof value === "string") {
        result = [...result, value];
      } else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        result = [...result, ObjectToStr(value)];
      }
  
      return undefined;
    });
  
    return result.join(" ");
}