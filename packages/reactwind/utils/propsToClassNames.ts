import { ReactwindProps } from "../components/types";
import definition from '../definition';

let definitionKeys = Object.keys(definition);
export default function propsToClassNames(props: ReactwindProps): string {
  let classNames = Object.keys(props).map((propName: string) => {
    if (definitionKeys.includes(propName)) {
      return definition[propName]['key'].concat("-", props[propName]);
    }
  });

  return classNames.join(" ");
}