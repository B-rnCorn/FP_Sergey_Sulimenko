class Client {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}

class Organization extends Client {
  constructor(name, email, organizationName) {
    super(name, email);
    this._organizationName = organizationName;
  }

  get organizationName() {
    return this._organizationName;
  }

  set organizationName(newOrgName) {
    this._organizationName = newOrgName;
  }
}

class Person extends Client {
  constructor(name, email, age) {
    super(name, email);
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Photoset {
  constructor(title, description) {
    this._title = title;
    this._description = description;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }
}

class Photo {
  constructor(url, description, date) {
    this._url = url;
    this._description = description;
    this._date = date;
  }

  get url() {
    return this._url;
  }

  set url(newUrl) {
    this._url = newUrl;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get date() {
    return this._date;
  }

  set date(newDate) {
    this._date = newDate;
  }
}

// Пример использования классов
const organization1 = new Organization(
  "John Doe",
  "john.doe@example.com",
  "ABC Inc."
);
console.log(organization1.name);
console.log(organization1.email);
console.log(organization1.organizationName);

const person1 = new Person("Jane Smith", "jane.smith@example.com", 25);
console.log(person1.name);
console.log(person1.email);
console.log(person1.age);

const photoset1 = new Photoset("Nature", "Beautiful nature photos");
console.log(photoset1.title);
console.log(photoset1.description);

const photo1 = new Photo(
  "https://example.com/photo1.jpg",
  "Sunset",
  "2022-01-01"
);
console.log(photo1.url);
console.log(photo1.description);
console.log(photo1.date);
