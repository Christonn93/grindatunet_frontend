import { useParams } from "react-router-dom";

export const UserPage = () => {
 const userId = useParams().id;
 //  const id = useParams<{ id: string }>();

 if (userId) {
  return (
   <div>
    <h1>UserPage</h1>
    <p>userId: {userId}</p>
   </div>
  );
 } else {
  return (
   <div>
    <h1>UserPage</h1>
    <p>No userId</p>
   </div>
  );
 }
};
