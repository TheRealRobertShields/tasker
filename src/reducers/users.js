// eslint-disable-next-line
export default (users = [], action) => {
   switch (action.type) {
      case 'FETCH_ALL_USERS':
         console.log('FETCH_ALL_USERS')
         return action.payload;
      case 'CREATE_USER':
         console.log('CREATE_USER')
         return [...users, action.payload];
      case 'UPDATE_USER':
         console.log('UPDATE_USER')
         return users.map((user) => user._id === action.payload._id ? action.payload : user)
      case 'DELETE_USER':
         console.log('DELETE_USER')
         return users.filter((user) => user._id !== action.payload)
      default:
         return users;
   }
}