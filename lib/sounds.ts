export function playSound(name: "move" | "win" | "draw") {
  void new Audio(`/sounds/${name}.mp3`).play();
}
