const { range, of } = require('rxjs');
const { map, filter, mergeMap, tap } = require('rxjs/operators');
const axios = require('axios');

/* range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x)); */

of(null)
.pipe(
  mergeMap(() => axios.get("https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users")),
  tap(({data}) => console.log('RESS --->', data)), // {data} sarebbe res.data
  mergeMap(({ data }) => axios.get(`https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users/${data[0].id}`)),
  tap(({data}) => console.log('RESS --->', data)), // {data} sarebbe res.data
  mergeMap(({ data }) => axios.put(`https://5e32bfe7e0161c00140abb4d.mockapi.io/api/nodeJS/users/${data.id}`, {
    name: "new name changed from code"
  })),
).subscribe(
  (({ data }) => {
    console.log('DATA____>>>>', 'data', data, data.name)
  })
)