type User = {
    name: string
    age: number
    sex: boolean
}

type UserKeys = keyof User & {} // 后面追加一个& {},可以直观的看到type UserKeys = "name" | "age" | "sex"的详细类型