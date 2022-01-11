import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/Form.css';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className='form1'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" className='inps' placeholder="First name" {...register("First name", {required: true, maxLength: 80})} /><br/>
      <input type="text" className='inps' placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /><br/>
      <select className='inps2' {...register("Car Model", { required: true })}>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Opel">Opel</option>
        <option value="Ford">Ford</option>
        <option value="Volkswagen">Volkswagen</option>
      </select><br/>
      <input type="tel" className='inps' placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /><br/>
      <input type="email" className='inps' placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /><br/>
      <input type="text" className='inps1' placeholder="Message" {...register("Message", {required: true})} /><br/>

      <input type="submit" className='btn' />
    </form>
    </div>
  );
}