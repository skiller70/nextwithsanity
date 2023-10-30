import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "1nfyl9bk",
  dataset: "skiller",
  apiVersion: "v2021-10-21",
  useCdn: false,
});
