// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('DATA => ', data);
//     document.getElementById('name').innerHTML = data.name;
//     // email, phone, address -> city
//     // lat -37.3159, lng 81.1496
//     const newLocation =
//       'lat ' + data.address.geo.lat + ', lng ' + data.address.geo.lng;
//     document.getElementById('location').innerHTML = newLocation;
//   });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((value, index) => {
      // create div
      let nodeDiv = document.createElement('div');
      // create title
      let nodeTitle = document.createElement('h5');
      // create body
      let nodeBody = document.createElement('p');

      // Text title
      let textTitle = document.createTextNode(value.title);
      // Text body
      let textBody = document.createTextNode(value.body);

      // New Element Title
      nodeTitle.appendChild(textTitle);
      // New Element Body
      nodeBody.appendChild(textBody);

      nodeDiv.appendChild(nodeTitle);
      nodeDiv.appendChild(nodeBody);

      document.getElementById('postList').appendChild(nodeDiv);
    });

    // data.forEach((value) => {
    //   let node = document.createElement('li'); // <li></li>
    //   let textnode = document.createTextNode(value.title); // wegewger
    //   node.appendChild(textnode); // <li>wegewger</li>
    //   document.getElementById('myList').appendChild(node);
    //   // <ul id="myList">
    //   //     <li>efeegw</li>
    //   //     <li>wegewger</li>
    //   // </ul>
    // });

    // data.forEach((value) => {
    //   var node = document.createElement('li'); // Create a <li> node
    //   var textnode = document.createTextNode(value.title); // Create a text node
    //   node.appendChild(textnode); // Append the text to <li>
    //   document.getElementById('myList').appendChild(node); // Append <li> to <ul> with id="myList"
    // });
  });
