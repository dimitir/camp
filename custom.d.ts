/* declare module '*.svg?inline' {
    const content: any
    export default content
  } */

declare module '*.svg' {
  const content: any
  export default content
  export { content }
}
/* declare module '*.svg' {
  const content: any
    export {content}
} */