import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entites';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({
      email: email,
      password: password,
    });
    this.repo.save(user);
  }

  findOne(id: number) {
    const user = this.repo.findOneBy({ id });
    return user;
  }

  findAll() {
    const user = this.repo.find();
    return user;
  }

  findByEmail(email: string) {
    const user = this.repo.findOneBy({ email });
    return user;
  }
}
