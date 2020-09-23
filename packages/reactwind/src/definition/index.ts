import boxAlignment from './box-alignment';
import spacing from './spacing';
import sizing from './sizing';
import typography from './typography'
import backgrounds from './backgrounds';
import borders from './borders';
import grid from './grid';
import flexbox from './flexbox';
import layout from './layout'

const definition: {
  [key: string]: { 
    key: string, 
    values?: readonly string[] 
  }
} = {
  ...boxAlignment,
  ...spacing,
  ...sizing,
  ...typography,
  ...backgrounds,
  ...borders,
  ...grid,
  ...flexbox,
  ...layout
}

export default definition;