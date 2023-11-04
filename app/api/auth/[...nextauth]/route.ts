import nextAuth from "next-auth";
import { authOptions} from "@/app/lib/authOptions";

const handler = nextAuth(authOptions);

// const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID ?? "",
//       clientSecret: process.env.GITHUB_SECRET ?? "",
//     }),
//     // ...add more providers here
//   ],
// };

//  const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
