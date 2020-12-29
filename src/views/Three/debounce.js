export default {
  debounce(fn, delay) {
    let timer = null
    return () => {
      const context = this
      const args = arguments
  
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay);
    }
  }
}
