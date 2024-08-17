import { Route, Routes } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, Text } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';

import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';

import HomePage from './components/home/HomePage';
import Contacts from './components/contacts/Contacts';

Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Amplify logo"
            src="https://docs.amplify.aws/assets/logo-dark.svg"
          />
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },


  };


  return (
    <Authenticator loginMechanism={['email']} components={components}>
      {({ signOut, user }) => (
        <div>
          <SiteNav logOut={signOut} />
          <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/' exact={true} element={<HomePage />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
}

export default App;