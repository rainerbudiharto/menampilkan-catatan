const { addNoteHandler, getAllNotesHandler  } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    //handler: () => {},
    handler: addNoteHandler,
    /*options: {
      cors: {
        origin: ['*'],
      },*/
    },
    {
      method: 'GET',
      path: '/notes',
      handler: () => {},
    },

    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
   },
  
 ];
  
 module.exports = routes;