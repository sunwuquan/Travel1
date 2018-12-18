export default {
  increment (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
