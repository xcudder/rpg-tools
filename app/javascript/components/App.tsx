import SheetEditor from './SheetEditor'
import SheetList from './SheetList'
import './App.scss'
import { SheetsProvider } from '../contexts/SheetsContext'

export const App = () => {
  return (
    <div className="app">
      <SheetsProvider>
        <div>
          <h1>Character Sheet</h1>
          <SheetEditor />
        </div> 
        <div>
          <h1>Characters</h1>
          <SheetList />
        </div>
      </SheetsProvider>
    </div>
  )
}

export default App