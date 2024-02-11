"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession} from 'next-auth/react';
import Profile from "@components/Profile";

const MyProfile = () => {
  
  const {data: session} = useSession();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () =>{

  };

  const handleDelete = async () =>{

  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={userPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;