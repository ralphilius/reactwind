import { ReactwindProps } from "./types";
import propsToClassNames from "../utils/propsToClassNames";

const Fluid: React.FC<ReactwindProps> = (props) => {
  const [classNames, rest]: [string, ReactwindProps] = propsToClassNames(props);
  const { as: Component = 'div' } = props;
  return (
    <Component {...rest} className={classNames.concat(" ", props.className)}>{props.children}</Component>
  )
}

export default Fluid;