import { useCallback, useState } from 'react'


function App() {
  let cnt = 0;

  const handleFunction = useCallback(() => {
    cnt++
    console.log("gjyg");
    return cnt
  }, []);

  return <button onClick={handleFunction}>Click me:</button>;
}
export default App
