import {useParams} from 'react-router-dom'

function UserDetails() {
  const {id} = useParams()
  return <div>UserDetail of {id}</div>
}
export default UserDetails
