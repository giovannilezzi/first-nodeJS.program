const axios = require('axios')

axios.get('https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


axios.post('https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users', {
  createdAt: "2020-01-30T11:18:24.247Z",
  name: "new course",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/de_ascanio/128.jpg"
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})