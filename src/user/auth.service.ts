import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { randomBytes, scrypt as _scrypt} from "crypto";
import { promisify } from "util";
const scrypt = promisify(_scrypt)

@Injectable()
export class AuthService {

    constructor(private UserService : UserService){}

    async signup(email: string, password: string) {
        //See if email is in use 
        const users = await this.UserService.findByEmail(email)

        if (users) {
            throw new BadRequestException('email in use')
        }
        //Hash the password
        // 1. Generate a salt        
        const salt = randomBytes(8).toString('hex')
        //2. Hash the salt and the password together
        const hash = (await scrypt(password, salt, 32)) as Buffer 
        //3. Join the hashed result and the salt together
        const result = salt + '.' + hash.toString('hex')
        //Create a new user and save it
        const user = this.UserService.create(email, result)
        //return the user
        return user
    }

    async signin(email: string, password: string) {
        //Find the user by email
        const user = await this.UserService.findByEmail(email)
        //If user not found, throw an error
        if (!user) {
            throw new BadRequestException('Invalid email or password')
        }
        //Extract the salt and hashed password from the user
        const [salt, hashedPassword] = user.password.split('.')
        //Hash the provided password with the extracted salt
        const hash = (await scrypt(password, salt, 32)) as Buffer
        //Compare the hashed password with the extracted hashed password
        if (hash.toString('hex') === hashedPassword) {
            //If passwords match, return the user
            return user
        }
        //If passwords don't match, throw an error
        throw new BadRequestException('Invalid email or password')
    }
}