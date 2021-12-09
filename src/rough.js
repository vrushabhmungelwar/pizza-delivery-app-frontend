
// export function UserLogIn() {
//   // const history = useHistory();
//   const [credentials, setCredentials] = useState({ email: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`${API_URL}/users2/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);
//   }

//   const onChange = (e)=>{
//     setCredentials({...credentials, [e.target.name]: e.target.value})
//   }












