export function setAuthState (state, data) {
  state.isAuthenticated = data.isAuthenticated
  state.user = data.user
}