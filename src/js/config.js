export const CONNECTION = "https://atari-monk.github.io/js-notes-json/src/json/";
export const DEBUG = false;
const RENDER_METHOD = Object.freeze({
  Generate: Symbol("generate"),
  Template: Symbol("template")
});
export const RENDER = RENDER_METHOD.Generate;