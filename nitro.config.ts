import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  output: {
    dir: ".vercel/output",
  },
  vercel: {
    runtime: "nodejs24.x",
  },
});
