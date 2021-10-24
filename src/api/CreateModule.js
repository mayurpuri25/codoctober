export const Module = ({title,description}) => {
    fetch("http://pathtracker123.herokuapp.com/create-module/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `token ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({title,description}),
    })
      .then((res) => res.json())
      .then((res) => {
          console.log(res);
        
      })
}