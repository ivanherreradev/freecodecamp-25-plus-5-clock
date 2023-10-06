export const timeFormatter = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  return `${formattedMinutes}:${formattedSeconds}`
}
