export interface Sheet {
  id: number
  name: string
  description: string | null
  details: Record<string, any> | null
  strength: number
  intelligence: number
  dexterity: number
  wisdom: number
  charisma: number
  constitution: number
  created_at: string
  updated_at: string
}