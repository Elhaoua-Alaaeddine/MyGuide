import { PaperProvider } from "react-native-paper";
import { ContextProvider } from "./config/Context";
import AppNavigation from "./navigation/appNavigation";




export default function App() {
  return (
      <ContextProvider>
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
      </ContextProvider>
  );
}
