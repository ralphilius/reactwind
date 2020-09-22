export const display = {
  block: { key: 'block' },
  inlineBlock: { key: 'inline-block' },
  inline: { key: 'inline' },
  flex: { key: 'flex' },
  inlineFlex: { key: 'inline-flex' },
  table: { key: 'table' },
  tableCaption: { key: 'table-caption' },
  tableCell: { key: 'table-cell' },
  tableColumn: { key: 'table-column' },
  tableColumnGroup: { key: 'table-column-group' },
  tableFooterGroup: { key: 'table-footer-group' },
  tableHeaderGroup: { key: 'table-header-group' },
  tableRowGroup: { key: 'table-row-group' },
  tableRow: { key: 'table-row' },
  flowRoot: { key: 'flow-root' },
  grid: { key: 'grid' },
  inlineGrid: { key: 'inline-grid' },
  contents: { key: 'contents' },
  hidden: { key: 'hidden' }
}

export const position = {
  static: { key: 'static' },
  fixed: { key: 'fixed' },
  absolute: { key: 'absolute' },
  relative: { key: 'relative' },
  sticky: { key: 'sticky' }
}

export const float = {
  float: {
    key: 'float',
    values: ['left', 'right', 'none'] as const
  },
  clearfix: {
    key: 'clearfix'
  }
}

export default {
  container: {
    key: 'container'
  },
  box: {
    key: 'box',
    values: ['border', 'content'] as const
  },
  ...display,
  ...float,
  clear: {
    key: 'clear',
    values: ['left', 'right', 'both', 'none'] as const
  },
  object: { key: 'object' },
  objectFit: { key: 'object' },
  objectPosition: { key: 'object' },
  overflow: {
    key: 'overflow',
    values: ["auto", "hidden", "scroll", "visible"] as const
  },
  scrolling: { key: 'scrolling' },
  ...position,
  top: { key: 'top' },
  right: { key: 'right' },
  bottom: { key: 'bottom' },
  left: { key: 'left' },
  inset: { key: 'inset' },
  visible: { key: 'visible' },
  invisible: { key: 'invisible' },
  z: { key: 'z' },
}

