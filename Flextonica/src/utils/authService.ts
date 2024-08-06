// services/authService.ts
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../../firebase/firebase-config';
import { Alert } from 'react-native';
import { FirebaseError } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';

const auth = getAuth(app);

export const logueo = async (email: string, password: string, navigation: any, setLoading: any) => {
  setLoading(true);
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const uid = user.uid;

    navigation.navigate('Tabs');
    console.log('Inicio de sesión exitoso:', user.uid);
  } catch (error) {
    let errorMessage = '';

    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/invalid-credential':
          errorMessage = 'Las credenciales no son válidas.';
          break;
        default:
          errorMessage = 'Ocurrió un error durante el inicio de sesión. Por favor, revisa tus datos e inténtalo nuevamente más tarde.';
          break;
      }
    } else {
      errorMessage = 'Ocurrió un error inesperado. Inténtalo nuevamente más tarde.';
    }

    Alert.alert(
      'Error durante el inicio de sesión',
      errorMessage,
      [
        { text: 'Cerrar', onPress: () => navigation.navigate('Login') }
      ]
    );
  } finally {
    setLoading(false);
  }
};

export const Register = async (email: string, password: string, navigation: any, setLoading: any) => {
  setLoading(true);
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const uid = user.uid;

    navigation.navigate('Tabs');
    console.log('Registro exitoso:', user.uid);
  } catch (error) {
    let errorMessage = '';

    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'El correo electrónico ya está en uso.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'El correo electrónico no es válido.';
          break;
        case 'auth/weak-password':
          errorMessage = 'La contraseña es demasiado débil.';
          break;
        default:
          errorMessage = 'Ocurrió un error durante el registro. Por favor, revisa tus datos e inténtalo nuevamente más tarde.';
          break;
      }
    } else {
      errorMessage = 'Ocurrió un error inesperado. Inténtalo nuevamente más tarde.';
    }

    Alert.alert(
      'Error durante el registro',
      errorMessage,
      [
        { text: 'Cerrar', onPress: () => navigation.navigate('CrearCuenta') }
      ]
    );
  } finally {
    setLoading(false);
  }
};


export const BtnCerrarSesion = async () => {
    try{
      await auth.signOut();
      // console.log('Cerrar Sesion')
    }catch(e){
      console.log('Error al cerrar sesión', e);
    }
  }