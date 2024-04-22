class UserFactory {
    static createUser(type, nome, email, idade) {
        switch (type) {
            case "default":
                return new User(nome, email, idade);
            case "premium":
                // Implementação para usuário premium
                break;
            default:
                throw new Error("Tipo de usuário inválido");
        }
    }
}
