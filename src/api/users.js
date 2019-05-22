import { users } from './mock';

const getUserById = id => users.find(user => user.id === id);

export default getUserById;
