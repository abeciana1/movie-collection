// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger = (...args: Parameters<typeof console.log>) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...args)
  } else {
    // todo add production logger
  }
}

export default logger