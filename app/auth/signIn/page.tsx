"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    // <div className="   w-full    h-[100vh]  flex justify-center items-center">
    //   <div className=" flex  flex-col justify-center items-center gap-y-8  w-full  ">
    //     <input
    //       type="text"
    //       placeholder="User name"
    //       className="input rounded-[8px] input-bordered input-accent w-full max-w-xs"
    //     />

    //     <input
    //       type="password"
    //       placeholder="Password"
    //       className="input  rounded-[8px] input-bordered input-accent w-full max-w-xs"
    //     />

    //     <button
    //       onClick={async () => {
    //         const login = await signIn("register", {
    //           username: "asdasdasdasdasd",
    //           password:"ssasdasdasdss",
    //           redirect: false,
    //           callbackUrl: "/",
    //         });
    //       if(login?.error){
    //           alert("login failed")

    //       }else{
    //         "ggwp"
    //       }
    //       }}
    //       className="btn btn-wide btn-primary  rounded-[8px]"
    //     >
    //       Login
    //     </button>
    //     <button
    //       onClick={() => {
    //         signIn("github", { callbackUrl: "/" });
    //       }}
    //       className="btn btn-wide btn-primary rounded-[8px] "
    //     >
    //       <FontAwesomeIcon icon={faGithub} size="xl" /> Sign in with Github
    //     </button>
    //   </div>
    // </div>
    <div className=" flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
        <Button
        variant="default"
          onClick={() => {
            signIn("github", { callbackUrl: "/" });
          }}
          className="btn btn-wide btn-primary rounded-[8px] "
        >
          <FontAwesomeIcon icon={faGithub} size="xl" /> Sign in with Github
        </Button>
      </Card>
    </div>
  );
}
