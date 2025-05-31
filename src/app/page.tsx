"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const {data:session}= authClient.useSession();
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const onSubmit=()=>{
    authClient.signUp.email({
      email,
      name,
      password,
    },{
      onError:()=>{
        window.alert("Error creating user");
      },
      onSuccess:()=>{
        window.alert("User created successfully");
        
      }
    })
  }

    const onLogin=()=>{
    authClient.signIn.email({
      email,
     
      password,
    },{
      onError:()=>{
        window.alert("Error creating user");
      },
      onSuccess:()=>{
        window.alert("User Logged in successfully");
        
      }
    })
  }

    if(session){
      return(
        <div className="flex flex-col p-4 gap-y-4 ">
         <p>logged in as {session.user.name}</p>
         <Button onClick={()=>{
          authClient.signOut();
         }}>LogOut</Button>   
        </div>
      )
    }
  
  return (
    <div className="flex flex-col my-10">
    <div className="p-4 flex flex-col border rounded-lg shadow-md w-96">
     <Input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
     <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <Input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
     <Button onClick={onSubmit} className="mt-4">
      Create User
     </Button>



    </div>
     <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <Input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
     <Button onClick={onLogin} className="mt-4">
      Login
     </Button>
    </div>
  );
}
