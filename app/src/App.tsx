import MainPage from "./components/MainPage";
import { ProgressProvider } from "./context/ProgressContext";

export default function App(): JSX.Element {
  return (
    <ProgressProvider>
      <main className="app-main">
        <MainPage />
      </main>
    </ProgressProvider>
  );
}
