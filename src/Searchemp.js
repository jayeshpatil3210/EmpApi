// import React from 'react'

// function Searchemp() {

// const [users, usersSet] = React.useState([]);


// let data={id, fname,salary,gender}
//     fetch("http://localhost:3000/employees/create",{
//         method : 'POST',
//         headers :{
//             'Accept' : 'application/json',
//             'Content-Type' : 'application/json'
//         },
//         body:JSON.stringify(data)
//         }).then((result)=>{
//             console.warn("statusText ",result.statusText);

//             if(result.response.status === 200 || result.response.status === 201){
//                 setStatus({ type: 'success' });

//                 const responseJson =  result.json();
//       usersSet(responseJson.data);

//             }
//             else{
//                 let statusText = result.statusText;
//                 setStatus({ type: 'error', statusText },result.statusText);
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//             setStatus({ type: 'error', error });
//           });

//   React.useEffect(() => {
//     async function fetchUsers() {
//       const fullResponse = await fetch("http://localhost:3000/employees/create");
//       const responseJson = await fullResponse.json();
//       usersSet(responseJson.data);
//     }

//     fetchUsers();
//   }, []);
//   return (
//     <div>
//     <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <h3>
//               {user.first_name} {user.last_name}
//             </h3>
//             <p>{user.email}</p>
//           </li>
//         ))}
//       </ul>
      
//     </div>
//   )
// }

// export default Searchemp
