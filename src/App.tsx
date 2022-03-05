import './assets/stylesheets/App.css';
import { Top } from './components/Top';
import { Middle } from './components/Middle';
import { Bottom } from './components/Bottom';

export function App() {
  return (
    <div className="div">
      <Top /> 
      <Middle />
      <Bottom />
    </div>
  )
}