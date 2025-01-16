import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";

function App() {
  const [gitActions, setGitActions] = useState(null)

  const fetchGitActions = async () => {
    try {
      const fetchGitActionsResponse = await fetch('http://127.0.0.1:5001/getAction')

      const fetchGitActionsData = await fetchGitActionsResponse.json()
      console.log(fetchGitActionsData);
      
      setGitActions(fetchGitActionsData)
    } catch (error) {
      console.log('Failed to fetch git actions: ', error)
    }
  }

  useEffect(()=>{
    fetchGitActions()
  }, [])

  useEffect(()=>{
    const interval = setInterval(() => {
    fetchGitActions();
  }, 15000)
  return () => clearInterval(interval)
  }, [gitActions])
  return (
    <div>
      <div className="text-center py-5 text-white text-4xl mb-10 bg-black font-sans font-bold">Git repository Activity Tracker</div>
      <div className="mx-20 mb-20">
        {
          gitActions && gitActions.map((gitAction, index)=>{
            return <ListItem gitAction={gitAction} key={index}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
