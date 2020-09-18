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
  }
}