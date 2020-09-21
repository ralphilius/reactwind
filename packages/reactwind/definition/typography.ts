export default {
  font: { key: 'font' },
  fontWeight: { key: 'font' },
  text: { key: 'text' },
  fontSize: { key: 'text' },
  textAlign: {
    key: 'text',
    values: ['left', 'center', 'right', 'justify'] as const
  },
  leading: {
    key: 'leading'
  },
  tracking: {
    key: 'tracking'
  },
  letterSpacing: {
    key: 'tracking'
  },
  list: {
    key: 'list'
  },
  listStyleType: {
    key: 'list'
  },
  listStylePosition: {
    key: 'list'
  },
  placeholder: {
    key: 'placeholder'
  },
  placeholderOpacity: {
    key: 'placeholder-opacity'
  },
  textOpacity: {
    key: 'text-opacity'
  },
  align: {
    key: 'align',
    values: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'] as const
  },
  whitespace: {
    key: 'whitespace',
    values: ['normal', 'no-wrap', 'pre', 'pre-line', 'pre-wrap'] as const
  }

}