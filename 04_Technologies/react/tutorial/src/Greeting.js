export default function Greeting({message}) {
  return <h3>{message}</h3>;
}

Greeting.defaultProps = {
  message: 'Default Message'
}