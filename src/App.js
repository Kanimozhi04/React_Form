import React from "react";
import { useForm } from "react-hook-form";
import './App.css';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
       console.log(data);
  };
 return (
   <div class="container">
    <form onSubmit={handleSubmit(onSubmit)}>
     
    <div>
      <label>Firstname</label><br/>
      <input type="text" name="firstname"  {...register( 'firstname', {required: "firstname is required!" })} />
     </div>
     <div>
      <label>Lastname</label><br/>
      <input type="text" name="lasttname"  {...register( 'lastname', {required: "lastname is required!" })} />
     </div>
     <div>
      <label>Email</label><br/>
      <input type="email" name="email"  {...register( 'email', {required: "email is required!" })} />
     </div>
     <button class="button">Submit</button>
      
     
    </form>
  </div>
  );
}