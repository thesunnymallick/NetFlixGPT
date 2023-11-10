
 const checkValidateForm=(email?:string |undefined, password?:string | undefined , name?:string | undefined , isShow?:boolean)=>{
     if(isShow===true){
      if(name===undefined || name==='') return 'Name is required'
     }
    if (email === undefined || email==='') return "Email id is required";
    if (password === undefined || password==='') return "Password is required";

   const isEmailValid=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
   const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(password)
   if(!isEmailValid) return "Email id is not valid"
   if(!isPassword) return "Passowrd is not valid"

   return null;

}
export default checkValidateForm