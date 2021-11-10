import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './componets/ChatFeed.jsx'
import './App.css'
import LoginForm from './componets/loginForm'

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm/> 
    return (
        <ChatEngine
			height='100vh'
			userName= {localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='5a4728b9-1137-422a-a8ee-e04069ee16e2'
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
		/>
    );
}

export default App;