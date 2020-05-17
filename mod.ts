import { serve } from "./deps.ts";

/** Returns `Hello World` in bold */
export function getHelloWorld(): any {
  const s = serve({ port: 8000 });
  console.log("http://localhost:8000/");
  return 33;
}
