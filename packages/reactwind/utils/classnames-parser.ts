import { ReactwindProps } from "../components/types";
import definition from '../definition';

let definitionKeys = Object.keys(definition);
console.log("definitionKeys", definitionKeys)
export default function propsToClassNames<T extends ReactwindProps>(props: T): [string, T] {
  const newProps: T = { ...props };

console.log("Object.keys(props)", Object.keys(props))
  let classNames = Object.keys(props)
    .filter((propName: string) => definitionKeys.includes(propName))
    .map((propName: string) => {
      delete newProps[propName]
      let propValues = props[propName];
      const classKey = definition[propName]['key'];
      if(typeof propValues == 'boolean') return classKey;
      if (hasResponsiveValue(propValues)) return getResponsiveClassNames(propValues, classKey)
      if (Array.isArray(propValues)) {
        return stringifyPropArray(propValues, classKey);
      }      
      return classKey.concat("-", propValues)
    })
  return [classNames.join(" "), newProps];
}

function stringifyPropArray(propValues: any[], classKey: string) {
  return propValues.map((prop: string) => {
    if(prop.length == 0) return classKey
    return classKey.concat("-", prop)
  }).join(" ");
}

function getResponsiveClassNames(propValues: object | any[], classKey: string) {
  //let object = {};
  // if (Array.isArray(propValues)) {
  //   if (propValues.length > 5) return '';
  //   propValues
  //     .map((propValue, i) => {
  //       let obj = {};
  //       obj[responsiveSchema[i]] = `${classKey}-${propValue}`
  //       return obj;
  //     }).forEach(v => {
  //       object = { ...object, ...v }
  //     });
  //   return objectToClassnames(object);
  // }  
  
  let classnames = '';
  if (isValidObject(propValues, responsiveSchema)) {
    Object.keys(propValues)
      .forEach(propKey => {
        let breakpoint = propKey == responsiveSchema[0] ? '' : `${propKey}:`
        if (Array.isArray(propValues[propKey])) {
          classnames += stringifyPropArray(propValues[propKey], `${breakpoint}${classKey}`)
        } else {
          classnames += `${breakpoint}${classKey}-${propValues[propKey]}`
        }
      })
      
    return classnames;
  }
}

function objectToClassnames(object): string {
  let classnames = '';
  Object.keys(object).forEach(key => {
    let breakpoint = key == responsiveSchema[0] ? '' : `${key}:`
    classnames += ` ${breakpoint}${object[key]}`
  })
  console.log(classnames)
  return classnames;
}

const responsiveSchema = ["base", "sm", "md", "lg", "xl"]
function hasResponsiveValue(propValues: object | any[]) {
  if (typeof propValues == 'string' || typeof propValues == 'boolean' || Array.isArray(propValues)) return false;

  //if (Array.isArray(propValues)) return propValues.length <= 5;

  return isValidObject(propValues, responsiveSchema)
}

function isValidObject(object: object, schema: string[]): boolean {
  var errors = Object.keys(object)
    .filter((key) => schema.indexOf(key) == -1)
    .map((key) => new Error(key + " is invalid."));

  return !(errors.length > 0);
}