import { ReactwindProps } from "../components/types";
import definition from '../definition';

let definitionKeys = Object.keys(definition);
export default function propsToClassNames<T extends ReactwindProps>(props: T): [string, T] {
  const newProps: T = {...props};
  let classNames = Object.keys(props)
    .filter((propName: string) => definitionKeys.includes(propName))
    .map((propName: string) => {
      delete newProps[propName]
      if(hasResponsiveValue(props[propName])) return getResponsiveClassNames(props[propName],definition[propName]['key'] )
      return definition[propName]['key'].concat("-", props[propName])
    })
  return [classNames.join(" "), newProps];
}

function getResponsiveClassNames(objectOrArray: object | any[], utilityKey: string){
  console.log("getResponsiveClassNames", objectOrArray)
  console.log("getResponsiveClassNames", utilityKey)
  let object = {};
  if(Array.isArray(objectOrArray)){
    if(objectOrArray.length > 5) return '';
    objectOrArray
      .map((breakpointValue, i) => {
        let obj = {};
        obj[responsiveSchema[i]] = `${utilityKey}-${breakpointValue}`
        return obj;
      }).forEach(v => {
        object = {...object, ...v}
      });
    return objectToClassnames(object);
  } else if(isValid(objectOrArray, responsiveSchema)){
    console.log(isValid(objectOrArray, responsiveSchema), objectOrArray)
    Object.keys(objectOrArray).forEach(k => objectOrArray[k] = `${utilityKey}-${objectOrArray[k]}`)
    return objectToClassnames(objectOrArray)
  }
}

function objectToClassnames(object): string{
  let classnames = '';
  Object.keys(object).forEach(key => {
    let breakpoint = key == responsiveSchema[0] ? '' : `${key}:`
    classnames += ` ${breakpoint}${object[key]}`
  })
  console.log(classnames)
  return classnames;
}

const responsiveSchema = ["base", "sm", "md", "lg", "xl"]
function hasResponsiveValue(objectOrArray: object | any[]){
  if(typeof objectOrArray == 'string') return false;
  if(Array.isArray(objectOrArray)) return objectOrArray.length <= 5;
  return isValid(objectOrArray, responsiveSchema)
}

function isValid(object: object, schema: string[]): boolean {
  var errors = Object.keys(object)
    .filter((key) => schema.indexOf(key) == -1)
    .map((key) => new Error(key + " is invalid."));

  return !(errors.length > 0);
}