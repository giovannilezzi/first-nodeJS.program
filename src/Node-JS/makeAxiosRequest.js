const axios = require("axios");

axios
  .get("https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users")
  .then(response => console.log(response))
  .catch(error =>console.log(error))
  .then(() => console.log('Always executed'));

axios
  .get("https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users/1")
  .then(response => console.log(response))
  .catch(error =>console.log(error))
  .then(() => console.log('Always executed'));

axios
  .post("https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users", {
    createdAt: "2020-01-30T11:18:24.247Z",
    name: "new course",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/de_ascanio/128.jpg"
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(res);
  })
  .catch(error => console.error(error));

axios
  .put("https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users/1", {
    createdAt: new Date(),
    name: "new course"
  })
  .then(response => console.log(response))
  .catch(error =>console.log(error))
  .then(() => console.log('Always executed'));

axios
  .delete("https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users/5")
  .then(({ data }) => console.log(data))
  .catch(error =>console.log(error))
  .then(() => console.log('Always executed'));