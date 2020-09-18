interface User {
  name: string
  age: number
  weight: number
}

const randomUsers = (): User[] => {
  const names = ['Matheus R. Brunelli', 'Maya Red Heeler', 'Estrelinha Black Pinscher']
  const arr: User[] = []
  for (let i = 0; i < 100; i++) {
    arr.push({
      name: names[Math.floor(Math.random() * names.length)],
      age: Math.floor(Math.random() * 50),
      weight: Math.floor(Math.random() * 150)
    })
  }
  return arr
}

export const userList = randomUsers()
