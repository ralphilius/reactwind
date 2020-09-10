export default {
  justifyContent: {
    key: "justify",
    values: ['start', 'end', 'center', 'between', 'evenly', 'around'] as const
  },
  justifyItems: {
    key: "justify-items",
    values: ['auto', 'start', 'end', 'center', 'stretch'] as const
  },
  justifySelf: {
    key: "justify-self",
    values: ['auto', 'start', 'end', 'center', 'stretch'] as const
  },
  alignContent: {
    key: "content",
    values: ['start', 'end', 'center', 'between', 'evenly', 'around'] as const
  },
  alignItems: {
    key: "items",
    values: ['auto', 'start', 'end', 'center', 'stretch'] as const
  },
  alignSelf: {
    key: "self",
    values: ['auto', 'start', 'end', 'center', 'stretch'] as const
  },
  placeContent: {
    key: "place-content",
    values: ['start', 'end', 'center', 'between', 'evenly', 'around', 'stretch'] as const
  },
  placeItems: {
    key: "place-items",
    values: ['auto', 'start', 'end', 'center', 'stretch'] as const
  },
  placeSelf: {
    key: "place-self",
    values: ['auto', 'start', 'end', 'center', 'stretch'] as const
  }
}