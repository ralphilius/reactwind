import { ReactwindProps } from "../components/types";
import definition from '../definition';
import omit from "./omit";
import pluck from "./pluck";

let definitionKeys = Object.keys(definition);
export default function propsToClassNames<T extends ReactwindProps>(props: T): [string, T] {
  const newProps: T = { ...props };
  let classNames = Object.keys(props)
    .filter((propName: string) => definitionKeys.includes(propName))
    .map((propName: string) => {
      omit(newProps, [propName as keyof T])
      let propValues: boolean | string | any[] | {[k: string]: string} = pluck(props, [propName as keyof T]);
      const classKey = definition[propName]['key'];
      if (typeof propValues == 'boolean') return classKey;
      if (Array.isArray(propValues)) {
        return stringifyPropArray(propValues, classKey);
      }
      if (hasResponsiveValue(propValues)) return getResponsiveClassNames(propValues, classKey)
      if (typeof propValues == 'string') return classKey != '' ? classKey.concat("-", propValues) : propValues;
      return '';

    })
  return [classNames.join(" "), newProps];
}

function stringifyPropArray(propValues: any[], classKey: string) {
  return propValues.map((prop: string) => {
    if (prop.length == 0) return classKey
    return classKey.concat("-", prop)
  }).join(" ");
}

function getResponsiveClassNames(propValues: {[k: string]: string|string[]}, classKey: string) {
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
  if (typeof propValues == 'object' && isValidObject(propValues, responsiveSchema)) {
    Object.keys(propValues)
      .forEach((propKey: string) => {
        let breakpoint = propKey == responsiveSchema[0] ? '' : `${propKey}:`
        if (Array.isArray(propValues[propKey])) {
          classnames += stringifyPropArray(propValues[propKey] as string[], `${breakpoint}${classKey}`)
        } else {
          classnames += `${breakpoint}${classKey}-${propValues[propKey]}`
        }
      })

    return classnames;
  }
}

function objectToClassnames(object: { [key: string]: string }): string {
  let classnames = '';
  Object.keys(object).forEach(key => {
    let breakpoint = key == responsiveSchema[0] ? '' : `${key}:`
    classnames += ` ${breakpoint}${object[key]}`
  })
  console.log(classnames)
  return classnames;
}

const responsiveSchema = ["base", "sm", "md", "lg", "xl"]
function hasResponsiveValue(propValues: boolean | string | object | any[]) {
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