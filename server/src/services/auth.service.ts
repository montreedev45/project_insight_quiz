export const loginUser = async(email: string) => {
    if(email === "teacher1@gmail.com"){
        return {id: 1, email, role: "teacher", token:"a1b2c3d4e5"}
    }

    throw new Error("User not found")
}