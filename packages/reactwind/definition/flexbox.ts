export default {
  flex: {
    key: 'flex'
  },
  flexDirection: {
    key: 'flex',
    values: ['row', 'col', 'row-reverse', 'col-reverse'] as const
  },
  flexWrap: {
    key: 'flex',
    values: ['wrap', 'wrap-reverse', 'no-wrap'] as const
  },
  flexGrow: {
    key: 'flex-grow',
    values: ['0', ''] as const
  },
  flexShrink: {
    key: 'flex-shrink',
    values: ['0', ''] as const
  },
  order: {
    key: 'order'
  }
}