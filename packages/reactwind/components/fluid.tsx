import { ReactwindProps } from "./types";
import propsToClassNames from "../utils/classnames-parser";

const Fluid: React.FC<ReactwindProps> = (props) => {
  const [classNames, rest]: [string, ReactwindProps] = propsToClassNames(props);
  const { as: Component = 'div', className } = props;
  const classes = className ? classNames.concat(" ", className) : classNames;
  return (
    <Component {...rest} className={classes}>{props.children}</Component>
  )
}

export default Fluid;