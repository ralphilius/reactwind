import { ReactwindProps } from "./types";
import propsToClassNames from "../utils/propsToClassNames";

type DivisionProps = ReactwindProps & {className?: string}
export const Division: React.FC<DivisionProps> = (props: ReactwindProps) => {
  let classNames:string = propsToClassNames(props);
  return (
    <div className={classNames} {...props}></div>
  )
}