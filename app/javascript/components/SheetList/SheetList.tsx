import { useEffect } from "react"
import { useSheetsContext } from "../../contexts/SheetsContext"
import { Sheet } from "../../types"

export const SheetList = () => {
  const { sheets, setSheets } = useSheetsContext()


  useEffect(() => {
    fetch('sheets')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => setSheets(data))
    .catch(error => {
      console.error('Error fetching characters:', error)
    })
  }, [setSheets])

  return (
    <div>
      <ul>
        {sheets.map((character: Sheet) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
}