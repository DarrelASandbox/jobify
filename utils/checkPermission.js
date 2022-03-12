import { UnauthenticatedError } from '../errors/index.js';

const checkPermission = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnauthenticatedError('Not authroized to access this route');
};

export default checkPermission;
