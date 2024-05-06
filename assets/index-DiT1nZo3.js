import{j as e,u as c,g as m,r as d,a as u}from"./index-DGknuGTH.js";import{d as x,e as r,u as p,g,b as h,C as l}from"./index.esm-BaSYFJTR.js";const b="/todo-list/assets/loginImage-UoQRtkq8.svg",f=({text:s})=>e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),s??"... submitting"]}),j=x().shape({email:r().email("Invalid email").max(50,"Email must be less than 50 characters").required("Email is required"),password:r().min(4,"password must be at least 4 characters").required("Password is required").max(16,"Password must be less than 16 characters")}),w=()=>{const s=c(),t=p(),i=m();d.useEffect(()=>{i&&s("/todos")},[i]);const a=g({initialValues:{email:"",password:""},validationSchema:j,onSubmit:async n=>{(await t(u(n))).type==="auth/login/fulfilled"&&s("/todos")}}),o=(!a.values.email||!a.values.password||Object.keys(a.errors).length>0)&&"opacity-50";return{formik:a,loginButtonOpacity:o}},k=()=>{const{formik:s,loginButtonOpacity:t}=w();return e.jsx("div",{className:"bg-[#6C63FF]  min-h-screen  flex justify-center items-center",children:e.jsxs("div",{className:"bg-[#F7F7F7] rounded-2xl flex max-w-4xl p-5 items-center gap-3",children:[e.jsxs("div",{className:"md:w-1/2 px-2",children:[e.jsxs("div",{className:"flex  items-center gap-5",children:[e.jsx("img",{className:"rounded-2xl w-[50px] h-[50px] md:w-[80px] md:h-[80px]",src:h,alt:"login form image"}),e.jsx("h4",{className:"text-[#252525] text-xl font-bold ",children:" Rapptr Labs"})]}),e.jsx("p",{className:" mt-4 text-[#252525] text-sm md:text-xl font-bold",children:"Sign into your account"}),e.jsxs("form",{className:"flex flex-col gap-4 mt-3",onSubmit:s.handleSubmit,children:[e.jsx(l,{formik:s,name:"email",placeholder:" user@rapptrlabs.com",type:"email",label:"Email",required:!0}),e.jsx(l,{formik:s,name:"password",placeholder:"Must be at least 4 characters",type:"password",label:"Password",required:!0}),e.jsx("button",{disabled:s.isSubmitting,className:`bg-[#6C63FF]  ${t}   text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium`,type:"submit",children:s.isSubmitting?e.jsx(f,{text:"sending"}):"Login"})]})]}),e.jsx("div",{className:"md:block hidden w-1/2",children:e.jsx("img",{className:"h-[500px]",src:b,alt:"login form image"})})]})})};export{k as default};
