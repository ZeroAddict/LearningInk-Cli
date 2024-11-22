import LoginPage from "../components/LoginPage";
import { AuthProvider } from '../contexts/AuthContext';
function loginPage({ Login, pageProps }) {
    return (
      <div className="h-[100vh]">
      <AuthProvider>
        <LoginPage {...pageProps} />
      </AuthProvider>
      </div>
    );
  }
  
  export default loginPage;