import { ReactwindProps } from "./types";
import propsToClassNames from "../utils/propsToClassNames";

type DivisionProps = ReactwindProps & {className?: string}
export const Division: React.FC<DivisionProps> = (props: DivisionProps) => {
  let [classNames, rest]: [string, DivisionProps] = propsToClassNames(props);
  
  return (
    <div {...rest} className={classNames.concat(" ", props.className)} ></div>
  )
}