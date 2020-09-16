import { ReactwindProps } from "../components/types";
import definition from '../definition';

let definitionKeys = Object.keys(definition);
export default function propsToClassNames<T extends ReactwindProps>(props: T): [string, T] {
  const newProps: T = {...props};
  let classNames = Object.keys(props)
    .filter((propName: string) => definitionKeys.includes(propName))
    .map((propName: string) => {
      delete newProps[propName]
      return definition[propName]['key'].concat("-", props[propName])
    })
  return [classNames.join(" "), newProps];
}