
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


// const pizzlist = [
//     {
//       name: "Margarita",
//       img: "https://copykat.com/wp-content/uploads/2019/03/homemade-margarita-pizza-recipe.jpg",
//     },
//     {
//       name: "Bacon",
//       img: "https://cdn1.vectorstock.com/i/1000x1000/73/45/pizza-with-bacon-slice-vector-21247345.jpg",
//     },
//     {
//       name: "Chili pepper",
//       img: "https://media.istockphoto.com/vectors/chilli-pepper-pizza-vector-illustration-vector-id1210174695",
//     },
//     {
//       name: "Mushrooms",
//       img: "https://previews.123rf.com/images/dmstudio/dmstudio0910/dmstudio091000031/5751631-vector-pizza-with-mushrooms-and-olives.jpg",
//     },
//     {
//       name: "Vegetarian",
//       img: "https://cdn5.vectorstock.com/i/1000x1000/89/24/vegetarian-pizza-with-greens-mushrooms-olive-vector-21698924.jpg",
//     },
//     {
//       name: "Shrimp",
//       img: "https://thumbs.dreamstime.com/b/shrimp-pizza-object-packaging-advertisements-menu-isolated-white-vector-illustration-cartoon-147604037.jpg",
//     },
//     {
//       name: " Pepperoni pizza",
//       img: "https://thumbs.dreamstime.com/z/pizza-pepperoni-slices-illustration-italian-44738501.jpg",
//     },
//     {
//       name: "Italian pizza",
//       img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3524436.jpg",
//     },
//   ];










