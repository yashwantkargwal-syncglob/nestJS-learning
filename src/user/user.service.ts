import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private user = [
    { id: 1, name: 'Yashwant', userName: 'yashwant1' },
    { id: 2, name: 'Ravi', userName: 'ravi2' },
    { id: 3, name: 'Balwant', userName: 'balwant3' },
    { id: 4, name: 'Ankit', userName: 'ankit4' },
    { id: 5, name: 'Pooja', userName: 'pooja5' },
    { id: 6, name: 'Neha', userName: 'neha6' },
    { id: 7, name: 'Amit', userName: 'amit7' },
    { id: 8, name: 'Vikram', userName: 'vikram8' },
    { id: 9, name: 'Rohit', userName: 'rohit9' },
    { id: 10, name: 'Priya', userName: 'priya10' },
    { id: 11, name: 'Suman', userName: 'suman11' },
    { id: 12, name: 'Karan', userName: 'karan12' },
    { id: 13, name: 'Deepak', userName: 'deepak13' },
    { id: 14, name: 'Sneha', userName: 'sneha14' },
    { id: 15, name: 'Arjun', userName: 'arjun15' },
    { id: 16, name: 'Komal', userName: 'komal16' },
    { id: 17, name: 'Tushar', userName: 'tushar17' },
    { id: 18, name: 'Ritesh', userName: 'ritesh18' },
    { id: 19, name: 'Simran', userName: 'simran19' },
    { id: 20, name: 'Manish', userName: 'manish20' },
  ];

  id = 20;
  getUser() {
    return this.user;
  }

  getUserById(id: number) {
    return this.user.find((user) => user?.id === id);
  }

  postUserData({ name, userName }: { name: string; userName: string }) {
    this.id = +1;
    const newUser = { id: this.id, name, userName };
    this.user.push(newUser);
    return newUser;
  }
}
