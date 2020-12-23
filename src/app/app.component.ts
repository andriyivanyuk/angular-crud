import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  friendsForm: FormGroup;
  options = ['all', 'developer', 'top-manager', 'writer', 'businessman', 'engineer', 'preacher'];

  filteredItems = [];

  friends = [
    { id: 1, name: 'Andriy', specialty: ['developer', 'preacher'] },
    { id: 2, name: 'Sasha', specialty: ['top-manager'] },
    { id: 3, name: 'Stephan', specialty: ['developer'] },
    { id: 4, name: 'Masha', specialty: ['writer'] },
    { id: 5, name: 'Katya', specialty: ['businessman'] },
    { id: 6, name: 'Masha', specialty: ['preacher', 'top-manager'] },
    { id: 6, name: 'Zina', specialty: ['engineer'] },
  ];

  constructor(private fb: FormBuilder) {}

  filterByName() {
    const currentName = this.friendsForm.value.friendControl.toLowerCase();
    const filteredNames = this.friends.filter((person) => {
      return person.specialty.indexOf(currentName) != -1;
    });
    this.filteredItems = filteredNames;

    if(currentName === 'all') {
      this.filteredItems = [...this.friends];
    }
    console.log(this.filteredItems);
  }

  ngOnInit() {
    this.friendsForm = this.fb.group({
      friendControl: ['all'],
    });
    this.filteredItems = [...this.friends];
  }
}
