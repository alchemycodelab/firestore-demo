exports.helloWorld = admin => (request, response) => {
  response.send('hello');
  return admin.firestore().collection('hello').add({
    hello: 'world'
  })
    .then(() => response.status(200).send(request.body));
};
