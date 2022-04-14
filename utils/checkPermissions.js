import { UnAuthenticatedError } from '../errors/index.js'

// Check permission (check if userID === urlCreatorId (or any other source)).
const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return

  throw new UnAuthenticatedError('Not authorized to access this route')
}

export default checkPermissions
